export interface Project {
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  explanation?: {
    es: string;
    en: string;
  };
  tech: string[];
  link: string | null;
  demo: string | null;
  csv: string | null;
  featured: boolean;
  images: string[] | null;
}

export const projectsData: Project[] = [
  {
    title: {
      es: "SPARRING",
      en: "SPARRING"
    },
    description: {
      es: "<strong>Platforma SaaS de entrevistas técnicas automatizadas.</strong><br><br>IA que evalúa talentos tech. Reduce tiempo de hiring en 85% y elimina 95% de costes y bias humano. Informes ejecutivos y de profundidad (+20pgs). <strong>Preguntas desarrollo</strong>, <strong>Preguntas test</strong>, <strong>Realización de código</strong>, <strong>Complejidad algorítmica</strong>, <strong>Errores</strong>, <strong>Completado</strong>, <strong>PR</strong>, <strong>Lógica matemática</strong>, <strong>Clean code</strong>.",
      en: "<strong>SaaS platform for automated technical interviews.</strong><br><br>AI that evaluates tech talent. Reduces hiring time by 85% and eliminates 95% of costs and human bias. Executive and in-depth reports (+20 pages). <strong>Development questions</strong>, <strong>Test questions</strong>, <strong>Code completion</strong>, <strong>Algorithmic complexity</strong>, <strong>Errors</strong>, <strong>Completion</strong>, <strong>PR</strong>, <strong>Mathematical logic</strong>, <strong>Clean code</strong>."
    },
    tech: ["React", "Node.js", "MongoDB", "AWS", "IA Models +9", "Resend"],
    link: null,
    demo: "https://www.sparring.dev",
    csv: null,
    featured: true,
    images: null
  },
  {
    title: {
      es: "LLM Synthetic Personality Review",
      en: "LLM Synthetic Personality Review"
    },
    description: {
      es: "<strong>Análisis de literatura sobre personalidad en LLMs.</strong><br><br>Compilación de 119 artículos científicos (2022-2025). Manifestación de rasgos de personalidad en LLMs.",
      en: "<strong>Literature review on personality in LLMs.</strong><br><br>Compilation of 119 scientific papers (2022-2025). Personality trait manifestation in LLMs."
    },
    tech: ["Research", "Python", "Data Analysis", "LLMs", "Psychology"],
    link: "https://github.com/686f6c61/llm-synthetic-personality-review",
    demo: null,
    csv: null,
    featured: true,
    images: null
  },
  {
    title: {
      es: "Red de Agentes IA errores JAVA - COBOL",
      en: "AI Agent Network for JAVA-COBOL Errors"
    },
    description: {
      es: "<strong>SaaS de orquestación de agentes IA para debugging bancario.</strong><br><br>6 agentes especializados procesan errores de consola Java/Cobol. Identifican ubicación exacta del error y proporcionan soluciones accionables para equipos de desarrollo. Ahorro de 1-8 horas por error. Integración con Gemini 2.5 Pro.",
      en: "<strong>SaaS platform for AI agent orchestration in banking debugging.</strong><br><br>6 specialised agents process Java/Cobol console errors. Identify exact error location and provide actionable solutions for development teams. Saves 1-8 hours per error. Integration with Gemini 2.5 Pro."
    },
    explanation: {
      es: "Para una empresa tecnológica especializada en el sector bancario, se planteó el desafío de desarrollar un orquestador inteligente capaz de gestionar el volumen masivo de errores que su cliente procesa diariamente.<br><br><strong>La solución implementada consiste en una arquitectura multiagente compuesta por:</strong><br>• 6 agentes especializados coordinados por 1 orquestador principal<br>• 4 agentes de análisis especializados en tipos específicos de errores y archivos de consola Java/Cobol<br>• 1 agente de validación que verifica consistencia de datos, líneas de código, paths y estructuras<br>• 1 agente de reporting que genera informes estructurados en múltiples formatos<br><br><strong>Escalabilidad y rendimiento:</strong><br>• Procesamiento de 1400 archivos con 10 niveles de profundidad anidada<br>• Generación de reporte accionable en menos de 5 minutos<br>• Reducción de tiempo: de hasta un día de trabajo por error a menos de 5 minutos totales<br><br><strong>Requisitos técnicos implementados:</strong><br>• Integración con partnership Google utilizando Gemini 2.5 Pro<br>• Arquitectura SaaS para despliegue inmediato<br>• Sistema de autenticación con gestión de usuarios y límites de acceso<br>• Procesamiento en paralelo de múltiples archivos de error desde ZIP",
      en: "For a technology company specialising in the banking sector, the challenge was to develop an intelligent orchestrator capable of managing the massive volume of errors their client processes daily.<br><br><strong>The implemented solution consists of a multi-agent architecture composed of:</strong><br>• 6 specialised agents coordinated by 1 main orchestrator<br>• 4 analysis agents specialised in specific error types and Java/Cobol console files<br>• 1 validation agent that verifies data consistency, code lines, paths and structures<br>• 1 reporting agent that generates structured reports in multiple formats<br><br><strong>Scalability and performance:</strong><br>• Processing of 1400 files with 10 levels of nested depth<br>• Generation of actionable report in less than 5 minutes<br>• Time reduction: from up to a day's work per error to less than 5 minutes total<br><br><strong>Technical requirements implemented:</strong><br>• Integration with Google partnership using Gemini 2.5 Pro<br>• SaaS architecture for immediate deployment<br>• Authentication system with user management and access limits<br>• Parallel processing of multiple error files from ZIP"
    },
    tech: ["React", "Python", "LLM Gemini 2.5 Pro", "Supabase", "SaaS", "Agent Architecture"],
    link: null,
    demo: null,
    csv: null,
    featured: false,
    images: [
      "/screenshots/red-agentes-ia/Java-Cobol01",
      "/screenshots/red-agentes-ia/Java-Cobol02",
      "/screenshots/red-agentes-ia/Java-Cobol03"
    ]
  },
  {
    title: {
      es: "Open Mood",
      en: "Open Mood"
    },
    description: {
      es: "<strong>App iOS de red social para Gen Z.</strong><br><br>Comparte estados de ánimo con emojis y ubicación. App en Swift + Supabase. Backend de gestión y control para administradores en Next.js.",
      en: "<strong>iOS social networking app for Gen Z.</strong><br><br>Share moods with emojis and location. Swift + Supabase app. Management and control backend for administrators in Next.js."
    },
    tech: ["iOS", "Swift", "Supabase", "Real-time", "Next.js", "Backend", "Analytics"],
    link: null,
    demo: null,
    csv: null,
    featured: false,
    images: [
      "/screenshots/open-mood/01.png",
      "/screenshots/open-mood/02.png",
      "/screenshots/open-mood/03.png",
      "/screenshots/open-mood/04.png",
      "/screenshots/open-mood/05.png",
      "/screenshots/open-mood/06.png",
      "/screenshots/open-mood/07.png",
      "/screenshots/open-mood/08.png",
      "/screenshots/open-mood/09.png",
      "/screenshots/open-mood/10.png",
      "/screenshots/open-mood/11.png",
      "/screenshots/open-mood/12.png",
      "/screenshots/open-mood/13.png",
      "/screenshots/open-mood/14.png",
      "/screenshots/open-mood/15.png",
      "/screenshots/open-mood/16.png",
      "/screenshots/open-mood/17.png",
      "/screenshots/open-mood/18.png"
    ]
  },
  {
    title: {
      es: "IA Gota",
      en: "AI Gota"
    },
    description: {
      es: "<strong>App iOS de análisis nutricional.</strong><br><br>Escanea cartas de restaurantes con una foto y calcula niveles de purinas. Fichas nutricionales detalladas de alimentos o platos concretos.",
      en: "<strong>iOS nutritional analysis app.</strong><br><br>Scan restaurant menus with a photo and calculate purine levels. Detailed nutritional cards for specific foods or dishes."
    },
    tech: ["iOS", "Swift", "IA", "Computer Vision"],
    link: "https://github.com/686f6c61/IAGota",
    demo: null,
    csv: null,
    featured: false,
    images: [
      "/screenshots/ia-gota/IA-Gota-v2.gif",
      "/screenshots/ia-gota/01.png",
      "/screenshots/ia-gota/02.png",
      "/screenshots/ia-gota/03.png",
      "/screenshots/ia-gota/04.png",
      "/screenshots/ia-gota/05.png",
      "/screenshots/ia-gota/06.png",
      "/screenshots/ia-gota/07.png",
      "/screenshots/ia-gota/08.png"
    ]
  },
  {
    title: {
      es: "Scrapper Dominios y Alertas [.com]",
      en: "Domain Scraper & Alert System [.com]"
    },
    description: {
      es: "<strong>Sistema de detección de phishing bancario mediante scraping de dominios.</strong><br><br>POC que escanea dominios .com para prevenir ataques de phishing. Genera variaciones con diccionario bancario y genera alertas automáticas con CSV de resultados.",
      en: "<strong>Banking phishing detection system through domain scraping.</strong><br><br>POC that scans .com domains to prevent phishing attacks. Generates variations with banking dictionary and generates automatic alerts with CSV results."
    },

    tech: ["Python", "Requests", "Concurrent Processing", "CSV Export", "Security Analytics"],
    link: "https://github.com/686f6c61/domain-scraper-alerts",
    demo: null,
    csv: "https://github.com/686f6c61/domain-scraper-alerts/blob/main/example_domain_results.csv",
    featured: false,
    images: [
      "/screenshots/domain-scraper/Domain-Scraper01",
      "/screenshots/domain-scraper/Domain-Scraper02",
      "/screenshots/domain-scraper/Domain-Scraper03"
    ]
  },
  {
    title: {
      es: "Astro Portfolio Template",
      en: "Astro Portfolio Template"
    },
    description: {
      es: "<strong>Template portfolio minimalista.</strong><br><br>Diseño terminal-inspired con estética monospace, modo oscuro/claro automático, galería de imágenes para proyectos y protección anti-spam de email. Template open source disponible para uso público.",
      en: "<strong>Minimalist portfolio template.</strong><br><br>Terminal-inspired design with monospace aesthetic, automatic dark/light mode, project image gallery and email anti-spam protection. Open source template available for public use."
    },
    tech: ["Astro", "TypeScript", "CSS", "JavaScript", "Open Source"],
    link: "https://github.com/686f6c61/astro-portfolio-template-686f6c61",
    demo: null,
    csv: null,
    featured: false,
    images: null
  },
  {
    title: {
      es: "X.com Analytics",
      en: "X.com Analytics"
    },
    description: {
      es: "<strong>Sistema profesional de análisis de redes sociales para X.com (Twitter).</strong><br><br>Procesa datos scrapeados mediante grafos interactivos. Detecta comunidades, calcula métricas de red avanzadas, identifica influencers y bots con optimizaciones de rendimiento. Beta v0.6.8",
      en: "<strong>Professional social media analytics system for X.com (Twitter).</strong><br><br>Processes scraped data through interactive graphs. Detects communities, calculates advanced network metrics, identifies influencers and bots with performance optimizations. Beta v0.6.8"
    },
    tech: ["Python", "Twitter Graph", "X.com", "Gephi Visualizations"],
    link: "https://github.com/686f6c61/x-twitter-community-analysis",
    demo: null,
    csv: null,
    featured: false,
    images: null
  },
  {
    title: {
      es: "Módulo Automático de Albaranes para Farmacias",
      en: "Automated Delivery Note Module for Pharmacies"
    },
    description: {
      es: "<strong>Sistema automatizado de gestión de albaranes.</strong><br><br>Procesamiento CSV de listado de pedidos mensuales de laboratorio farmacéutico. Creación de albaranes en Excel/PDF. Validación de datos con reportes de errores. Login por magic link. Interfaz intuitiva. Desplegado en Render. Reduce carga de trabajo de 5 días a 3 minutos. Personalización de albaranes.",
      en: "<strong>Automated delivery note management system.</strong><br><br>CSV processing of monthly order lists from pharmaceutical laboratory. Creation of delivery notes in Excel/PDF. Data validation with error reports. Magic link login. Intuitive interface. Deployed on Render. Reduces workload from 5 days to 3 minutes. Customizable delivery notes."
    },
    tech: ["Python", "Excel", "PDF", "CSV", "MVC", "Render"],
    link: null,
    demo: null,
    csv: null,
    featured: false,
    images: null
  },
  {
    title: {
      es: "AI Unicode Detector",
      en: "AI Unicode Detector"
    },
    description: {
      es: "<strong>Herramienta para detectar Unicode invisible.</strong><br><br>Analiza caracteres sin representación visual generados por IA que pueden causar problemas en datos. Detecta textos realizados con IA.",
      en: "<strong>Tool to detect invisible Unicode.</strong><br><br>Analyses visually unrepresentable characters generated by AI that can cause data problems. Detects AI-generated texts."
    },
    tech: ["HTML", "JavaScript", "Unicode", "AI"],
    link: "https://github.com/686f6c61/ai-unicode-detector",
    demo: "https://686f6c61.github.io/ai-unicode-detector/",
    csv: null,
    featured: false,
    images: null
  },
  {
    title: {
      es: "Prompt Engineering Framework Generator",
      en: "Prompt Engineering Framework Generator"
    },
    description: {
      es: "<strong>Aplicación web para generar prompts efectivos.</strong><br><br>Utiliza 75 frameworks especializados de prompt engineering para crear prompts optimizados con las mejores prácticas de IA.",
      en: "<strong>Web application for generating effective prompts.</strong><br><br>Uses 75 specialised prompt engineering frameworks to create optimised prompts with AI best practices."
    },
    tech: ["Python", "Flask", "OpenAI", "Claude", "Prompt Engineering"],
    link: "https://github.com/686f6c61/prompt-engineering-frameworks",
    demo: null,
    csv: null,
    featured: false,
    images: [
      "/screenshots/prompt-framework/Frameworks-Prompt.png",
      "/screenshots/prompt-framework/configuracion.png",
      "/screenshots/prompt-framework/diseño.png",
      "/screenshots/prompt-framework/bolt-lovable.png",
      "/screenshots/prompt-framework/codigos.png",
      "/screenshots/prompt-framework/razonadores.png"
    ]
  },
  {
    title: {
      es: "LinkedIn Job Scraper",
      en: "LinkedIn Job Scraper"
    },
    description: {
      es: "<strong>Script interactivo para búsqueda de trabajos en LinkedIn.</strong><br><br>Integración con RapidAPI JSearch. Permite búsquedas personalizadas y predefinidas con exportación a CSV.",
      en: "<strong>Interactive script for LinkedIn job searching.</strong><br><br>Integration with RapidAPI JSearch. Allows custom and predefined searches with CSV export."
    },
    tech: ["Python", "RapidAPI", "CSV", "LinkedIn", "Job Search"],
    link: "https://github.com/686f6c61/linkedIN-Jobs-Scrapper",
    demo: null,
    csv: null,
    featured: false,
    images: null
  },
  {
    title: {
      es: "Organizador Automático de Gmail",
      en: "Automatic Gmail Organizer"
    },
    description: {
      es: "<strong>Script automatizado para organización de correos electrónicos.</strong><br><br>Clasifica automáticamente emails según el dominio del remitente, creando etiquetas dinámicas y agrupando dominios genéricos.",
      en: "<strong>Automated script for email organisation.</strong><br><br>Automatically classifies emails by sender domain, creating dynamic labels and grouping generic domains."
    },
    tech: ["Google Apps Script", "Gmail API", "JavaScript", "Automation"],
    link: "https://github.com/686f6c61/organizador-etiquetas-gmail-google-script",
    demo: null,
    csv: null,
    featured: false,
    images: [
      "/screenshots/gmail-organizer/configurador.png",
      "/screenshots/gmail-organizer/estadisticas.png"
    ]
  },
  {
    title: {
      es: "Refutación Matemática de la Numerología",
      en: "Mathematical Refutation of Numerology"
    },
    description: {
      es: "<strong>Demostración matemática contra pretensiones numerológicas.</strong><br><br>Sistema diseñado donde todos los números convergen al 7 por diseño arbitrario, no por propiedades místicas, demostrando la falacia del razonamiento numerológico.",
      en: "<strong>Mathematical demonstration against numerological claims.</strong><br><br>System designed where all numbers converge to 7 by arbitrary design, not mystical properties, demonstrating the fallacy of numerological reasoning."
    },
    tech: ["Python", "Mathematics", "Logic", "Scientific Method"],
    link: "https://github.com/686f6c61/conjetura-falso-7",
    demo: null,
    csv: null,
    featured: false,
    images: null
  },
  {
    title: {
      es: "Extensión Detector de Lovable",
      en: "Lovable Detector Extension"
    },
    description: {
      es: "<strong>Extensión de Chrome para detectar sitios construidos con Lovable.</strong><br><br>Analiza el código fuente de páginas web buscando metaetiquetas que contengan palabras clave indicativas del framework Lovable.",
      en: "<strong>Chrome extension to detect sites built with Lovable.</strong><br><br>Analyses web page source code searching for meta tags containing keywords indicative of the Lovable framework."
    },
    tech: ["Chrome Extension", "JavaScript", "Web Scraping", "Lovable"],
    link: "https://github.com/686f6c61/lovable-detector-extension",
    demo: null,
    csv: null,
    featured: false,
    images: null
  }
];