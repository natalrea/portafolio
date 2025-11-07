/**
 * GENERADOR DE SITEMAP XML
 * ========================
 *
 * Este archivo genera dinámicamente el sitemap.xml del sitio.
 * El sitemap es un archivo XML que ayuda a los motores de búsqueda (Google, Bing, etc.)
 * a indexar correctamente todas las páginas del sitio web.
 *
 * PROPÓSITO:
 * - Genera sitemap.xml en formato estándar (sitemaps.org)
 * - Incluye información bilingüe (español/inglés)
 * - Define prioridades y frecuencias de actualización
 * - Incluye enlaces alternativos para SEO multiidioma
 *
 * FUNCIONAMIENTO:
 * - Se genera dinámicamente en cada request a /sitemap.xml
 * - Lee la configuración del sitio desde astro.config.mjs
 * - Calcula fecha de modificación automáticamente
 * - Incluye caché HTTP para mejor rendimiento
 *
 * USO:
 * - URL de acceso: https://tu-dominio.com/sitemap.xml
 * - Se referencia en public/robots.txt
 * - Google Search Console lo detecta automáticamente
 *
 * PERSONALIZACIÓN:
 * - Si añades nuevas páginas, agrégalas al array 'pages'
 * - Ajusta priority según importancia (1.0 = máxima, 0.1 = mínima)
 * - Cambia changefreq según frecuencia de actualización
 */

import type { APIRoute } from 'astro';

/**
 * HANDLER: GET
 * ------------
 * Función que se ejecuta cuando alguien accede a /sitemap.xml
 *
 * PARÁMETROS:
 * @param site - Información del sitio desde astro.config.mjs
 *
 * RETORNA:
 * Response con XML del sitemap y headers de caché
 */
export const GET: APIRoute = async ({ site }) => {
  // Validación: Verificar que site esté configurado en astro.config.mjs
  if (!site) {
    return new Response('Site configuration missing', { status: 500 });
  }

  // Obtener URL base del sitio (ej: https://tu-dominio.com)
  const baseUrl = site.origin;

  // Fecha actual en formato ISO (YYYY-MM-DD) para lastmod
  const currentDate = new Date().toISOString().split('T')[0];

  /**
   * ARRAY: pages
   * ------------
   * Define todas las páginas del sitio que deben incluirse en el sitemap.
   *
   * PROPIEDADES:
   * - url: Ruta relativa de la página ('' = home, '/about' = página about)
   * - lastmod: Fecha de última modificación (formato YYYY-MM-DD)
   * - changefreq: Frecuencia de actualización
   *   Valores: 'always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'
   * - priority: Importancia relativa (0.0 a 1.0)
   *   1.0 = página más importante, 0.1 = menos importante
   * - lang: Código de idioma de la página ('es' o 'en')
   * - alternate: Ruta a la versión alternativa en otro idioma
   *
   * CÓMO AÑADIR PÁGINAS:
   * Si creas nuevas páginas (ej: /about, /blog), añádelas aquí:
   * {
   *   url: '/about',
   *   lastmod: currentDate,
   *   changefreq: 'monthly',
   *   priority: '0.8',
   *   lang: 'es',
   *   alternate: '/en/about'
   * }
   */
  const pages = [
    {
      url: '',  // Página principal español (/)
      lastmod: currentDate,
      changefreq: 'weekly', // Se actualiza semanalmente
      priority: '1.0',      // Máxima prioridad
      lang: 'es',
      alternate: '/en'      // Versión inglés
    },
    {
      url: '/en',  // Página principal inglés
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9',      // Muy alta prioridad (solo un poco menos que español)
      lang: 'en',
      alternate: '/'        // Versión español
    }
  ];

  /**
   * GENERACIÓN DEL XML
   * ------------------
   * Crea el contenido XML del sitemap según el estándar sitemaps.org
   *
   * ESTRUCTURA:
   * - <?xml>: Declaración XML
   * - <urlset>: Contenedor principal con namespaces
   *   - xmlns: Namespace estándar de sitemaps
   *   - xmlns:xhtml: Namespace para enlaces alternativos multiidioma
   * - <url>: Un elemento por cada página
   *   - <loc>: URL completa de la página
   *   - <lastmod>: Fecha de última modificación
   *   - <changefreq>: Frecuencia de actualización estimada
   *   - <priority>: Importancia relativa de la página
   *   - <xhtml:link>: Enlaces a versiones alternativas (multiidioma)
   *
   * NOTA SOBRE ALTERNATES:
   * Los <xhtml:link> ayudan a Google a entender que las páginas en diferentes
   * idiomas son versiones de la misma página, mejorando SEO internacional.
   */
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="${page.lang}" href="${baseUrl}${page.url}" />
    <xhtml:link rel="alternate" hreflang="${page.lang === 'es' ? 'en' : 'es'}" href="${baseUrl}${page.alternate}" />
  </url>`).join('\n')}
</urlset>`;

  /**
   * RESPUESTA HTTP
   * --------------
   * Devuelve el sitemap XML con headers optimizados para SEO y rendimiento
   *
   * HEADERS:
   * - Content-Type: Indica que es un archivo XML
   * - Cache-Control: Configura caché para reducir carga del servidor
   *   - public: Puede ser cacheado por navegadores y CDNs
   *   - max-age=3600: Navegador cachea por 1 hora
   *   - s-maxage=86400: CDN/proxy cachea por 24 horas
   *
   * BENEFICIOS DEL CACHÉ:
   * - Reduce carga del servidor
   * - Mejora velocidad de acceso
   * - Google/Bing pueden acceder rápidamente
   */
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
};

/**
 * CÓMO VERIFICAR EL SITEMAP
 * =========================
 *
 * 1. EN DESARROLLO:
 *    - Inicia: npm run dev
 *    - Accede a: http://localhost:4321/sitemap.xml
 *
 * 2. EN PRODUCCIÓN:
 *    - Accede a: https://tu-dominio.com/sitemap.xml
 *
 * 3. EN GOOGLE SEARCH CONSOLE:
 *    - Ve a Sitemaps
 *    - Añade: sitemap.xml
 *    - Google validará y comenzará a indexar
 *
 * 4. VALIDADOR ONLINE:
 *    - https://www.xml-sitemaps.com/validate-xml-sitemap.html
 *    - Pega tu URL de sitemap
 *    - Verifica que no haya errores
 *
 * ERRORES COMUNES:
 * - "Site configuration missing": Falta site en astro.config.mjs
 * - URLs inválidas: Verifica que baseUrl esté bien configurado
 * - Formato incorrecto: Asegúrate de no modificar la estructura XML
 */
