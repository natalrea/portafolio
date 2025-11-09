/**
 * ARCHIVO DE DATOS DE PROYECTOS
 * ==============================
 *
 * Este archivo centraliza todos los proyectos que aparecen en tu portfolio.
 * Es la fuente de datos principal para la sección de proyectos.
 *
 * PROPÓSITO:
 * - Define la estructura de datos de cada proyecto
 * - Almacena información bilingüe (español/inglés)
 * - Soporta múltiples tipos de enlaces y contenido multimedia
 * - Permite marcar proyectos como destacados (PINNED)
 *
 * ARQUITECTURA:
 * - TypeScript para type-safety y validación
 * - Soporte bilingüe completo en todos los campos de texto
 * - Propiedades opcionales (demo, web, images, etc.) para flexibilidad
 * - Sistema de filtrado por tecnologías (tech array)
 *
 * CÓMO AÑADIR UN PROYECTO:
 * 1. Copia uno de los ejemplos existentes
 * 2. Modifica los campos según tu proyecto
 * 3. Añádelo al array projectsData
 * 4. Guarda - Astro recargará automáticamente
 *
 * CÓMO ELIMINAR UN PROYECTO:
 * 1. Localiza el objeto del proyecto en el array
 * 2. Elimina desde { hasta }, (incluyendo la coma)
 * 3. Guarda el archivo
 */

/**
 * INTERFAZ: Project
 * -----------------
 * Define la estructura de datos que debe tener cada proyecto.
 * TypeScript usa esta interfaz para validar que no falten campos obligatorios.
 *
 * PROPIEDADES OBLIGATORIAS:
 * - title: Título del proyecto (bilingüe)
 * - description: Descripción breve que aparece en la tarjeta (bilingüe, soporta HTML)
 * - tech: Array de tecnologías/skills usadas
 * - featured: Boolean que indica si es proyecto destacado (PINNED)
 *
 * PROPIEDADES OPCIONALES:
 * - explanation: Descripción extendida para modal (bilingüe, soporta HTML)
 * - link: URL al código fuente (GitHub)
 * - demo: URL a demo en vivo
 * - web: URL al sitio web oficial
 * - csv: Ruta a archivo descargable (CSV o cualquier formato)
 * - images: Array de rutas a screenshots para galería
 *
 * TIPOS DE BOTONES QUE SE MUESTRAN:
 * - [demo] - Si demo !== null
 * - [code] - Si link !== null
 * - [web] - Si web !== null
 * - [images] - Si images !== null y images.length > 0
 * - [explicación] - Si explanation !== undefined
 * - [csv] - Si csv !== null
 */
export interface Project {
  // TÍTULO (Obligatorio)
  // Aparece como encabezado principal del proyecto
  title: {
    es: string;  // Título en español
    en: string;  // Título en inglés
  };

  // DESCRIPCIÓN (Obligatorio)
  // Texto que aparece en la tarjeta del proyecto
  // SOPORTA HTML: Puedes usar <strong>, <br>, <span>, etc.
  description: {
    es: string;  // Descripción en español
    en: string;  // Descripción en inglés
  };

  // EXPLICACIÓN EXTENDIDA (Opcional)
  // Si se define, aparece botón [explicación] que abre modal con este contenido
  // Útil para proyectos complejos que necesitan más contexto
  explanation?: {
    es: string;  // Explicación en español
    en: string;  // Explicación en inglés
  };

  // TECNOLOGÍAS (Obligatorio)
  // Array de strings con las tecnologías/skills usadas
  // Se muestra como etiquetas bajo el proyecto y permite filtrado
  // Ejemplo: ["React", "Node.js", "PostgreSQL", "Docker"]
  tech: string[];

  // CÓDIGO FUENTE (Opcional)
  // URL al repositorio de GitHub (o similar)
  // Si es null, no se muestra botón [code]
  link: string | null;

  // DEMO EN VIVO (Opcional)
  // URL a una versión funcional del proyecto
  // Si es null, no se muestra botón [demo]
  demo: string | null;

  // SITIO WEB (Opcional)
  // URL al sitio web oficial del proyecto
  // Si es null, no se muestra botón [web]
  web: string | null;

  // ARCHIVO DESCARGABLE (Opcional)
  // Ruta a archivo CSV u otro formato descargable
  // Debe estar en public/assets/ para ser accesible
  // Si es null, no se muestra botón [csv]
  csv: string | null;

  // DESTACADO (Obligatorio)
  // true = aparece con badge "PINNED" al inicio de la lista
  // false = aparece en orden normal
  featured: boolean;

