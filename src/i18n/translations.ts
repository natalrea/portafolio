/**
 * ARCHIVO DE TRADUCCIONES (i18n)
 * ===============================
 *
 * Este archivo contiene todas las traducciones del template en formato bilingüe
 * (Español/Inglés). Es la fuente central de todo el texto que aparece en la interfaz.
 *
 * ARQUITECTURA:
 * - Usa TypeScript para type-safety y autocompletado
 * - Define una interfaz que garantiza consistencia entre idiomas
 * - Soporta HTML en los valores de traducción (con <br>, <span>, etc.)
 * - Incluye detección automática del idioma del navegador
 *
 * CÓMO PERSONALIZAR:
 * 1. Busca el texto que quieres cambiar en la sección 'es' (línea 62)
 * 2. Modifica el valor según tus necesidades
 * 3. IMPORTANTE: Repite el cambio en la sección 'en' (línea 90) en inglés
 * 4. Guarda el archivo - Astro recargará automáticamente
 *
 * REGLAS DE EDICIÓN:
 * - SIEMPRE modifica ambos idiomas (es y en) para mantener paridad
 * - Puedes usar HTML básico: <br>, <strong>, <span class="...">
 * - El texto {year} se reemplaza automáticamente por el año actual
 * - Mantén el formato de comandos terminal ($ whoami, cd, etc.) para coherencia visual
 */

/**
 * INTERFAZ: Translations
 * ----------------------
 * Define la estructura de todas las traducciones disponibles.
 * Garantiza que ambos idiomas tengan exactamente las mismas propiedades.
 */
export interface Translations {
  // Navigation & Meta
  siteTitle: string;
  siteDescription: string;

  // Hero Section (Sección principal)
  heroGreeting: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroCta: string;
  heroTemplateButton: string;

  // Projects Section
  projectsTitle: string;
  projectsFeatured: string;
  projectsDemo: string;
  projectsCode: string;
  projectsImages: string;
  projectsExplanation: string;
  projectsCsv: string;
  projectsWeb: string;

  // Contact Section (Footer)
  contactTitle: string;
  contactEmailButton: string;
  contactLinks: string;

  // Footer
  footerCopyright: string;
  footerStatus: string;
}

/**
 * OBJETO: translations
 * --------------------
 * Contiene las traducciones para cada idioma soportado.
 */
export const translations: Record<string, Translations> = {
  /**
   * TRADUCCIONES EN ESPAÑOL
   * -----------------------
   */
  es: {
    // Meta tags para SEO
    siteTitle: "Víctor Jesús Rea Valencia - Portafolio",
    siteDescription:
      "Portafolio de desarrollo de software y proyectos de NLP, inteligencia artificial y aprendizaje automático.",

    // Sección Hero (Principal)
    heroGreeting: "$ whoami",
    heroTitle: "Víctor Jesús Rea Valencia",
    heroSubtitle: "Desarrollador de Software y entusiasta del NLP",
    heroDescription:
      'Apasionado por el aprendizaje automático, el procesamiento de lenguaje natural y el desarrollo de herramientas inteligentes.<br><span class="terminal-info">Me encanta crear soluciones que conectan la programación con la comprensión del lenguaje humano.</span>',
    heroCta: "cd ~/projects",
    heroTemplateButton: "git clone portfolio",

    // Sección Proyectos
    projectsTitle: "$ ls ~/projects",
    projectsFeatured: "DESTACADO",
    projectsDemo: "[demo]",
    projectsCode: "[código]",
    projectsImages: "[imágenes]",
    projectsExplanation: "[explicación]",
    projectsCsv: "[datos]",
    projectsWeb: "[web]",

    // Sección Contacto (Footer)
    contactTitle: "$ contact --me",
    contactEmailButton: "cat email.txt",
    contactLinks: "Redes",

    // Footer
    footerCopyright: "© {year} Víctor Jesús Rea Valencia",
    footerStatus: "● Todos los sistemas operativos",
  },

  /**
   * ENGLISH TRANSLATIONS
   * --------------------
   */
  en: {
    // Meta tags for SEO
    siteTitle: "Víctor Jesús Rea Valencia - Portfolio",
    siteDescription:
      "Software development portfolio focused on NLP, AI, and machine learning projects.",

    // Hero Section
    heroGreeting: "$ whoami",
    heroTitle: "Víctor Jesús Rea Valencia",
    heroSubtitle: "Software Developer and NLP Enthusiast",
    heroDescription:
      'Passionate about machine learning, natural language processing, and intelligent software development.<br><span class="terminal-info">I love building solutions that bridge code and human language understanding.</span>',
    heroCta: "cd ~/projects",
    heroTemplateButton: "git clone portfolio",

    // Projects Section
    projectsTitle: "$ ls ~/projects",
    projectsFeatured: "PINNED",
    projectsDemo: "[demo]",
    projectsCode: "[code]",
    projectsImages: "[images]",
    projectsExplanation: "[explanation]",
    projectsCsv: "[data]",
    projectsWeb: "[web]",

    // Contact Section
    contactTitle: "$ contact --me",
    contactEmailButton: "cat email.txt",
    contactLinks: "Links",

    // Footer
    footerCopyright: "© {year} Víctor Jesús Rea Valencia",
    footerStatus: "● All systems operational",
  },
};

/**
 * FUNCIÓN: getTranslations
 * -------------------------
 * Obtiene el objeto de traducciones para un idioma específico.
 * Si el idioma no existe, devuelve español por defecto.
 */
export function getTranslations(lang: string = "es"): Translations {
  return translations[lang] || translations.es;
}

/**
 * FUNCIÓN: getBrowserLanguage
 * ----------------------------
 * Detecta automáticamente el idioma del navegador del usuario.
 * Útil para mostrar el sitio en el idioma preferido del visitante.
 */
export function getBrowserLanguage(): string {
  if (typeof window !== "undefined") {
    const browserLang = navigator.language || navigator.languages?.[0];
    return browserLang?.startsWith("en") ? "en" : "es";
  }
  return "es";
}
