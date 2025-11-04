import { getTranslations, type Translations } from '../i18n/translations.js';

export interface I18nProps {
  lang?: string;
}

export function useI18n(lang: string = 'es') {
  const t = getTranslations(lang);
  
  return {
    t,
    lang,
    isEnglish: lang === 'en',
    isSpanish: lang === 'es'
  };
}