  // GALERÍA DE IMÁGENES (Opcional)
  // Array de rutas a screenshots del proyecto
  // NO incluir extensión (.png, .jpg) - se añade automáticamente
  // Si es null o array vacío, no se muestra botón [images]
  // Rutas relativas a public/ (ejemplo: "/screenshots/proyecto/img-01")
  images: string[] | null;
}

/**
 * ARRAY: projectsData
 * -------------------
 * Contiene todos los proyectos del portfolio.
 * Se exporta para uso en componentes y utilidades.
 *
 * ORDEN:
 * - Los proyectos con featured: true aparecen primero
 * - Luego los demás en el orden que los defines aquí
 *
 * EJEMPLOS INCLUIDOS:
 * 1. Proyecto Completo: Muestra TODAS las opciones disponibles
 * 2. Proyecto Destacado: Solo algunas opciones, featured: true
 * 3. Proyecto Regular: Configuración básica estándar
 * 4. Proyecto Simple: Mínimo necesario
 *
 * REEMPLAZA ESTOS EJEMPLOS CON TUS PROYECTOS REALES
 */
export const projectsData: Project[] = [
  {
    title: {
      es: "Centro de la Vista",
      en: "Centro de la Vista"
    },
    description: {
      es: "Desarrollo web para una clínica oftalmológica moderna. Sitio optimizado con diseño responsivo, enfoque en accesibilidad y velocidad. Incluye secciones de servicios, especialistas, contacto y ubicación.",
      en: "Web development for a modern ophthalmology clinic. Responsive design with focus on accessibility and speed. Includes service details, specialists, contact, and location sections."
    },
    tech: ["Astro", "Frontend", "Web Design", "Tailwind CSS"],
    link: "https://github.com/VictorJesusReaValencia", // Enlace a tu perfil de GitHub
    demo: "https://centrodelavista.com/", // Enlace al sitio real
    web: null,
    csv: null,
    featured: true, // Proyecto destacado (PINNED)
    images: null
  }

];

/**
 * GUÍA RÁPIDA DE PERSONALIZACIÓN
 * ===============================
 *
 * PASO 1: ELIMINAR EJEMPLOS
 * Borra los 4 proyectos de ejemplo de este archivo.
 *
 * PASO 2: AÑADIR TUS PROYECTOS
 * Copia uno de los tipos de ejemplo según tus necesidades:
 * - Tipo 1: Proyecto completo con todas las opciones
 * - Tipo 2: Proyecto destacado simple
 * - Tipo 3: Proyecto regular estándar
 * - Tipo 4: Proyecto mínimo solo código
 *
 * PASO 3: PERSONALIZAR CAMPOS
 * Cambia los valores de cada campo:
 * - title: Nombre de tu proyecto (español e inglés)
 * - description: Qué hace y por qué es interesante
 * - tech: Tecnologías que usaste
 * - link: URL de tu repo GitHub
 * - demo/web/csv/images: URLs/rutas según disponibilidad
 * - featured: true si quieres que aparezca como PINNED
 *
 * PASO 4: AÑADIR SCREENSHOTS (OPCIONAL)
 * Si tu proyecto tiene imágenes:
 * 1. Crea carpeta en public/screenshots/nombre-proyecto/
 * 2. Añade imágenes numeradas: screenshot-01.png, screenshot-02.png, etc.
 * 3. Crea thumbnails en public/thumbnails/screenshots/nombre-proyecto/
 * 4. Añade rutas en el campo images (sin extensión)
 *
 * PASO 5: GUARDAR Y VERIFICAR
 * Guarda el archivo y verifica en http://localhost:4321
 *
 * EJEMPLO REAL:
 * {
 *   title: {
 *     es: "E-commerce de Zapatos",
 *     en: "Shoe E-commerce"
 *   },
 *   description: {
 *     es: "<strong>Tienda online completa.</strong><br><br>E-commerce con carrito, checkout y pasarela de pago. Incluye panel de administración, gestión de inventario y analytics. <strong>React</strong>, <strong>Stripe</strong>, <strong>MongoDB</strong>.",
 *     en: "<strong>Complete online store.</strong><br><br>E-commerce with cart, checkout and payment gateway. Includes admin panel, inventory management and analytics. <strong>React</strong>, <strong>Stripe</strong>, <strong>MongoDB</strong>."
 *   },
 *   tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
 *   link: "https://github.com/tu-usuario/ecommerce-zapatos",
 *   demo: "https://zapatos-demo.vercel.app",
 *   web: "https://www.zapatosonline.com",
 *   csv: null,
 *   featured: true,
 *   images: [
 *     "/screenshots/ecommerce-zapatos/home",
 *     "/screenshots/ecommerce-zapatos/producto",
 *     "/screenshots/ecommerce-zapatos/carrito",
 *     "/screenshots/ecommerce-zapatos/checkout"
 *   ]
 * }
 */
