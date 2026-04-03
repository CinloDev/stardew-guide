// Translations dictionary for the app
// This file can be easily extended for multiple languages

export type Language = "es" | "en" | "pt" | "fr";

export interface TranslationDict {
  nav: {
    calendar: string;
    villagers: string;
    communityCenter: string;
    museum: string;
    recipes: string;
  };
  pages: {
    calendar: {
      title: string;
      description: string;
    };
    villagers: {
      title: string;
      description: string;
    };
    museum: {
      title: string;
      description: string;
    };
    recipes: {
      title: string;
      description: string;
    };
    items: {
      title: string;
      description: string;
    };
  };
  common: {
    noEvents: string;
    today: string;
    filter: string;
    filterAll: string;
  };
}

const translations: Record<Language, TranslationDict> = {
  es: {
    nav: {
      calendar: "Calendario",
      villagers: "Aldeanos",
      communityCenter: "Centro Cívico",
      museum: "Museo",
      recipes: "Recetas",
    },
    pages: {
      calendar: {
        title: "Calendario Estacional",
        description: "Planifica festivales, cumpleaños y cosechas por estación con vista diaria.",
      },
      villagers: {
        title: "Aldeanos",
        description: "Descubre regalos favoritos, cumpleaños y más sobre los aldeanos de Pelican Town.",
      },
      museum: {
        title: "Museo",
        description: "Sigue tu progreso en la colección del museo.",
      },
      recipes: {
        title: "Recetas",
        description: "Explora todas las recetas de cocina y artesanía.",
      },
      items: {
        title: "Objetos",
        description: "Consulta información detallada de ítems.",
      },
    },
    common: {
      noEvents: "Sin eventos",
      today: "Hoy",
      filter: "Filtro",
      filterAll: "Todo",
    },
  },
  en: {
    nav: {
      calendar: "Calendar",
      villagers: "Villagers",
      communityCenter: "Community Center",
      museum: "Museum",
      recipes: "Recipes",
    },
    pages: {
      calendar: {
        title: "Seasonal Calendar",
        description: "Plan festivals, birthdays and harvests by season with daily view.",
      },
      villagers: {
        title: "Villagers",
        description: "Discover favorite gifts, birthdays and more about Pelican Town villagers.",
      },
      museum: {
        title: "Museum",
        description: "Track your museum collection progress.",
      },
      recipes: {
        title: "Recipes",
        description: "Explore all cooking and crafting recipes.",
      },
      items: {
        title: "Items",
        description: "Browse detailed item information.",
      },
    },
    common: {
      noEvents: "No events",
      today: "Today",
      filter: "Filter",
      filterAll: "All",
    },
  },
  pt: {
    nav: {
      calendar: "Calendário",
      villagers: "Vilarejos",
      communityCenter: "Centro Comunitário",
      museum: "Museu",
      recipes: "Receitas",
    },
    pages: {
      calendar: {
        title: "Calendário Sazonal",
        description: "Planeje festivais, aniversários e colheitas por estação com visualização diária.",
      },
      villagers: {
        title: "Aldeões",
        description: "Descubra presentes favoritos, aniversários e mais sobre os aldeões de Pelican Town.",
      },
      museum: {
        title: "Museu",
        description: "Acompanhe seu progresso na coleção do museu.",
      },
      recipes: {
        title: "Receitas",
        description: "Explore todas as receitas de culinária e artesanato.",
      },
      items: {
        title: "Itens",
        description: "Navegue informações detalhadas do item.",
      },
    },
    common: {
      noEvents: "Sem eventos",
      today: "Hoje",
      filter: "Filtro",
      filterAll: "Tudo",
    },
  },
  fr: {
    nav: {
      calendar: "Calendrier",
      villagers: "Villageois",
      communityCenter: "Centre Communautaire",
      museum: "Musée",
      recipes: "Recettes",
    },
    pages: {
      calendar: {
        title: "Calendrier Saisonnier",
        description: "Planifiez les festivals, anniversaires et récoltes par saison avec vue quotidienne.",
      },
      villagers: {
        title: "Villageois",
        description: "Découvrez les cadeaux préférés, anniversaires et plus sur les villageois de Pelican Town.",
      },
      museum: {
        title: "Musée",
        description: "Suivez votre progression dans la collection du musée.",
      },
      recipes: {
        title: "Recettes",
        description: "Explorez toutes les recettes de cuisine et d'artisanat.",
      },
      items: {
        title: "Objets",
        description: "Parcourez les informations détaillées des objets.",
      },
    },
    common: {
      noEvents: "Pas d'événements",
      today: "Aujourd'hui",
      filter: "Filtre",
      filterAll: "Tous",
    },
  },
};

// Default language
const DEFAULT_LANGUAGE: Language = "es";

/**
 * Get translations for a specific language
 * @param lang Language code (es, en, pt, fr)
 * @returns Translation dictionary
 */
export function getTranslations(lang: Language = DEFAULT_LANGUAGE): TranslationDict {
  return translations[lang] || translations[DEFAULT_LANGUAGE];
}

/**
 * Get navigation links with current language labels
 * @param lang Language code (default: Spanish)
 * @returns Ordered navigation links
 */
export function getNavigation(lang: Language = DEFAULT_LANGUAGE) {
  const t = getTranslations(lang);
  return [
    { href: "/calendar", label: t.nav.calendar },
    { href: "/villagers", label: t.nav.villagers },
    { href: "/items", label: t.nav.communityCenter }, // Placeholder for community center page
    { href: "/museum", label: t.nav.museum },
    { href: "/recipes", label: t.nav.recipes },
  ];
}

/**
 * Get all available languages
 */
export function getAvailableLanguages(): { code: Language; name: string }[] {
  return [
    { code: "es", name: "Español" },
    { code: "en", name: "English" },
    { code: "pt", name: "Português" },
    { code: "fr", name: "Français" },
  ];
}

export default getTranslations;
