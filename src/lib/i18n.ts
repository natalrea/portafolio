/**
 * MÓDULO DE INTERNACIONALIZACIÓN (i18n)
 * =====================================
 *
 * Este módulo proporciona utilidades para la gestión de traducciones
 * en el template bilingüe (Español/Inglés).
 *
 * FUNCIONALIDAD:
 * - Obtiene las traducciones según el idioma actual
 * - Proporciona helpers para detectar el idioma activo
 * - Simplifica el uso de traducciones en componentes Astro
 *
 * USO EN COMPONENTES:
 * ```astro
 * ---
 * import { useI18n } from '../lib/i18n';
 * const { t, lang, isEnglish } = useI18n(Astro.currentLocale);
 * ---
 * <h1>{t.heroTitle}</h1>
 * ```
 */

import { getTranslations, type Translations } from '../i18n/translations.js';

/**
 * INTERFAZ: Props de Internacionalización
 * ----------------------------------------
 * Define la estructura de props que aceptan componentes con soporte i18n
 *
 * @property lang - Código del idioma (opcional, por defecto 'es')
 */
export interface I18nProps {
  lang?: string;
}

/**
 * FUNCIÓN: useI18n
 * ----------------
 * Hook personalizado que proporciona acceso a traducciones y utilidades de idioma
 *
 * PARÁMETROS:
 * @param lang - Código del idioma ('es' o 'en'), por defecto 'es'
 *
 * RETORNA:
 * @returns {Object} Objeto con:
 *   - t: Objeto con todas las traducciones del idioma actual
 *   - lang: Código del idioma actual
 *   - isEnglish: Boolean que indica si el idioma es inglés
 *   - isSpanish: Boolean que indica si el idioma es español
 *
 * EJEMPLO DE USO:
 * ```typescript
 * const { t, isEnglish } = useI18n('en');
 * console.log(t.siteTitle);  // "Your Name - Tech Portfolio"
 * console.log(isEnglish);     // true
 * ```
 */
export function useI18n(lang: string = 'es') {
  // Obtiene el objeto de traducciones correspondiente al idioma
  const t = getTranslations(lang);

  return {
    t,              // Objeto completo de traducciones
    lang,           // Idioma actual ('es' o 'en')
    isEnglish: lang === 'en',  // Helper: ¿Es inglés?
    isSpanish: lang === 'es'   // Helper: ¿Es español?
  };
}
