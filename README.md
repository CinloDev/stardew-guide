# Stardew Guide

Guia interactiva de Stardew Valley construida con Next.js (App Router), TypeScript y Tailwind.

La idea del proyecto es centralizar herramientas utiles para partida diaria:
- seguimiento del museo,
- guia de regalos para aldeanos,
- recetas de cocina,
- calendario estacional.

## Objetivo

Crear una aplicacion escalable y modular que empiece con datos en JSON y evolucionar a un backend real con Prisma + PostgreSQL, manteniendo buena arquitectura desde el inicio.

## Stack

- Next.js (App Router)
- React + TypeScript
- TailwindCSS
- Zustand (estado global de progreso)
- Biome (lint + format)
- Prisma (preparado para futura integracion)

## Arquitectura

Estructura basada en features y separacion por responsabilidades:

- `src/app`: rutas y paginas
- `src/components`: UI reutilizable (layout, ui, common)
- `src/features`: logica y componentes por dominio
- `src/data`: datasets iniciales del juego (JSON)
- `src/store`: estado global con persistencia en localStorage
- `src/types`: modelos TypeScript
- `prisma/`: esquema para futura capa de datos

## Funcionalidades actuales

1. Museum interactive tracker:
estado persistente en `localStorage` (encontrado/donado) con interfaz modular.
2. Villager gift guide:
listado y busqueda por aldeano o regalo.
3. Cooking recipes:
vista base de recetas y utilidad para ordenarlas.
4. Seasonal calendar:
eventos iniciales por estacion.

## Estado de datos

- Actualmente se usan archivos JSON en `src/data`.
- Hay endpoint base en `src/app/api/progress/route.ts` para futura persistencia real.
- `prisma/schema.prisma` ya incluye modelo inicial de progreso de usuario.

## Scripts utiles

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run format
npm run check
npm run prisma:generate
npm run prisma:migrate
npm run generate:data
```

## Desarrollo local

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar en desarrollo:

```bash
npm run dev
```

3. Abrir en navegador:

`http://localhost:3000`

## Roadmap (proximas iteraciones)

1. Conectar progreso a PostgreSQL con Prisma.
2. Completar datasets reales de Stardew Valley.
3. Agregar autenticacion de usuario.
4. Añadir tests (unitarios + integracion).
5. Mejorar filtros, busquedas y vistas de detalle.
