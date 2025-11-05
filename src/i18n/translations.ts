export interface Translations {
  // Navigation & Meta
  siteTitle: string;
  siteDescription: string;
  
  // Hero Section
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
  projectsWeb: string;
  projectsImages: string;
  projectsExplanation: string;
  projectsCsv: string;

  // Contact Section
  contactTitle: string;
  contactEmailButton: string;
  contactLinks: string;
  
  // Footer
  footerCopyright: string;
  footerStatus: string;
}

export const translations: Record<string, Translations> = {
  es: {
    siteTitle: "686f6c61.dev - Portfolio Tech",
    siteDescription: "Portfolio de desarrollo web full stack. Especializado en React, Node.js y tecnologías modernas.",
    
    heroGreeting: "$ whoami",
    heroTitle: "686f6c61",
    heroSubtitle: "Tech Enthusiast & Product Lover",
    heroDescription: "Desarrollo de producto y software, IA, análisis de datos y sistemas escalables.<br><span class=\"terminal-info\">Bájate el template si te gusta o explora en los proyectos que me divierto</span>",
    heroCta: "cd ~/projects",
    heroTemplateButton: "git clone template",
    
    projectsTitle: "$ ls ~/projects",
    projectsFeatured: "PINNED",
    projectsDemo: "[demo]",
    projectsCode: "[code]",
    projectsWeb: "[web]",
    projectsImages: "[images]",
    projectsExplanation: "[explicación]",
    projectsCsv: "[csv]",

    contactTitle: "$ contact --me",
    contactEmailButton: "cat email.txt",
    contactLinks: "Links",

    footerCopyright: "© {year} 686f6c61.dev",
    footerStatus: "● All systems operational"
  },

  en: {
    siteTitle: "686f6c61.dev - Tech Portfolio",
    siteDescription: "Full stack web development portfolio. Specialised in React, Node.js and modern technologies.",
    
    heroGreeting: "$ whoami",
    heroTitle: "686f6c61",
    heroSubtitle: "Tech Enthusiast & Product Lover",
    heroDescription: "Product and software development, AI, data analysis and scalable systems.<br><span class=\"terminal-info\">Download the template if you like it or explore the projects I enjoy working on</span>",
    heroCta: "cd ~/projects",
    heroTemplateButton: "git clone template",
    
    projectsTitle: "$ ls ~/projects",
    projectsFeatured: "PINNED",
    projectsDemo: "[demo]",
    projectsCode: "[code]",
    projectsWeb: "[web]",
    projectsImages: "[images]",
    projectsExplanation: "[explanation]",
    projectsCsv: "[csv]",

    contactTitle: "$ contact --me",
    contactEmailButton: "cat email.txt",
    contactLinks: "Links",

    footerCopyright: "© {year} 686f6c61.dev",
    footerStatus: "● All systems operational"
  }
};

export function getTranslations(lang: string = 'es'): Translations {
  return translations[lang] || translations.es;
}

export function getBrowserLanguage(): string {
  if (typeof window !== 'undefined') {
    const browserLang = navigator.language || navigator.languages?.[0];
    return browserLang?.startsWith('en') ? 'en' : 'es';
  }
  return 'es';
}