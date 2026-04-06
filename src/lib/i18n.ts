// Translations dictionary for the app
// This file can be easily extended for multiple languages

export type Language = "es" | "en" | "pt" | "fr";

export interface TranslationDict {
  nav: {
    title: string;
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
    close: string;
  };
  locations: Record<string, string>;
  festivalNames: Record<string, string>;
  footer: {
    tagline: string;
    disclaimer: string;
    madeBy: string;
  };
  home: {
    heroSubtitle: string;
    heroWelcome: string;
    summaryTitle: string;
    birthdayLabel: string;
    birthdayToday: string;
    birthdayTap: string;
    noBirthdays: string;
    festivalLabel: string;
    defaultLocation: string;
    noFestivals: string;
    vendorsTitle: string;
    travelingCartOpen: string;
    travelingCartClosed: string;
    krobusOpen: string;
    krobusClosed: string;
    queenOfSauceOpen: string;
    queenOfSauceClosed: string;
    toolsTitle: string;
    enterButton: string;
    prevDay: string;
    nextDay: string;
    dayLabel: string;
    seasons: {
      spring: string;
      summer: string;
      fall: string;
      winter: string;
    };
    sectionCalendar: string;
    sectionCalendarDesc: string;
    sectionVillagers: string;
    sectionVillagersDesc: string;
    sectionCommunityCenter: string;
    sectionCommunityCenterDesc: string;
    sectionMuseum: string;
    sectionMuseumDesc: string;
    sectionRecipes: string;
    sectionRecipesDesc: string;
  };
  modal: {
    eventTypes: {
      festival: string;
      birthday: string;
      special: string;
      fishing: string;
      librero: string;
      vendor: string;
      crop: string;
    };
    birthdayOf: string;
    day: string;
    favoriteGifts: string;
    viewFullProfile: string;
    location: string;
    time: string;
  };
}

