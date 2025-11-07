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
 *
 * SECCIONES:
 * - Navigation & Meta: Títulos, descripciones SEO
 * - Hero Section: Sección principal de presentación
 * - Projects Section: Textos relacionados con proyectos
 * - Contact Section: Información de contacto en footer
 * - Footer: Copyright y estado del sitio
 */
export interface Translations {
  // Navigation & Meta
  siteTitle: string;          // Título que aparece en pestaña del navegador
  siteDescription: string;    // Descripción para motores de búsqueda (SEO)

  // Hero Section (Sección principal)
  heroGreeting: string;       // Comando inicial "$ whoami"
  heroTitle: string;          // Tu nombre o marca personal
  heroSubtitle: string;       // Tu título profesional
  heroDescription: string;    // Descripción profesional (soporta HTML)
  heroCta: string;            // Texto del botón de navegación "cd ~/projects"
  heroTemplateButton: string; // Texto del botón "git clone template"

  // Projects Section (Sección de proyectos)
  projectsTitle: string;      // Título de sección "$ ls ~/projects"
  projectsFeatured: string;   // Badge "PINNED" para proyectos destacados
  projectsDemo: string;       // Botón "[demo]"
  projectsCode: string;       // Botón "[code]" (enlace a GitHub)
  projectsWeb: string;        // Botón "[web]" (enlace a sitio web)
  projectsImages: string;     // Botón "[images]" (abre galería)
  projectsExplanation: string;// Botón "[explicación]" (abre modal)
  projectsCsv: string;        // Botón "[csv]" (descarga datos)

  // Contact Section (Sección de contacto en footer)
  contactTitle: string;       // Título "$ contact --me"
  contactEmailButton: string; // Texto del botón "cat email.txt"
  contactLinks: string;       // Título de enlaces sociales "Links"

  // Footer
  footerCopyright: string;    // Copyright (usa {year} como placeholder)
  footerStatus: string;       // Estado del sitio "● All systems operational"
}

/**
 * OBJETO: translations
 * --------------------
 * Contiene las traducciones para cada idioma soportado.
 *
 * ESTRUCTURA:
 * - Clave: Código de idioma ('es', 'en')
 * - Valor: Objeto con todas las traducciones para ese idioma
 *
 * IDIOMAS SOPORTADOS:
 * - 'es': Español (idioma por defecto)
 * - 'en': Inglés (English)
 */
export const translations: Record<string, Translations> = {
  /**
   * TRADUCCIONES EN ESPAÑOL
   * -----------------------
   * Cambia estos valores para personalizar tu portfolio en español.
   * Recuerda mantener la coherencia con la versión en inglés.
   */
  es: {
    // Meta tags para SEO
    siteTitle: "Tu Nombre - Portfolio Tech",
    siteDescription: "Portfolio de desarrollo web full stack. Especializado en tecnologías modernas y soluciones innovadoras.",

    // Sección Hero (Principal)
    heroGreeting: "$ whoami",
    heroTitle: "Tu Nombre", // Cambia esto por tu nombre real
    heroSubtitle: "Tu Título Profesional", // Ej: "Full Stack Developer", "Frontend Engineer", "Data Scientist"
    heroDescription: "Aquí va tu descripción profesional. Cuenta quién eres y qué haces.<br><span class=\"terminal-info\">Esta es una línea adicional de texto más pequeña</span>",
    heroCta: "cd ~/projects",
    heroTemplateButton: "git clone template",

    // Sección Proyectos
    projectsTitle: "$ ls ~/projects",
    projectsFeatured: "PINNED",
    projectsDemo: "[demo]",
    projectsCode: "[code]",
    projectsImages: "[images]",
    projectsExplanation: "[explicación]",
    projectsCsv: "[csv]",
    projectsWeb: "[web]",

    // Sección Contacto (Footer)
    contactTitle: "$ contact --me",
    contactEmailButton: "cat email.txt",
    contactLinks: "Links",

    // Footer
    footerCopyright: "© {year} Tu Nombre", // {year} se reemplaza automáticamente
    footerStatus: "● All systems operational"
  },

  /**
   * TRADUCCIONES EN INGLÉS
   * -----------------------
   * English translations. Maintain consistency with Spanish version.
   * Change these values to match your Spanish content.
   */
  en: {
    // Meta tags for SEO
    siteTitle: "Your Name - Tech Portfolio",
    siteDescription: "Full stack web development portfolio. Specialized in modern technologies and innovative solutions.",

    // Hero Section (Main)
    heroGreeting: "$ whoami",
    heroTitle: "Your Name", // Change this to your real name
    heroSubtitle: "Your Professional Title", // E.g: "Full Stack Developer", "Frontend Engineer", "Data Scientist"
    heroDescription: "Here goes your professional description. Tell who you are and what you do.<br><span class=\"terminal-info\">This is an additional line of smaller text</span>",
    heroCta: "cd ~/projects",
    heroTemplateButton: "git clone template",

    // Projects Section
    projectsTitle: "$ ls ~/projects",
    projectsFeatured: "PINNED",
    projectsDemo: "[demo]",
    projectsCode: "[code]",
    projectsImages: "[images]",
    projectsExplanation: "[explanation]",
    projectsCsv: "[csv]",
    projectsWeb: "[web]",

    // Contact Section (Footer)
    contactTitle: "$ contact --me",
    contactEmailButton: "cat email.txt",
    contactLinks: "Links",

    // Footer
    footerCopyright: "© {year} Your Name", // {year} is automatically replaced
    footerStatus: "● All systems operational"
  }
};

/**
 * FUNCIÓN: getTranslations
 * -------------------------
 * Obtiene el objeto de traducciones para un idioma específico.
 * Si el idioma no existe, devuelve español por defecto.
 *
 * PARÁMETROS:
 * @param lang - Código del idioma ('es' o 'en'), por defecto 'es'
 *
 * RETORNA:
 * @returns {Translations} Objeto completo de traducciones
 *
 * EJEMPLO:
 * ```typescript
 * const t = getTranslations('en');
 * console.log(t.siteTitle); // "Your Name - Tech Portfolio"
 * ```
 *
 * FALLBACK:
 * Si se pasa un idioma no soportado (ej: 'fr'), devuelve español.
 */
export function getTranslations(lang: string = 'es'): Translations {
  return translations[lang] || translations.es;
}

/**
 * FUNCIÓN: getBrowserLanguage
 * ----------------------------
 * Detecta automáticamente el idioma del navegador del usuario.
 * Útil para mostrar el sitio en el idioma preferido del visitante.
 *
 * RETORNA:
 * @returns {string} Código de idioma ('es' o 'en')
 *
 * LÓGICA:
 * 1. Verifica que window esté disponible (solo en cliente)
 * 2. Lee navigator.language o navigator.languages[0]
 * 3. Si el idioma empieza con 'en', devuelve 'en'
 * 4. En cualquier otro caso, devuelve 'es' (español por defecto)
 *
 * EJEMPLO:
 * ```typescript
 * const userLang = getBrowserLanguage();
 * // Usuario en UK: "en"
 * // Usuario en España: "es"
 * // Usuario en Francia: "es" (fallback)
 * ```
 *
 * NOTA:
 * - Esta función solo funciona en el navegador (client-side)
 * - En el servidor (SSR), siempre devuelve 'es'
 */
export function getBrowserLanguage(): string {
  if (typeof window !== 'undefined') {
    const browserLang = navigator.language || navigator.languages?.[0];
    return browserLang?.startsWith('en') ? 'en' : 'es';
  }
  return 'es';
}
