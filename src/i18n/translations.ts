/**
 * ARCHIVO DE TRADUCCIONES (i18n)
 * ===============================
 */

export interface Translations {
  siteTitle: string;
  siteDescription: string;

  heroGreeting: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroCta: string;
  heroTemplateButton: string;

  projectsTitle: string;
  projectsFeatured: string;
  projectsDemo: string;
  projectsCode: string;
  projectsImages: string;
  projectsExplanation: string;
  projectsCsv: string;
  projectsWeb: string;

  contactTitle: string;
  contactEmailButton: string;
  contactLinks: string;

  footerCopyright: string;
  footerStatus: string;
}

export const translations: Record<string, Translations> = {
  es: {
    siteTitle: "Víctor Rea - Portafolio",
    siteDescription:
      "Portafolio de desarrollo de software y proyectos de NLP, inteligencia artificial y aprendizaje automático.",

    heroGreeting: "$ whoami",
    heroTitle: "Víctor Rea",
    heroSubtitle: "Desarrollador de Software y entusiasta del NLP",
    heroDescription:
      'Me gusta crear páginas y herramientas que sean útiles y fáciles de usar.<br><span class="terminal-info">Siempre aprendiendo cosas nuevas y buscando maneras de hacer la tecnología más divertida y comprensible.</span>',
    heroCta: "cd ~/projects",
    heroTemplateButton: "git clone portfolio",

    projectsTitle: "$ ls ~/projects",
    projectsFeatured: "DESTACADO",
    projectsDemo: "[demo]",
    projectsCode: "[código]",
    projectsImages: "[imágenes]",
    projectsExplanation: "[explicación]",
    projectsCsv: "[datos]",
    projectsWeb: "[web]",

    contactTitle: "$ contact --me",
    contactEmailButton: "cat email.txt",
    contactLinks: "Redes",

    footerCopyright: "© {year} Víctor Rea",
    footerStatus: "● Todos los sistemas operativos",
  },

  en: {
    siteTitle: "Víctor Rea - Portfolio",
    siteDescription:
      "Software development portfolio focused on NLP, AI, and machine learning projects.",

    heroGreeting: "$ whoami",
    heroTitle: "Víctor Rea",
    heroSubtitle: "Software Developer and NLP Enthusiast",
    heroDescription:
      'I enjoy building websites and tools that are useful and easy to use.<br><span class="terminal-info">Always learning new things and finding ways to make technology more fun and understandable.</span>',
    heroCta: "cd ~/projects",
    heroTemplateButton: "git clone portfolio",

    projectsTitle: "$ ls ~/projects",
    projectsFeatured: "PINNED",
    projectsDemo: "[demo]",
    projectsCode: "[code]",
    projectsImages: "[images]",
    projectsExplanation: "[explanation]",
    projectsCsv: "[data]",
    projectsWeb: "[web]",

    contactTitle: "$ contact --me",
    contactEmailButton: "cat email.txt",
    contactLinks: "Links",

    footerCopyright: "© {year} Víctor Rea",
    footerStatus: "● All systems operational",
  },
};

export function getTranslations(lang: string = "es"): Translations {
  return translations[lang] || translations.es;
}

export function getBrowserLanguage(): string {
  if (typeof window !== "undefined") {
    const browserLang = navigator.language || navigator.languages?.[0];
    return browserLang?.startsWith("en") ? "en" : "es";
  }
  return "es";
}
