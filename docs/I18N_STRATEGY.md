# Estrategia de Internacionalización (i18n) - Recomendaciones

## 📋 Estado Actual

El proyecto ya tiene implementado un **sistema modular de traducciones** en `src/lib/i18n.ts` con soporte para 4 idiomas:

- **es** - Español (default)
- **en** - English
- **pt** - Português
- **fr** - Français

## 🎯 Recomendaciones de Idiomas

Para una guía de Stardew Valley, te recomiendo enfocarte en estos idiomas clave por orden de importancia:

### Tier 1 (Essentials)
1. **Español (es)** ✅ - Implementado
   - Comunidad hispanohablante amplia (España, América Latina)
   - Mayor retención de usuarios
   
2. **English (en)** ✅ - Implementado
   - Necesario para alcance internacional
   - Referencia estándar en gaming

### Tier 2 (Growth)
3. **Português (pt)** ✅ - Implementado
   - Brasil tiene comunidad importante de Stardew Valley
   - Rentorno inversión moderado

4. **French (fr)** ✅ - Implementado
   - Comunidad francesa/belgara
   - Valor agregado para EU

### Tier 3 (Future - Opcionales)
- **Alemán (de)** - Comunidad centroeuropea
- **Italiano (it)** - Comunidad italiana
- **Japonés (ja)** - Audiencia asiática
- **Chino Simplificado (zh)** - Audiencia más amplia

## 🔄 Cómo Usar el Sistema

### Agregar un nuevo idioma

1. **Abre `src/lib/i18n.ts`**
2. **Agrega el idioma a `Language` type:**
   ```typescript
   export type Language = "es" | "en" | "pt" | "fr" | "de"; // ← Agrega aquí
   ```

3. **Agrega traducción completa en el objeto `translations`:**
   ```typescript
   const translations: Record<Language, TranslationDict> = {
     // ... otros idiomas
     de: {
       nav: {
         calendar: "Kalender",
         villagers: "Dorfbewohner",
         // ... resto de traducciones
       },
       // ... resto de secciones
     }
   };
   ```

4. **Actualiza `getAvailableLanguages()`:**
   ```typescript
   { code: "de", name: "Deutsch" },
   ```

### Usar traducciones en componentes

```typescript
import { getTranslations } from "@/lib/i18n";

export default function MiPagina() {
  const t = getTranslations("es"); // O "en", "pt", "fr"
  
  return <h1>{t.pages.calendar.title}</h1>;
}
```

## 🚀 Próximos Pasos Recomendados

### 1. **Implementar Selector de Idioma (Medium)**
   - Agregar switcher en navbar/footer
   - Guardar preferencia en localStorage
   - Cambiar dinámicamente entre idiomas

   ```typescript
   // Crear archivo: src/components/common/LanguageSwitcher.tsx
   export function LanguageSwitcher() {
     const { language, setLanguage } = useLanguageStore(); // Zustand hook
     // Renderizar dropdown con idiomas disponibles
   }
   ```

### 2. **Persistir Preferencia de Idioma (Easy)**
   - Crear custom hook `useLanguage()` con Zustand
   - Guardar en localStorage
   - Sincronizar con URL params (opcional)

### 3. **Usar Next.js i18n Router (Advanced)**
   - Migrar a `next-intl` para enrutamiento automático
   - URLs como `/es/calendario`, `/en/calendar`
   - Soporte SEO mejorado

   ```bash
   npm install next-intl
   ```

### 4. **Extraer Traducciones a JSON (Best Practice)**
   - Moveré traducciones de `i18n.ts` a archivos JSON
   - Mejora mantenibilidad y colaboración
   - Permite usar herramientas de traducción profesionales (Crowdin, etc.)

## 📚 Opciones de Herramientas Externas

Si escalas a muchos idiomas:

| Herramienta | Costo | Mejor Para | Integración |
|---|---|---|---|
| **Crowdin** | Freemium | Traductores externos, gestión de versiones | REST API |
| **Lokalise** | Freemium-Premium | Equipos medianos | Next.js plugin |
| **next-intl** | Gratis (open source) | Developer-friendly i18n | Built-in |
| **i18next** | Gratis | Flexible, muchos plugins | Format JSON/YAML |

## 💡 Tips de Mantenimiento

1. **Siempre mantén las claves consistentes** entre idiomas
2. **Traduce completo** - no dejes textos en idiomas parciales
3. **Prueba en mobile** - algunos textos se rompen por longitud (ej: alemán es más largo)
4. **Usa context/provider** para evitar pasar `lang` a cada componente

## 📄 Archivos Modificados

✅ `src/lib/i18n.ts` - Sistema principal de traducciones  
✅ `src/components/layout/Navbar.tsx` - Nav con orden actualizado  
✅ `src/app/calendar/page.tsx` - En español  
✅ `src/app/villagers/page.tsx` - En español  
✅ `src/app/museum/page.tsx` - En español  
✅ `src/app/recipes/page.tsx` - En español  
✅ `src/app/items/page.tsx` - En español  

---

## 🎮 Idiomas Específicos de Gaming (Referencia)

Para contexto, los idiomas más comunes en comunidades de juegos indie:

1. **Español** - 8-12% de la comunidad gaming global
2. **Portugués (BR)** - 5-8%
3. **Francés** - 3-5%
4. **Alemán** - 4-6%

Estadísticas sugieren: **es → en → pt es la prioridad óptima** para un juego indie como Stardew Valley.