const translations: Record<Language, TranslationDict> = {
  es: {
    nav: {
      title: "Guía Stardew",
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
        description:
          "Descubre regalos favoritos, cumpleaños y más sobre los aldeanos de Pelican Town.",
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
      close: "Cerrar",
    },
    locations: {
      "Plaza de Pueblo Pelícano": "Plaza de Pueblo Pelícano",
      "Bosque Tizón": "Bosque Tizón",
      "Desierto de Calico": "Desierto de Calico",
      "La Playa": "La Playa",
      "Bosque Tizón (al lado del río)": "Bosque Tizón (al lado del río)",
      "Centro de Pueblo Pelícano": "Centro de Pueblo Pelícano",
      "Bosque al Sur del Rancho": "Bosque al Sur del Rancho",
    },
    festivalNames: {
      "Festival del Huevo": "Festival del Huevo",
      "Danza de las Flores": "Danza de las Flores",
      "Festival del Desierto": "Festival del Desierto",
      "Luau": "Luau",
      "Derby de la Trucha": "Derby de la Trucha",
      "Danza de las Medusas Lunares": "Danza de las Medusas Lunares",
      "Feria de Stardew Valley": "Feria de Stardew Valley",
      "Víspera de los Espíritus": "Víspera de los Espíritus",
      "Festival del Hielo": "Festival del Hielo",
      "Festival del Calamar": "Festival del Calamar",
      "Mercado Nocturno": "Mercado Nocturno",
      "Fiesta de la Estrella de Invierno": "Fiesta de la Estrella de Invierno",
      "Vendedor de Libros": "Vendedor de Libros",
    },
    footer: {
      tagline: "Stardew Guide — El compañero definitivo",
      disclaimer: "Herramienta independiente hecha para fans. No afiliado con ConcernedApe.",
      madeBy: "Hecho por",
    },
    home: {
      heroSubtitle: "Estado en tu partida",
      heroWelcome: "¡Bienvenido de nuevo a tu granja! Aquí tienes lo que está ocurriendo hoy en el valle.",
      summaryTitle: "Resumen de Hoy",
      birthdayLabel: "Cumpleaños",
      birthdayToday: "¡Es el cumple de {name}!",
      birthdayTap: "Toca para ver sus favoritos",
      noBirthdays: "Nadie cumple años hoy",
      festivalLabel: "Festival / Evento",
      defaultLocation: "Todo el valle",
      noFestivals: "Sin festivales hoy",
      vendorsTitle: "Puestos y Tiendas",
      travelingCartOpen: "¡Carro Ambulante hoy!",
      travelingCartClosed: "El Carro está cerrado",
      krobusOpen: "Ofertas en Krobus",
      krobusClosed: "Alcantarillas vacías",
      queenOfSauceOpen: "Receta nueva en la Tele",
      queenOfSauceClosed: "Pausa televisiva",
      toolsTitle: "Herramientas",
      enterButton: "Entrar",
      prevDay: "Día anterior",
      nextDay: "Día siguiente",
      dayLabel: "Día",
      seasons: {
        spring: "Primavera",
        summer: "Verano",
        fall: "Otoño",
        winter: "Invierno",
      },
      sectionCalendar: "Calendario",
      sectionCalendarDesc: "Eventos, cumpleaños y siembra.",
      sectionVillagers: "Aldeanos",
      sectionVillagersDesc: "Guía de regalos y amistad.",
      sectionCommunityCenter: "Centro Cívico",
      sectionCommunityCenterDesc: "Lotes y progreso en salas.",
      sectionMuseum: "Museo",
      sectionMuseumDesc: "Rastreador de donaciones y geodas.",
      sectionRecipes: "Recetas",
      sectionRecipesDesc: "Recetario y formas de obtención.",
    },
    modal: {
      eventTypes: {
        festival: "Festival",
        birthday: "Cumpleaños",
        special: "Evento Especial",
        fishing: "Evento de Pesca",
        librero: "Vendedor de Libros",
        vendor: "Comerciante",
        crop: "Cultivo",
      },
      birthdayOf: "Cumpleaños de {name}",
      day: "Día",
      favoriteGifts: "🎁 Regalos Favoritos",
      viewFullProfile: "Ver Perfil Completo",
      location: "Lugar",
      time: "Horario",
    },
  },
  en: {
    nav: {
      title: "Stardew Guide",
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
      close: "Close",
    },
    locations: {
      "Plaza de Pueblo Pelícano": "Pelican Town Square",
      "Bosque Tizón": "Cindersap Forest",
      "Desierto de Calico": "Calico Desert",
      "La Playa": "The Beach",
      "Bosque Tizón (al lado del río)": "Cindersap Forest (river)",
      "Centro de Pueblo Pelícano": "Pelican Town Center",
      "Bosque al Sur del Rancho": "Forest south of the Ranch",
    },
    festivalNames: {
      "Festival del Huevo": "Egg Festival",
      "Danza de las Flores": "Flower Dance",
      "Festival del Desierto": "Desert Festival",
      "Luau": "Luau",
      "Derby de la Trucha": "Trout Derby",
      "Danza de las Medusas Lunares": "Moonlight Jellies Dance",
      "Feria de Stardew Valley": "Stardew Valley Fair",
      "Víspera de los Espíritus": "Spirit's Eve",
      "Festival del Hielo": "Festival of Ice",
      "Festival del Calamar": "SquidFest",
      "Mercado Nocturno": "Night Market",
      "Fiesta de la Estrella de Invierno": "Winter Star Feast",
      "Vendedor de Libros": "Bookseller",
    },
    footer: {
      tagline: "Stardew Guide — Ultimate Companion",
      disclaimer: "Independent tool made by fans. Not affiliated with ConcernedApe.",
      madeBy: "Made by",
    },
    home: {
      heroSubtitle: "Current Game Status",
      heroWelcome: "Welcome back to your farm! Here is what's happening today in the valley.",
      summaryTitle: "Today's Highlights",
      birthdayLabel: "Birthday",
      birthdayToday: "It's {name}'s birthday!",
      birthdayTap: "Tap to see favorites",
      noBirthdays: "No birthdays today",
      festivalLabel: "Festival / Event",
      defaultLocation: "All Valley",
      noFestivals: "No festivals today",
      vendorsTitle: "Shops & Vendors",
      travelingCartOpen: "Traveling Cart is here!",
      travelingCartClosed: "Traveling Cart is closed",
      krobusOpen: "Krobus Specials",
      krobusClosed: "Empty Sewers",
      queenOfSauceOpen: "New Recipe on TV",
      queenOfSauceClosed: "TV Break",
      toolsTitle: "Tools",
      enterButton: "Enter",
      prevDay: "Previous day",
      nextDay: "Next day",
      dayLabel: "Day",
      seasons: {
        spring: "Spring",
        summer: "Summer",
        fall: "Fall",
        winter: "Winter",
      },
      sectionCalendar: "Calendar",
      sectionCalendarDesc: "Events, birthdays and crops.",
      sectionVillagers: "Villagers",
      sectionVillagersDesc: "Gifts and friendship guide.",
      sectionCommunityCenter: "Community Center",
      sectionCommunityCenterDesc: "Bundles and room progress.",
      sectionMuseum: "Museum",
      sectionMuseumDesc: "Donation tracker and geodes.",
      sectionRecipes: "Recipes",
      sectionRecipesDesc: "Cookbook and crafting.",
    },
    modal: {
      eventTypes: {
        festival: "Festival",
        birthday: "Birthday",
        special: "Special Event",
        fishing: "Fishing Event",
        librero: "Bookseller",
        vendor: "Traveling Cart",
        crop: "Crop",
      },
      birthdayOf: "{name}'s Birthday",
      day: "Day",
      favoriteGifts: "🎁 Favorite Gifts",
      viewFullProfile: "View Full Profile",
      location: "Location",
      time: "Time",
    },
  },
  pt: {
    nav: {
      title: "Guia Stardew",
      calendar: "Calendário",
      villagers: "Vilarejos",
      communityCenter: "Centro Comunitário",
      museum: "Museu",
      recipes: "Receitas",
    },
    pages: {
      calendar: {
        title: "Calendário Sazonal",
        description:
          "Planeje festivais, aniversários e colheitas por estação com visualização diária.",
      },
      villagers: {
        title: "Aldeões",
        description:
          "Descubra presentes favoritos, aniversários e mais sobre os aldeões de Pelican Town.",
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
      close: "Fechar",
    },
    locations: {
      "Plaza de Pueblo Pelícano": "Praça da Vila Pelicanos",
      "Bosque Tizón": "Floresta Cinzaseiva",
      "Desierto de Calico": "Deserto de Calico",
      "La Playa": "A Praia",
      "Bosque Tizón (al lado del río)": "Floresta Cinzaseiva (rio)",
      "Centro de Pueblo Pelícano": "Centro da Vila Pelicanos",
      "Bosque al Sur del Rancho": "Floresta ao Sul do Rancho",
    },
    festivalNames: {
      "Festival del Huevo": "Festival do Ovo",
      "Danza de las Flores": "Dança das Flores",
      "Festival del Desierto": "Festival do Deserto",
      "Luau": "Luau",
      "Derby de la Trucha": "Torneio de Pesca",
      "Danza de las Medusas Lunares": "Dança das Águas-Vivas Lunares",
      "Feria de Stardew Valley": "Feira de Stardew",
      "Víspera de los Espíritus": "Véspera dos Espíritos",
      "Festival del Hielo": "Festival do Gelo",
      "Festival del Calamar": "Festival das Lulas",
      "Mercado Nocturno": "Mercado Noturno",
      "Fiesta de la Estrella de Invierno": "Festa da Estrela",
      "Vendedor de Libros": "Vendedor de Livros",
    },
    footer: {
      tagline: "Stardew Guide — O companheiro definitivo",
      disclaimer: "Ferramenta independente feita por fãs. Não é afiliado à ConcernedApe.",
      madeBy: "Feito por",
    },
    home: {
      heroSubtitle: "Status de Seu Jogo",
      heroWelcome: "Bem-vindo de volta à sua fazenda! Veja o que está acontecendo hoje no vale.",
      summaryTitle: "Destaques de Hoje",
      birthdayLabel: "Aniversário",
      birthdayToday: "É o aniversário de {name}!",
      birthdayTap: "Toque para ver favoritos",
      noBirthdays: "Ninguém faz aniversário hoje",
      festivalLabel: "Festival / Evento",
      defaultLocation: "Todo o vale",
      noFestivals: "Sem festivais hoje",
      vendorsTitle: "Barracas e Lojas",
      travelingCartOpen: "Carrinho Ambulante hoje!",
      travelingCartClosed: "O Carrinho está fechado",
      krobusOpen: "Ofertas em Krobus",
      krobusClosed: "Esgotos vazios",
      queenOfSauceOpen: "Nova receita na TV",
      queenOfSauceClosed: "Pausa na TV",
      toolsTitle: "Ferramentas",
      enterButton: "Entrar",
      prevDay: "Dia anterior",
      nextDay: "Próximo dia",
      dayLabel: "Dia",
      seasons: {
        spring: "Primavera",
        summer: "Verão",
        fall: "Outono",
        winter: "Inverno",
      },
      sectionCalendar: "Calendário",
      sectionCalendarDesc: "Eventos, aniversários e colheitas.",
      sectionVillagers: "Aldeões",
      sectionVillagersDesc: "Guia de presentes e amizade.",
      sectionCommunityCenter: "Centro Comunitário",
      sectionCommunityCenterDesc: "Conjuntos e progresso das salas.",
      sectionMuseum: "Museu",
      sectionMuseumDesc: "Rastreador de doações e geodes.",
      sectionRecipes: "Receitas",
      sectionRecipesDesc: "Livro de receitas e artesanato.",
    },
    modal: {
      eventTypes: {
        festival: "Festival",
        birthday: "Aniversário",
        special: "Evento Especial",
        fishing: "Evento de Pesca",
        librero: "Vendedor de Livros",
        vendor: "Comerciante",
        crop: "Colheita",
      },
      birthdayOf: "Aniversário de {name}",
      day: "Dia",
      favoriteGifts: "🎁 Presentes Favoritos",
      viewFullProfile: "Ver Perfil Completo",
      location: "Local",
      time: "Horário",
    },
  },
  fr: {
    nav: {
      title: "Guide Stardew",
      calendar: "Calendrier",
      villagers: "Villageois",
      communityCenter: "Centre Communautaire",
      museum: "Musée",
      recipes: "Recettes",
    },
    pages: {
      calendar: {
        title: "Calendrier Saisonnier",
        description:
          "Planifiez les festivals, anniversaires et récoltes par saison avec vue quotidienne.",
      },
      villagers: {
        title: "Villageois",
        description:
          "Découvrez les cadeaux préférés, anniversaires et plus sur les villageois de Pelican Town.",
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
      close: "Fermer",
    },
    locations: {
      "Plaza de Pueblo Pelícano": "Place de Pélican Ville",
      "Bosque Tizón": "Forêt Sève-Cendreuse",
      "Desierto de Calico": "Désert de Calico",
      "La Playa": "La Plage",
      "Bosque Tizón (al lado del río)": "Forêt Sève-Cendreuse (rivière)",
      "Centro de Pueblo Pelícano": "Centre de Pélican Ville",
      "Bosque al Sur del Rancho": "Forêt au sud du Ranch",
    },
    festivalNames: {
      "Festival del Huevo": "Fête des Œufs",
      "Danza de las Flores": "Danse des Fleurs",
      "Festival del Desierto": "Festival du Désert",
      "Luau": "Luau",
      "Derby de la Trucha": "Derby de la Truite",
      "Danza de las Medusas Lunares": "Danse des Méduses",
      "Feria de Stardew Valley": "Foire de Stardew",
      "Víspera de los Espíritus": "Fête des Esprits",
      "Festival del Hielo": "Fête de la Glace",
      "Festival del Calamar": "Fête du Calmar",
      "Mercado Nocturno": "Marché Nocturne",
      "Fiesta de la Estrella de Invierno": "Fête de l'Étoile",
      "Vendedor de Libros": "Vendeur de Livres",
    },
    footer: {
      tagline: "Stardew Guide — Le compagnon ultime",
      disclaimer: "Outil indépendant créé par des fans. Pas affilié à ConcernedApe.",
      madeBy: "Fait par",
    },
    home: {
      heroSubtitle: "Statut de Votre Partie",
      heroWelcome: "Bienvenue sur votre ferme ! Voici ce qui se passe aujourd'hui dans la vallée.",
      summaryTitle: "Résumé du Jour",
      birthdayLabel: "Anniversaire",
      birthdayToday: "C'est l'anniversaire de {name} !",
      birthdayTap: "Appuyez pour voir les favoris",
      noBirthdays: "Aucun anniversaire aujourd'hui",
      festivalLabel: "Festival / Événement",
      defaultLocation: "Toute la vallée",
      noFestivals: "Pas de festivals aujourd'hui",
      vendorsTitle: "Magasins et Vendeurs",
      travelingCartOpen: "Cochon de Voyage aujourd'hui !",
      travelingCartClosed: "Le Cochon est fermé",
      krobusOpen: "Offres chez Krobus",
      krobusClosed: "Égouts vides",
      queenOfSauceOpen: "Nouvelle Recette à la TV",
      queenOfSauceClosed: "Pause TV",
      toolsTitle: "Outils",
      enterButton: "Entrer",
      prevDay: "Jour précédent",
      nextDay: "Jour suivant",
      dayLabel: "Jour",
      seasons: {
        spring: "Printemps",
        summer: "Été",
        fall: "Automne",
        winter: "Hiver",
      },
      sectionCalendar: "Calendrier",
      sectionCalendarDesc: "Événements, anniversaires et cultures.",
      sectionVillagers: "Villageois",
      sectionVillagersDesc: "Guide des cadeaux et d'amitié.",
      sectionCommunityCenter: "Centre Communautaire",
      sectionCommunityCenterDesc: "Paquets et progression des salles.",
      sectionMuseum: "Musée",
      sectionMuseumDesc: "Suivi des donations et géodes.",
      sectionRecipes: "Recettes",
      sectionRecipesDesc: "Livre de recettes et artisanat.",
    },
    modal: {
      eventTypes: {
        festival: "Festival",
        birthday: "Anniversaire",
        special: "Événement Spécial",
        fishing: "Événement de Pêche",
        librero: "Vendeur de Livres",
        vendor: "Marchand Ambu.",
        crop: "Culture",
      },
      birthdayOf: "Anniversaire de {name}",
      day: "Jour",
      favoriteGifts: "🎁 Cadeaux Préférés",
      viewFullProfile: "Voir Profil Complet",
      location: "Lieu",
      time: "Heure",
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
