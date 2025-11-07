# ASTRO 686F6C61 TEMPLATE

Template minimalista para portfolio con diseño inspirado en terminal, modo oscuro/claro automático y soporte bilingüe (Español/Inglés).

---

## INFORMACIÓN DEL TEMPLATE

> **Información requerida para publicar en Astro.build**

**Nombre del theme:** Astro 686F6C61 Portfolio Template

**Repositorio GitHub:** https://github.com/686f6c61/astro-686f6c61-template

**Demo online:** https://astro-686f6c61-template.onrender.com


**Descripción:**
Minimalist tech portfolio template with terminal-inspired design, automatic dark/light mode, and bilingual support (Spanish/English). Features project showcase with filtering, image galleries, and SEO optimization.

**Etiquetas (Tags):**
`portfolio` `dark-mode` `bilingual` `minimal` `terminal` `seo` `typescript` `responsive` `i18n` `tech-portfolio`

**Screenshots del template:**

![Portfolio Preview - Hero Section](theme-assets/og-image-01.png)
*Hero section with terminal-inspired design*

![Portfolio Preview - Projects Grid](theme-assets/og-image-02.png)
*Projects showcase with filtering system*

![Portfolio Preview - Project Details](theme-assets/og-image-03.png)
*Project card with multiple action buttons*

![Portfolio Preview - Dark Mode](theme-assets/og-image-04.png)
*Automatic dark/light mode support*

---

## TABLA DE CONTENIDOS

- [CARACTERÍSTICAS](#características)
- [REQUISITOS PREVIOS](#requisitos-previos)
- [INSTALACIÓN](#instalación)
- [CONFIGURACIÓN INICIAL](#configuración-inicial)
- [SISTEMA DE TRADUCCIONES](#sistema-de-traducciones)
- [PERSONALIZACIÓN DE CONTENIDO](#personalización-de-contenido)
- [PROYECTOS](#proyectos)
- [IMÁGENES Y THUMBNAILS](#imágenes-y-thumbnails)
- [SISTEMA DE SKILLS](#sistema-de-skills)
- [COMPONENTES](#componentes)
- [PERSONALIZACIÓN DE ESTILOS](#personalización-de-estilos)
- [DESPLIEGUE](#despliegue)

---

## CARACTERÍSTICAS

- Diseño terminal-inspired con estética monospace
- Modo oscuro/claro automático según preferencias del sistema
- Sistema bilingüe completo (Español/Inglés)
- Showcase de proyectos con múltiples opciones de visualización
- Protección anti-spam de email con codificación Base64
- Optimizado para SEO con meta tags completos
- Generación estática con Astro (rendimiento excepcional)
- Diseño responsive mobile-first
- Galería de imágenes para proyectos
- Sistema de filtrado por tecnologías
- Modales para explicaciones extendidas

---

## REQUISITOS PREVIOS

Antes de comenzar, asegurate de tener instalado:

- **Node.js** versión 18 o superior
- **npm**, **yarn** o **pnpm** (gestor de paquetes)
- Editor de código (recomendado: VS Code)
- Terminal o línea de comandos

Para verificar tu versión de Node.js:

```bash
node --version
```

---

## INSTALACIÓN

### PASO 1: CLONAR EL REPOSITORIO

```bash
git clone https://github.com/686f6c61/astro-686f6c61-template.git
cd astro-686f6c61-template
```

### PASO 2: INSTALAR DEPENDENCIAS

```bash
npm install
```

Este comando instalará:
- Astro 5.15.3
- Serve (para preview)
- Terser (para minificación)

### PASO 3: INICIAR SERVIDOR DE DESARROLLO

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

### COMANDOS DISPONIBLES

| Comando | Descripción |
|---------|-------------|
| `npm install` | Instala todas las dependencias |
| `npm run dev` | Inicia servidor de desarrollo en puerto 4321 |
| `npm run build` | Genera el sitio estático en carpeta `dist/` |
| `npm run preview` | Previsualiza el build de producción |
| `npm run astro` | Ejecuta comandos CLI de Astro |

---

## CONFIGURACIÓN INICIAL

### CONFIGURACIÓN DE ASTRO

**Archivo:** `astro.config.mjs`

```javascript
export default defineConfig({
  site: 'https://your-domain.com', // CAMBIAR: Tu dominio
  devToolbar: {
    enabled: false  // Barra de herramientas de desarrollo desactivada
  },
  build: {
    inlineStylesheets: 'auto',  // Optimización de CSS
  },
  vite: {
    build: {
      cssMinify: true,    // Minificación de CSS
      minify: 'terser',   // Minificación con Terser
    },
  },
});
```

**QUÉ CAMBIAR:**

**Archivo: `astro.config.mjs` - Línea 6**

Reemplaza `'https://your-domain.com'` con tu dominio real.

Ejemplo:
```javascript
site: 'https://miportfolio.com',
```

### CONFIGURACIÓN DEL SITEMAP

**Archivo:** `public/robots.txt` - **Línea 5**

```
Sitemap: https://your-domain.com/sitemap.xml
```

CAMBIAR `your-domain.com` por tu dominio.

### PACKAGE.JSON

**Archivo:** `package.json`

```json
{
  "name": "astro-686f6c61-template",  // Línea 2: Nombre de tu proyecto
  "version": "1.0.0",                 // Línea 4: Versión
  "description": "...",               // Línea 5: Descripción
  "author": "Your Name",              // Línea 6: Tu nombre
}
```

**Líneas a personalizar:**
- **Línea 2:** Nombre de tu proyecto
- **Línea 4:** Versión
- **Línea 5:** Descripción
- **Línea 6:** Tu nombre

---

## SISTEMA DE TRADUCCIONES

El template usa un sistema bilingüe completo. **Cada texto que modifiques en español, debes modificarlo también en inglés.**

**Archivo:** `src/i18n/translations.ts`

### ESTRUCTURA DE TRADUCCIONES

**Archivo:** `src/i18n/translations.ts`

```typescript
export const translations: Record<string, Translations> = {
  es: {
    // Todas las traducciones en ESPAÑOL
    siteTitle: "Tu Nombre - Portfolio Tech",
    heroTitle: "Tu Nombre",
    // ...
  },
  en: {
    // Las MISMAS traducciones en INGLÉS
    siteTitle: "Your Name - Tech Portfolio",
    heroTitle: "Your Name",
    // ...
  }
};
```

### CAMPOS DE TRADUCCIÓN

| Campo | Ubicación | Descripción |
|-------|-----------|-------------|
| `siteTitle` | Meta tags | Título de la página (aparece en pestaña del navegador) |
| `siteDescription` | Meta tags | Descripción para SEO |
| `heroGreeting` | Hero section | Texto "$ whoami" |
| `heroTitle` | Hero section | Tu nombre o marca personal |
| `heroSubtitle` | Hero section | Tu título profesional |
| `heroDescription` | Hero section | Descripción de quién eres |
| `heroCta` | Hero section | Texto del botón "cd ~/projects" |
| `heroTemplateButton` | Hero section | Texto del botón "git clone template" |
| `projectsTitle` | Proyectos | Título de sección "$ ls ~/projects" |
| `projectsFeatured` | Proyectos | Badge "PINNED" |
| `projectsDemo` | Proyectos | Texto "[demo]" |
| `projectsCode` | Proyectos | Texto "[code]" |
| `projectsWeb` | Proyectos | Texto "[web]" |
| `projectsImages` | Proyectos | Texto "[images]" |
| `projectsExplanation` | Proyectos | Texto "[explicación]/[explanation]" |
| `projectsCsv` | Proyectos | Texto "[csv]" |
| `contactTitle` | Footer | Título "$ contact --me" |
| `contactEmailButton` | Footer | Botón "cat email.txt" |
| `contactLinks` | Footer | Título "Links" |
| `footerCopyright` | Footer | Copyright con {year} como placeholder |
| `footerStatus` | Footer | Estado "All systems operational" |

### EJEMPLO DE PERSONALIZACIÓN

**Archivo:** `src/i18n/translations.ts`

**Español (líneas 100-102):**

```typescript
es: {
  siteTitle: "Juan Pérez - Portfolio Tech",
  siteDescription: "Desarrollador Full Stack especializado en React y Node.js",

  heroTitle: "Juan Pérez",
  heroSubtitle: "Full Stack Developer",
  heroDescription: "Desarrollo aplicaciones web modernas y escalables con más de 5 años de experiencia.<br><span class=\"terminal-info\">Especializado en React, Node.js y cloud computing</span>",
```

**Inglés (líneas 139-141):**

```typescript
en: {
  siteTitle: "Juan Pérez - Tech Portfolio",
  siteDescription: "Full Stack Developer specialized in React and Node.js",

  heroTitle: "Juan Pérez",
  heroSubtitle: "Full Stack Developer",
  heroDescription: "I build modern and scalable web applications with over 5 years of experience.<br><span class=\"terminal-info\">Specialized in React, Node.js and cloud computing</span>",
```

**IMPORTANTE:** Los comentarios con `//` en el archivo son guías, NO afectan el funcionamiento.

---

## PERSONALIZACIÓN DE CONTENIDO

### HERO SECTION (SECCIÓN PRINCIPAL)

**Archivo:** `src/i18n/translations.ts`

#### NOMBRE Y TÍTULO

**Archivo:** `src/i18n/translations.ts`

**Español - Líneas 100-101:**

```typescript
heroTitle: "Tu Nombre",              // TU NOMBRE AQUÍ
heroSubtitle: "Tu Título Profesional",  // TU TÍTULO AQUÍ
```

**Inglés - Líneas 139-140:**

```typescript
heroTitle: "Your Name",                  // YOUR NAME HERE
heroSubtitle: "Your Professional Title", // YOUR TITLE HERE
```

#### DESCRIPCIÓN

**Archivo:** `src/i18n/translations.ts` - **Línea 102 (Español):**

```typescript
heroDescription: "Aquí va tu descripción profesional. Cuenta quién eres y qué haces.<br><span class=\"terminal-info\">Esta es una línea adicional de texto más pequeña</span>",
```

**Estructura de la descripción:**
- Texto principal: Va antes del `<br>`
- Texto secundario: Va dentro del `<span class="terminal-info">`

**Ejemplo real:**

```typescript
heroDescription: "Desarrollador Full Stack con pasión por crear experiencias web excepcionales.<br><span class=\"terminal-info\">Transformo ideas en productos digitales funcionales y elegantes</span>",
```

### BOTÓN DEL TEMPLATE

**Archivo:** `src/components/Hero.astro` - **Línea 142:**

```astro
<a href="https://github.com/yourusername/your-template-repo" ...>
```

CAMBIAR la URL por:
- Tu repositorio de GitHub donde publiques el template
- O eliminar esta línea completa si no quieres compartir el template

### FOOTER

#### REDES SOCIALES

**Archivo:** `src/components/Footer.astro` - **Línea 82:**

```typescript
const socialLinks = [
  { name: "GitHub", url: "https://github.com/yourusername" },
  { name: "Twitter", url: "https://twitter.com/yourusername" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" }
];
```

**Puedes:**
- Cambiar las URLs
- Añadir más redes sociales
- Eliminar las que no uses

**Ejemplo con más redes:**

```typescript
const socialLinks = [
  { name: "GitHub", url: "https://github.com/tuusuario" },
  { name: "LinkedIn", url: "https://linkedin.com/in/tuusuario" },
  { name: "Twitter", url: "https://twitter.com/tuusuario" },
  { name: "Instagram", url: "https://instagram.com/tuusuario" },
  { name: "YouTube", url: "https://youtube.com/@tuusuario" }
];
```

#### EMAIL (PROTECCIÓN ANTI-SPAM)

El email está codificado en Base64 para evitar bots de spam.

**Archivo:** `src/components/Footer.astro` - **Líneas 517-518:**

```javascript
const user = atob('eW91cnVzZXJuYW1l');    // Base64 de "yourusername"
const domain = atob('ZXhhbXBsZS5jb20=');  // Base64 de "example.com"
const email = user + '@' + domain;        // Resultado: yourusername@example.com
```

**CÓMO CODIFICAR TU EMAIL:**

1. Separa tu email en dos partes: `usuario@dominio.com`
2. Codifica cada parte en Base64:

```bash
# En terminal (Linux/Mac):
echo -n "tuemail" | base64
echo -n "tudominio.com" | base64

# En terminal (Windows PowerShell):
[Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("tuemail"))
[Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("tudominio.com"))
```

3. Reemplaza los valores:

```javascript
const user = atob('dHVlbWFpbA==');           // Base64 de "tuemail"
const domain = atob('dHVkb21pbmlvLmNvbQ=='); // Base64 de "tudominio.com"
```

**Herramienta online:** https://www.base64encode.org/

#### COPYRIGHT

**Archivo:** `src/i18n/translations.ts`

**Español - Línea 122:**

```typescript
footerCopyright: "© {year} Tu Nombre",
```

**Inglés - Línea 161:**

```typescript
footerCopyright: "© {year} Your Name",
```

El `{year}` se reemplaza automáticamente por el año actual.

### META TAGS Y SEO

**Archivo:** `src/layouts/Layout.astro`

#### DESCRIPCIÓN DEFAULT

**Archivo:** `src/layouts/Layout.astro` - **Línea 57:**

```typescript
description = "Tech portfolio - Full stack developer",
```

Cambia esto por tu descripción por defecto.

#### OPEN GRAPH

**Archivo:** `src/layouts/Layout.astro` - **Línea 183:**

```html
<meta property="og:site_name" content="Your Portfolio" />
```

Cambia "Your Portfolio" por el nombre de tu sitio.

#### TWITTER

**Archivo:** `src/layouts/Layout.astro` - **Línea 206:**

```html
<meta name="twitter:creator" content="@yourusername" />
```

Cambia `@yourusername` por tu usuario de Twitter/X.

#### JSON-LD (STRUCTURED DATA)

**Archivo:** `src/layouts/Layout.astro` - **Líneas 256-276:**

```javascript
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",           // CAMBIAR: Tu nombre (línea 259)
  "url": Astro.site?.toString(),
  "image": ogImage.toString(),
  "sameAs": [                    // CAMBIAR: Tus redes sociales
    "https://github.com/yourusername",
    "https://twitter.com/yourusername"
  ],
  "jobTitle": "Full Stack Developer",  // CAMBIAR: Tu título (línea 266)
  "description": description,
  "knowsAbout": [                // CAMBIAR: Tus tecnologías (línea 268)
    "React",
    "Node.js",
    "Astro",
    "TypeScript",
    "Python",
    "Full Stack Development"
  ]
}
```

#### GOOGLE ANALYTICS (OPCIONAL)

**Archivo:** `src/layouts/Layout.astro` - **Líneas 295-301:**

El código está comentado. Para activarlo:

1. Obtén tu tracking ID de Google Analytics (formato: G-XXXXXXXXXX)
2. Descomenta el código
3. Reemplaza `G-XXXXXXXXXX` con tu ID

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TU-ID-AQUI"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-TU-ID-AQUI');
</script>
```

### FAVICON

El favicon es el pequeño icono que aparece en la pestaña del navegador junto al título de tu sitio.

#### ARCHIVOS DE FAVICON

El template incluye dos formatos de favicon:

**Archivo:** `public/favicon.ico` - Formato tradicional ICO (32x32px)
**Archivo:** `public/favicon.svg` - Formato vectorial SVG (escalable)

#### CAMBIAR FAVICON ICO

**Archivo:** `public/favicon.ico`

1. Crea un archivo PNG de 32x32 píxeles con tu logo/inicial
2. Convierte a formato ICO usando:
   - **Online:** https://favicon.io/ o https://www.favicon-generator.org/
   - **Photoshop/GIMP:** Exportar como ICO
   - **ImageMagick:**
   ```bash
   convert mi-logo.png -resize 32x32 favicon.ico
   ```

3. Reemplaza el archivo `public/favicon.ico` con tu nuevo favicon

#### CAMBIAR FAVICON SVG

**Archivo:** `public/favicon.svg`

El SVG permite favicons escalables y adaptables al tema (claro/oscuro).

**Opción 1: SVG simple con inicial**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <!-- Rectángulo de fondo -->
  <rect width="100" height="100" fill="#000000"/>
  <!-- Tu inicial en blanco -->
  <text x="50" y="70" font-family="monospace" font-size="60"
        fill="#ffffff" text-anchor="middle">J</text>
</svg>
```

**Opción 2: SVG adaptable a tema claro/oscuro**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <style>
    rect { fill: #000000; }
    text { fill: #ffffff; }
    @media (prefers-color-scheme: light) {
      rect { fill: #ffffff; }
      text { fill: #000000; }
    }
  </style>
  <rect width="100" height="100"/>
  <text x="50" y="70" font-family="monospace" font-size="60" text-anchor="middle">J</text>
</svg>
```

**Opción 3: Usar tu logo existente**

Si tienes un logo en SVG, simplemente cópialo a `public/favicon.svg`.

#### HERRAMIENTAS PARA CREAR FAVICONS

| Herramienta | URL | Descripción |
|-------------|-----|-------------|
| Favicon.io | https://favicon.io/ | Genera desde texto, imagen o emoji |
| RealFaviconGenerator | https://realfavicongenerator.net/ | Genera múltiples formatos |
| Figma | https://www.figma.com/ | Diseña y exporta SVG personalizado |
| Inkscape | https://inkscape.org/ | Editor SVG gratuito |

#### TAMAÑOS RECOMENDADOS

| Formato | Tamaño | Uso |
|---------|--------|-----|
| favicon.ico | 32x32px | Navegadores legacy, favoritos |
| favicon.svg | Vectorial | Navegadores modernos, escalable |
| apple-touch-icon | 180x180px | iOS home screen (opcional) |
| android-chrome | 192x192px | Android home screen (opcional) |

#### AÑADIR APPLE TOUCH ICON (OPCIONAL)

Si quieres soporte para cuando los usuarios añadan tu sitio a la pantalla de inicio en iOS:

1. Crea una imagen PNG de 180x180px
2. Guárdala como `public/apple-touch-icon.png`
3. Añade en `src/layouts/Layout.astro` después de la línea 218 (después de los favicons):

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

#### VERIFICAR FAVICON

Después de cambiar el favicon:

1. **Limpia caché del navegador:** Ctrl+Shift+R (Cmd+Shift+R en Mac)
2. **Prueba en modo incógnito** para ver el nuevo favicon
3. **Verifica en múltiples navegadores** (Chrome, Firefox, Safari)
4. **Usa esta herramienta:** https://realfavicongenerator.net/favicon_checker

#### EJEMPLO COMPLETO DE CONFIGURACIÓN

**Estructura recomendada en `public/`:**

```
public/
├── favicon.ico          # 32x32 ICO (obligatorio)
├── favicon.svg          # SVG escalable (obligatorio)
├── apple-touch-icon.png # 180x180 PNG (opcional)
└── android-chrome-192x192.png # 192x192 PNG (opcional)
```

**Referencias en Layout.astro:**

El template ya incluye las referencias correctas en `src/layouts/Layout.astro` líneas 218-219:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="shortcut icon" href="/favicon.ico" />
```

---

## PROYECTOS

Esta es la sección más importante del template. Aquí defines todos tus proyectos.

**Archivo:** `src/data/projects-data.ts`

### ESTRUCTURA DE UN PROYECTO

Cada proyecto es un objeto JavaScript con la siguiente estructura:

```typescript
{
  title: {
    es: "Título en Español",
    en: "Title in English"
  },
  description: {
    es: "Descripción en español con <strong>HTML</strong> permitido",
    en: "Description in English with <strong>HTML</strong> allowed"
  },
  explanation: {  // OPCIONAL
    es: "Explicación extendida en español",
    en: "Extended explanation in English"
  },
  tech: ["Tecnología 1", "Tecnología 2", "Tecnología 3"],
  link: "URL" o null,
  demo: "URL" o null,
  web: "URL" o null,
  csv: "ruta" o null,
  featured: true o false,
  images: ["ruta1", "ruta2"] o null
}
```

### TABLA DE PROPIEDADES

| Propiedad | Tipo | Obligatorio | Descripción | Ejemplo |
|-----------|------|-------------|-------------|---------|
| `title` | Object | SÍ | Título del proyecto en ambos idiomas | `{es: "Mi App", en: "My App"}` |
| `description` | Object | SÍ | Descripción breve (HTML permitido) | `{es: "<strong>App web</strong>...", en: "..."}` |
| `explanation` | Object | NO | Descripción extendida para modal | `{es: "Detalles...", en: "Details..."}` |
| `tech` | Array | SÍ | Lista de tecnologías/skills | `["React", "Node", "MongoDB"]` |
| `link` | String/null | NO | URL del código (GitHub) | `"https://github.com/user/repo"` |
| `demo` | String/null | NO | URL de demo en vivo | `"https://demo.miapp.com"` |
| `web` | String/null | NO | URL del sitio web | `"https://www.miapp.com"` |
| `csv` | String/null | NO | Ruta a archivo descargable | `"/assets/data/archivo.csv"` |
| `featured` | Boolean | SÍ | Aparece como PINNED | `true` o `false` |
| `images` | Array/null | NO | Rutas de imágenes para galería | `["/screenshots/proyecto/img1"]` |

### DESCRIPCIÓN DETALLADA DE PROPIEDADES

#### TITLE (Título)

Aparece como encabezado del proyecto.

```typescript
title: {
  es: "Gestión de Inventario",
  en: "Inventory Management"
}
```

#### DESCRIPTION (Descripción)

Texto que aparece en la tarjeta del proyecto. Soporta HTML.

**Recomendaciones:**
- Usa `<strong>` para destacar palabras clave
- Usa `<br><br>` para separar párrafos
- Máximo recomendado: 150-200 palabras

```typescript
description: {
  es: "<strong>Sistema completo de gestión.</strong><br><br>Aplicación web para administrar inventarios en tiempo real. Incluye reportes, alertas de stock bajo y sincronización multi-tienda. <strong>Dashboard</strong>, <strong>Reportes PDF</strong>, <strong>API REST</strong>.",
  en: "<strong>Complete management system.</strong><br><br>Web application for real-time inventory management. Includes reports, low stock alerts and multi-store synchronization. <strong>Dashboard</strong>, <strong>PDF Reports</strong>, <strong>REST API</strong>."
}
```

#### EXPLANATION (Explicación Extendida)

OPCIONAL. Descripción detallada que aparece en un modal al hacer clic en `[explicación]`.

Úsalo para:
- Proyectos complejos que necesitan más contexto
- Detallar la arquitectura
- Explicar el proceso de desarrollo
- Mostrar métricas de rendimiento

```typescript
explanation: {
  es: "Sistema desarrollado para una cadena de 15 tiendas.<br><br><strong>Problema:</strong><br>• Control manual de inventario<br>• Errores frecuentes en conteo<br>• Sin visibilidad en tiempo real<br><br><strong>Solución:</strong><br>• Sistema centralizado cloud<br>• Sincronización automática<br>• Alertas inteligentes<br><br><strong>Resultados:</strong><br>• 95% reducción de errores<br>• Tiempo de gestión -70%<br>• ROI en 4 meses",
  en: "System developed for a 15-store chain.<br><br><strong>Problem:</strong><br>• Manual inventory control<br>• Frequent counting errors<br>• No real-time visibility<br><br><strong>Solution:</strong><br>• Centralized cloud system<br>• Automatic synchronization<br>• Smart alerts<br><br><strong>Results:</strong><br>• 95% error reduction<br>• -70% management time<br>• ROI in 4 months"
}
```

#### TECH (Tecnologías)

Array de strings con las tecnologías usadas. Se muestran como etiquetas y permiten filtrado.

```typescript
tech: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Redis"]
```

**Recomendaciones:**
- Usa nombres oficiales de tecnologías
- Ordena de más a menos importante
- Máximo recomendado: 6-8 tecnologías
- Para skills no técnicas: `["Project Management", "UX Design"]`

#### LINK (Código fuente)

URL al repositorio de GitHub (o similar). Si es `null`, no aparece el botón `[code]`.

```typescript
link: "https://github.com/usuario/mi-proyecto",
// o
link: null,  // No muestra botón [code]
```

#### DEMO (Demostración en vivo)

URL a una demo funcional del proyecto. Si es `null`, no aparece el botón `[demo]`.

```typescript
demo: "https://mi-proyecto-demo.vercel.app",
// o
demo: null,  // No muestra botón [demo]
```

#### WEB (Sitio web)

URL al sitio web oficial del proyecto. Si es `null`, no aparece el botón `[web]`.

```typescript
web: "https://www.mi-proyecto.com",
// o
web: null,  // No muestra botón [web]
```

#### CSV (Archivo descargable)

Ruta a un archivo CSV (o cualquier archivo descargable). Si es `null`, no aparece el botón `[csv]`.

```typescript
csv: "/assets/datos/metricas.csv",
// o
csv: null,  // No muestra botón [csv]
```

El archivo debe estar en `public/assets/` para ser accesible.

#### FEATURED (Destacado)

Boolean que determina si el proyecto aparece con badge "PINNED" al inicio.

```typescript
featured: true,   // Aparece primero con badge PINNED
// o
featured: false,  // Aparece en orden normal
```

Los proyectos con `featured: true` se muestran antes que los demás.

#### IMAGES (Galería de imágenes)

Array de rutas a imágenes o `null`. Si tiene imágenes, aparece botón `[images]` que abre una galería.

```typescript
images: [
  "/screenshots/mi-proyecto/captura-01",
  "/screenshots/mi-proyecto/captura-02",
  "/screenshots/mi-proyecto/captura-03"
],
// o
images: null,  // No muestra botón [images]
```

**Nota:** Las extensiones (.png, .jpg, etc.) se añaden automáticamente.

### BOTONES DISPONIBLES

Cada proyecto puede mostrar hasta 6 tipos de botones:

| Botón | Propiedad requerida | Descripción |
|-------|---------------------|-------------|
| `[demo]` | `demo: "URL"` | Abre demo en vivo en nueva pestaña |
| `[code]` | `link: "URL"` | Abre repositorio GitHub en nueva pestaña |
| `[web]` | `web: "URL"` | Abre sitio web en nueva pestaña |
| `[images]` | `images: [...]` | Abre galería modal de imágenes |
| `[explicación]` | `explanation: {...}` | Abre modal con descripción extendida |
| `[csv]` | `csv: "ruta"` | Descarga archivo CSV |

### TIPOS DE PROYECTOS (EJEMPLOS)

El archivo `src/data/projects-data.ts` incluye 4 tipos de proyecto de ejemplo:

#### TIPO 1: PROYECTO COMPLETO

**Archivo:** `src/data/projects-data.ts` - **Líneas 144-183**

Muestra TODAS las opciones disponibles:

```typescript
{
  title: { es: "Proyecto Completo Ejemplo", en: "Complete Example Project" },
  description: { es: "...", en: "..." },
  explanation: { es: "...", en: "..." },  // ✓ Tiene explicación
  tech: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
  link: "https://github.com/yourusername/repo-name",      // ✓ [code]
  demo: "https://demo.yourproject.com",                   // ✓ [demo]
  web: "https://www.yourproject.com",                     // ✓ [web]
  csv: "/assets/example-data/sample-data.csv",            // ✓ [csv]
  featured: true,                                          // ✓ PINNED
  images: ["/screenshots/example-project/screenshot-01"]  // ✓ [images]
}
```

Muestra: `[demo] [code] [web] [images] [explicación] [csv]` + badge PINNED

#### TIPO 2: PROYECTO DESTACADO

**Archivo:** `src/data/projects-data.ts` - **Líneas 184-213**

Solo algunas opciones:

```typescript
{
  title: { es: "Proyecto Destacado", en: "Featured Project" },
  description: { es: "...", en: "..." },
  tech: ["Skill 1", "Skill 2", "Skill 3"],
  link: "https://github.com/yourusername/another-repo",  // ✓ [code]
  demo: null,                                             // ✗ Sin demo
  web: "https://www.anotherproject.com",                 // ✓ [web]
  csv: null,                                              // ✗ Sin CSV
  featured: true,                                         // ✓ PINNED
  images: null                                            // ✗ Sin galería
}
```

Muestra: `[code] [web]` + badge PINNED

#### TIPO 3: PROYECTO REGULAR

**Archivo:** `src/data/projects-data.ts` - **Líneas 214-242**

Proyecto básico sin destacar:

```typescript
{
  title: { es: "Proyecto Regular", en: "Regular Project" },
  description: { es: "...", en: "..." },
  tech: ["Skill A", "Skill B"],
  link: "https://github.com/yourusername/project-repo",  // ✓ [code]
  demo: "https://project-demo.com",                      // ✓ [demo]
  web: null,                                              // ✗ Sin web
  csv: null,                                              // ✗ Sin CSV
  featured: false,                                        // ✗ Sin PINNED
  images: null                                            // ✗ Sin galería
}
```

Muestra: `[demo] [code]`

#### TIPO 4: PROYECTO SIMPLE

**Archivo:** `src/data/projects-data.ts` - **Líneas 243-271**

Mínimo necesario:

```typescript
{
  title: { es: "Proyecto Simple", en: "Simple Project" },
  description: { es: "...", en: "..." },
  tech: ["Skill X", "Skill Y", "Skill Z"],
  link: "https://github.com/yourusername/simple-project", // ✓ [code]
  demo: null,                                              // ✗ Todo lo demás null
  web: null,
  csv: null,
  featured: false,                                         // ✗ Sin PINNED
  images: null
}
```

Muestra: `[code]` solamente

### AÑADIR UN NUEVO PROYECTO

**Archivo:** `src/data/projects-data.ts`

1. Abre el archivo `src/data/projects-data.ts`
2. Localiza el array `projectsData` (línea 142)
3. Añade tu proyecto al final, ANTES del cierre `];`

**Ejemplo:**

```typescript
export const projectsData: Project[] = [
  // ... proyectos existentes ...

  // TU NUEVO PROYECTO AQUÍ
  {
    title: {
      es: "Mi Nueva App",
      en: "My New App"
    },
    description: {
      es: "<strong>Aplicación móvil para fitness.</strong><br><br>App que ayuda a usuarios a crear rutinas personalizadas de ejercicio. <strong>Tracking</strong>, <strong>Estadísticas</strong>, <strong>Recordatorios</strong>.",
      en: "<strong>Mobile fitness application.</strong><br><br>App that helps users create personalized exercise routines. <strong>Tracking</strong>, <strong>Statistics</strong>, <strong>Reminders</strong>."
    },
    tech: ["React Native", "Firebase", "Redux"],
    link: "https://github.com/miusuario/fitness-app",
    demo: "https://fitness-app-demo.com",
    web: null,
    csv: null,
    featured: true,
    images: null
  }
]; // ← Cierre del array
```

### ELIMINAR UN PROYECTO

**Archivo:** `src/data/projects-data.ts`

1. Abre el archivo `src/data/projects-data.ts`
2. Localiza el proyecto a eliminar
3. Elimina TODO el objeto, desde `{` hasta `},`

**Antes:**

```typescript
export const projectsData: Project[] = [
  {
    title: { es: "Proyecto 1", en: "Project 1" },
    // ...
  },
  { // ← ELIMINAR DESDE AQUÍ
    title: { es: "Proyecto a Borrar", en: "Project to Delete" },
    // ...
  }, // ← HASTA AQUÍ (incluye la coma)
  {
    title: { es: "Proyecto 3", en: "Project 3" },
    // ...
  }
];
```

**Después:**

```typescript
export const projectsData: Project[] = [
  {
    title: { es: "Proyecto 1", en: "Project 1" },
    // ...
  },
  {
    title: { es: "Proyecto 3", en: "Project 3" },
    // ...
  }
];
```

---

## IMÁGENES Y THUMBNAILS

### FORMATOS SOPORTADOS

El template soporta los siguientes formatos de imagen:

| Formato | Extensión | Uso recomendado |
|---------|-----------|-----------------|
| PNG | `.png` | Screenshots con transparencia, logos |
| JPG/JPEG | `.jpg`, `.jpeg` | Fotografías, capturas de pantalla |
| WebP | `.webp` | Formato moderno, mejor compresión |
| GIF | `.gif` | Animaciones (no recomendado para screenshots) |
| SVG | `.svg` | Logos, iconos vectoriales |

**Recomendación:** Usa WebP para mejor rendimiento, PNG para calidad máxima.

### ESTRUCTURA DE CARPETAS

```
public/
├── screenshots/           # Imágenes full-size de proyectos
│   ├── proyecto-1/
│   │   ├── screenshot-01.png
│   │   ├── screenshot-02.png
│   │   └── screenshot-03.png
│   └── proyecto-2/
│       └── screenshot-01.png
├── thumbnails/           # Miniaturas (generadas manualmente)
│   └── screenshots/
│       ├── proyecto-1/
│       │   ├── screenshot-01_thumb.webp
│       │   ├── screenshot-02_thumb.webp
│       │   └── screenshot-03_thumb.webp
│       └── proyecto-2/
│           └── screenshot-01_thumb.webp
└── assets/              # Otros archivos
    └── example-data/
        └── sample-data.csv
```

### AÑADIR SCREENSHOTS DE UN PROYECTO

#### PASO 1: CREAR CARPETA

Dentro de `public/screenshots/`, crea una carpeta con el nombre de tu proyecto (usa minúsculas y guiones):

```bash
public/screenshots/mi-super-app/
```

#### PASO 2: AÑADIR IMÁGENES

Copia tus screenshots a la carpeta, nombrándolas secuencialmente:

```
mi-super-app/
├── screenshot-01.png
├── screenshot-02.png
├── screenshot-03.png
└── screenshot-04.png
```

**Especificaciones recomendadas:**
- Resolución: 1920x1080 o similar (16:9)
- Peso máximo: 500KB por imagen
- Formato: PNG o WebP
- Nombres: `screenshot-01`, `screenshot-02`, etc. (sin extensión en el código)

#### PASO 3: REFERENCIAR EN PROYECTO

**Archivo:** `src/data/projects-data.ts`

Añade las rutas a tu proyecto:

```typescript
{
  title: { es: "Mi Super App", en: "My Super App" },
  // ... otras propiedades ...
  images: [
    "/screenshots/mi-super-app/screenshot-01",
    "/screenshots/mi-super-app/screenshot-02",
    "/screenshots/mi-super-app/screenshot-03",
    "/screenshots/mi-super-app/screenshot-04"
  ]
}
```

**NOTA:** NO incluyas la extensión (.png, .jpg, etc.) en la ruta. El sistema la añade automáticamente.

### CREAR THUMBNAILS (MINIATURAS)

Los thumbnails son versiones pequeñas de las imágenes que se muestran en la galería para carga más rápida.

#### OPCIÓN 1: HERRAMIENTAS ONLINE

Usa servicios como:
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/
- ImageOptim (Mac): https://imageoptim.com/

**Configuración recomendada:**
- Ancho: 300px
- Calidad: 70-80%
- Formato: WebP

#### OPCIÓN 2: COMANDO (Linux/Mac)

Instala ImageMagick:

```bash
# Mac
brew install imagemagick

# Ubuntu/Debian
sudo apt-get install imagemagick
```

Crea thumbnails automáticamente:

```bash
# Navega a la carpeta del proyecto
cd public/screenshots/mi-super-app/

# Crea thumbnails
for img in *.png; do
  convert "$img" -resize 300x -quality 80 -format webp "../../../public/thumbnails/screenshots/mi-super-app/${img%.png}_thumb.webp"
done
```

#### OPCIÓN 3: SCRIPT NODE.JS

Crea un archivo `generate-thumbnails.js` en la raíz:

```javascript
// generate-thumbnails.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const projectName = 'mi-super-app'; // CAMBIAR
const inputDir = `public/screenshots/${projectName}`;
const outputDir = `public/thumbnails/screenshots/${projectName}`;

// Crear directorio si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Procesar imágenes
fs.readdirSync(inputDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    const input = path.join(inputDir, file);
    const output = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '_thumb.webp'));

    sharp(input)
      .resize(300)
      .webp({ quality: 80 })
      .toFile(output)
      .then(() => console.log(`✓ ${file} -> thumbnail`))
      .catch(err => console.error(`✗ ${file}:`, err));
  }
});
```

Instala dependencia y ejecuta:

```bash
npm install sharp
node generate-thumbnails.js
```

### ESTRUCTURA FINAL

Después de añadir screenshots y thumbnails, deberías tener:

```
public/
├── screenshots/
│   └── mi-super-app/
│       ├── screenshot-01.png   (imagen original)
│       ├── screenshot-02.png
│       └── screenshot-03.png
└── thumbnails/
    └── screenshots/
        └── mi-super-app/
            ├── screenshot-01_thumb.webp   (miniatura)
            ├── screenshot-02_thumb.webp
            └── screenshot-03_thumb.webp
```

### OPTIMIZACIÓN DE IMÁGENES

**Antes de subir imágenes, optimízalas:**

1. **Reducir resolución** si es mayor a 1920x1080
2. **Comprimir** usando herramientas como TinyPNG
3. **Convertir a WebP** para mejor rendimiento
4. **Eliminar metadata** EXIF innecesaria

**Tamaños recomendados:**

| Tipo | Resolución | Peso máximo |
|------|------------|-------------|
| Screenshot full | 1920x1080 | 500 KB |
| Thumbnail | 300px ancho | 50 KB |
| OG Image | 1200x630 | 300 KB |
| Favicon | 32x32 | 10 KB |

---

## SISTEMA DE SKILLS

Las skills (tecnologías) se extraen automáticamente de los proyectos y permiten filtrado.

### CÓMO FUNCIONAN

1. El sistema lee todos los arrays `tech` de tus proyectos
2. Extrae skills únicas
3. Las muestra como botones de filtro
4. Al hacer clic, filtra proyectos que usan esa skill

### AÑADIR SKILLS A UN PROYECTO

**Archivo:** `src/data/projects-data.ts`

```typescript
{
  title: { es: "Mi Proyecto", en: "My Project" },
  tech: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
  // ... resto de propiedades
}
```

### BUENAS PRÁCTICAS

1. **Usa nombres estándar:**
   - ✓ "React"
   - ✗ "react.js" o "React.js"

2. **Sé consistente:**
   - Si usas "Node.js" en un proyecto, úsalo así en TODOS

3. **Ordena por importancia:**
   ```typescript
   tech: ["React", "TypeScript", "Node.js", "PostgreSQL"]
   // Tecnología principal primero
   ```

4. **No excedas 8 skills por proyecto:**
   - Demasiadas skills diluyen el mensaje

5. **Usa mayúsculas correctamente:**
   - ✓ "JavaScript", "TypeScript", "MongoDB"
   - ✗ "javascript", "typescript", "mongodb"

### SKILLS RECOMENDADAS POR CATEGORÍA

**Frontend:**
- React, Vue.js, Angular, Svelte
- TypeScript, JavaScript
- HTML, CSS, Sass, Tailwind CSS
- Next.js, Nuxt.js, Astro

**Backend:**
- Node.js, Express, Fastify
- Python, Django, Flask, FastAPI
- Ruby, Rails
- PHP, Laravel
- Go, Rust

**Bases de datos:**
- PostgreSQL, MySQL, MongoDB
- Redis, Supabase, Firebase
- Prisma, TypeORM

**Cloud/DevOps:**
- AWS, Google Cloud, Azure
- Docker, Kubernetes
- Vercel, Netlify, Render

**Mobile:**
- React Native, Flutter
- Swift, Kotlin
- Expo

### PERSONALIZAR TEXTO DEL FILTRO

**Archivo:** `src/components/Projects.astro`

Busca la línea que contiene "ls -C technologies/":

```astro
<span class="command" data-astro-cid-amng4zvp>ls -C technologies/</span>
```

Puedes cambiar el texto del comando que aparece en el filtro.

---

## COMPONENTES

El template está dividido en componentes reutilizables.

### LISTA DE COMPONENTES

| Componente | Archivo | Descripción |
|------------|---------|-------------|
| Layout | `src/layouts/Layout.astro` | Layout principal con meta tags |
| Hero | `src/components/Hero.astro` | Sección principal con nombre y descripción |
| Projects | `src/components/Projects.astro` | Galería de proyectos con filtros |
| Footer | `src/components/Footer.astro` | Pie de página con contacto y redes |
| ThemeToggle | `src/components/ThemeToggle.astro` | Botón cambio modo claro/oscuro |
| LanguageSwitcher | `src/components/LanguageSwitcher.astro` | Selector de idioma ES/EN |
| ImageGallery | `src/components/ImageGallery.astro` | Modal de galería de imágenes |

### LAYOUT

**Archivo:** `src/layouts/Layout.astro`

Contiene:
- Meta tags (SEO, Open Graph, Twitter)
- Links de idiomas alternos
- Estructura HTML base
- Importación de estilos globales
- Scripts de Google Analytics (opcional)
- JSON-LD para datos estructurados

**No necesitas modificar este archivo** a menos que quieras cambiar meta tags avanzados.

### HERO COMPONENT

**Archivo:** `src/components/Hero.astro`

Estructura visual de la sección principal. Las traducciones se obtienen de `src/i18n/translations.ts`.

**Líneas importantes:**

- **Archivo:** `src/components/Hero.astro` - **Línea 142:** URL del botón "git clone template"

**Estilos modificables:**

```css
/* Altura mínima del hero */
.hero {
  min-height: 90vh;  /* Cambiar si quieres más/menos altura */
}

/* Velocidad del cursor parpadeante */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
```

### PROJECTS COMPONENT

**Archivo:** `src/components/Projects.astro`

Componente más complejo. Gestiona:
- Lectura de proyectos desde `projects-data.ts`
- Filtrado por tecnologías
- Renderizado de tarjetas
- Modales de galería
- Modales de explicación

**No necesitas modificarlo** salvo que quieras cambiar el diseño.

### FOOTER COMPONENT

**Archivo:** `src/components/Footer.astro`

**Líneas importantes:**

- **Archivo:** `src/components/Footer.astro` - **Línea 82:** Array de redes sociales
- **Archivo:** `src/components/Footer.astro` - **Líneas 517-518:** Email codificado en Base64

**Añadir nueva red social:**

```typescript
const socialLinks = [
  { name: "GitHub", url: "https://github.com/tuusuario" },
  { name: "Dribbble", url: "https://dribbble.com/tuusuario" }, // NUEVA
];
```

### THEME TOGGLE

**Archivo:** `src/components/ThemeToggle.astro`

Botón que cambia entre modo claro y oscuro.

**Posición:**

**Archivo:** `src/components/ThemeToggle.astro` - **Línea 107:**

```css
#theme-toggle {
  position: fixed;
  top: 2rem;    /* Distancia desde arriba */
  right: 7rem;  /* Distancia desde derecha */
}
```

### LANGUAGE SWITCHER

**Archivo:** `src/components/LanguageSwitcher.astro`

Botón que cambia entre ES/EN.

**Posición:**

**Archivo:** `src/components/LanguageSwitcher.astro` - **Línea 234:**

```css
.language-switcher {
  position: fixed;
  top: 2rem;   /* Distancia desde arriba */
  right: 2rem; /* Distancia desde derecha */
}
```

### IMAGE GALLERY

**Archivo:** `src/components/ImageGallery.astro`

Modal que muestra galería de imágenes con:
- Navegación prev/next
- Thumbnails clickeables
- Cierre con X o clic fuera

**No necesitas modificarlo.**

---

## PERSONALIZACIÓN DE ESTILOS

### ARCHIVO DE ESTILOS GLOBALES

**Archivo:** `src/styles/global.css`

### VARIABLES CSS

**Archivo:** `src/styles/global.css`

**Modo claro - Líneas 52-59:**

```css
:root {
  --bg: #ffffff;      /* Color de fondo */
  --text: #000000;    /* Color de texto */
  --accent: #111111;  /* Color de acento */
  --border: #e5e5e5;  /* Color de bordes */
  --mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
}
```

**Modo oscuro - Líneas 74-80:**

```css
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #000000;      /* Fondo oscuro */
    --text: #ffffff;    /* Texto claro */
    --accent: #eeeeee;  /* Acento claro */
    --border: #1a1a1a;  /* Bordes oscuros */
  }
}
```

### CAMBIAR COLORES

**Ejemplo: Tema azul**

```css
:root {
  --bg: #f0f4f8;      /* Fondo azul muy claro */
  --text: #1a202c;    /* Texto azul oscuro */
  --accent: #2c5282;  /* Acento azul */
  --border: #cbd5e0;  /* Borde gris azulado */
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #1a202c;      /* Fondo azul oscuro */
    --text: #f7fafc;    /* Texto casi blanco */
    --accent: #63b3ed;  /* Acento azul claro */
    --border: #2d3748;  /* Borde gris oscuro */
  }
}
```

### CAMBIAR FUENTE

**Archivo:** `src/styles/global.css` - **Línea 57:**

```css
--mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
```

**Opciones populares:**

```css
/* Fuente de sistema */
--mono: ui-monospace, 'SF Mono', 'Monaco', monospace;

/* Fira Code (si la importas) */
--mono: 'Fira Code', monospace;

/* Roboto Mono */
--mono: 'Roboto Mono', monospace;

/* Source Code Pro */
--mono: 'Source Code Pro', monospace;
```

**Para usar fuente personalizada,** añádela en:

**Archivo:** `src/layouts/Layout.astro` - **Línea 238:**

```html
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap" rel="stylesheet" />
```

### TAMAÑOS DE TEXTO

**Archivo:** `src/styles/global.css` - **Líneas 213-251:**

```css
h1 {
  font-size: clamp(2rem, 5vw, 4rem);  /* Min: 2rem, Max: 4rem */
}

h2 {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
}

h3 {
  font-size: 1.25rem;
}
```

### ANIMACIONES

**Archivo:** `src/styles/global.css`

**Velocidad fade-in - Líneas 505-514:**

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);  /* Distancia del movimiento */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### BORDES Y SOMBRAS

**Archivo:** `src/styles/global.css`

El template usa bordes simples. Para añadir sombras, modifica:

```css
.project-card {
  border: 1px solid var(--border);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);  /* NUEVA LÍNEA */
  transition: all 0.3s;
}

.project-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);  /* NUEVA LÍNEA */
}
```

### ESQUINAS REDONDEADAS

**Archivo:** `src/styles/global.css`

Por defecto el template NO usa border-radius (diseño cuadrado). Para añadirlo:

```css
.project-card,
.btn-primary,
.btn-secondary,
.filter-btn {
  border-radius: 8px;  /* AÑADIR */
}
```

---

## DESPLIEGUE

El template genera un sitio estático que puede desplegarse en cualquier servicio de hosting.

### BUILD DE PRODUCCIÓN

```bash
npm run build
```

Esto genera una carpeta `dist/` con:
- HTML estático
- CSS minificado
- JavaScript optimizado
- Imágenes y assets

### PREVISUALIZAR BUILD

```bash
npm run preview
```

Abre el build en `http://localhost:4321` para verificar antes de desplegar.

### VERCEL

1. Crea cuenta en https://vercel.com
2. Conecta tu repositorio GitHub
3. Vercel detecta Astro automáticamente
4. Clic en "Deploy"

**Configuración (si es necesario):**

```
Framework Preset: Astro
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### NETLIFY

#### OPCIÓN A: Drag & Drop

1. Ejecuta `npm run build`
2. Arrastra carpeta `dist/` a https://app.netlify.com/drop

#### OPCIÓN B: GitHub

1. Conecta repositorio en https://app.netlify.com
2. Configuración:

```
Build command: npm run build
Publish directory: dist
```

### GITHUB PAGES

1. Crea archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

2. En Settings > Pages: Source = "GitHub Actions"
3. Push a main y se despliega automáticamente

**IMPORTANTE:** Si tu sitio está en `usuario.github.io/repo`, actualiza:

**Archivo:** `astro.config.mjs`

```javascript
export default defineConfig({
  site: 'https://usuario.github.io',
  base: '/repo',  // AÑADIR ESTA LÍNEA
});
```

### CLOUDFLARE PAGES

1. Conecta repositorio en https://dash.cloudflare.com/pages
2. Configuración:

```
Framework preset: Astro
Build command: npm run build
Build output directory: dist
```

### RENDER

Render ofrece dos opciones de deployment: automático con `render.yaml` o manual. **Recomendamos la opción automática.**

#### OPCIÓN A: Deployment Automático (Recomendado)

El template incluye un archivo `render.yaml` preconfigurado para deployment automático.

1. **Crear cuenta en Render**
   - Ve a https://render.com y crea una cuenta
   - Conecta tu cuenta de GitHub

2. **Crear nuevo Static Site**
   - Click en "New +" → "Static Site"
   - Conecta tu repositorio GitHub
   - Render detectará automáticamente el archivo `render.yaml`

3. **Deploy**
   - Click en "Create Static Site"
   - Render detectará la configuración automáticamente:
     - Build Command: `npm install && npm run build`
     - Publish Directory: `dist`
     - Node Version: 18
   - El deployment inicia automáticamente

4. **Verificar deployment**
   - Render te dará una URL: `https://tu-proyecto.onrender.com`
   - El sitio se desplegará automáticamente con cada push a la rama principal

**Configuración del render.yaml:**

```yaml
services:
  - type: web
    name: astro-686f6c61-template
    runtime: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./dist
    envVars:
      - key: NODE_VERSION
        value: 18
```

#### OPCIÓN B: Deployment Manual

Si prefieres configurar manualmente:

1. **Crear nuevo Static Site**
   - Ve a https://render.com
   - Click en "New +" → "Static Site"
   - Conecta tu repositorio

2. **Configuración manual:**
   ```
   Name: astro-686f6c61-template
   Build Command: npm install && npm run build
   Publish Directory: dist
   ```

3. **Variables de entorno (opcional):**
   ```
   NODE_VERSION: 18
   ```

4. **Deploy**
   - Click en "Create Static Site"
   - Espera a que finalice el build (2-3 minutos)

#### Auto-Deploy con Git

Render automáticamente redespliega cuando:
- Haces push a la rama principal
- Merges un pull request
- Actualizas el repositorio conectado

**Ventajas de Render:**
- Deployment automático con `render.yaml`
- SSL/HTTPS gratis
- CDN global incluido
- Auto-deploy en cada push
- Preview environments para PRs
- 100GB bandwidth gratis/mes
- Headers personalizados (cache)

### CONFIGURACIÓN POST-DESPLIEGUE

Después de desplegar, actualiza:

1. **Archivo:** `astro.config.mjs` - **Línea 6:** Tu dominio real
2. **Archivo:** `src/i18n/translations.ts` - URLs si cambian
3. **Archivo:** `src/layouts/Layout.astro` - **Google Analytics** (si lo usas): Verifica que el tracking ID sea correcto

### DOMINIO PERSONALIZADO

**Vercel:**
1. Settings > Domains
2. Añade tu dominio
3. Configura DNS según instrucciones

**Netlify:**
1. Domain settings > Add custom domain
2. Configura DNS

**Cloudflare Pages:**
1. Custom domains > Set up a domain
2. DNS se configura automáticamente si usas Cloudflare DNS

### VARIABLES DE ENTORNO

Si usas el archivo `.env.example`:

1. Copia a `.env`:
   ```bash
   cp .env.example .env
   ```

2. En tu servicio de hosting, añade las variables en:
   - **Vercel**: Settings > Environment Variables
   - **Netlify**: Site settings > Build & deploy > Environment
   - **Cloudflare**: Settings > Environment variables

---

## ESTRUCTURA DEL PROYECTO

```
portfolio/
├── .git/                    # Control de versiones Git
├── .vscode/                 # Configuración VS Code (opcional)
├── node_modules/            # Dependencias (no editar)
├── public/                  # Archivos estáticos (accesibles directamente)
│   ├── assets/              # Archivos descargables
│   │   └── example-data/
│   ├── screenshots/         # Imágenes full-size de proyectos
│   ├── thumbnails/          # Miniaturas de imágenes
│   ├── favicon.ico          # Icono del sitio
│   ├── favicon.svg          # Icono vectorial
│   └── robots.txt           # Instrucciones para bots
├── src/                     # Código fuente
│   ├── components/          # Componentes reutilizables
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ImageGallery.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── Projects.astro
│   │   └── ThemeToggle.astro
│   ├── data/               # Datos del sitio
│   │   └── projects-data.ts     # IMPORTANTE: Tus proyectos
│   ├── i18n/               # Internacionalización
│   │   └── translations.ts      # IMPORTANTE: Traducciones ES/EN
│   ├── layouts/            # Plantillas de página
│   │   └── Layout.astro         # Layout principal
│   ├── lib/                # Utilidades
│   │   ├── i18n.ts
│   │   └── projects.ts
│   ├── pages/              # Páginas del sitio
│   │   ├── en/             # Versión inglés
│   │   │   └── index.astro
│   │   ├── index.astro     # Página principal (español)
│   │   └── sitemap.xml.ts  # Generador de sitemap
│   └── styles/             # Estilos globales
│       └── global.css      # CSS principal
├── .env.example            # Plantilla variables de entorno
├── .gitignore              # Archivos ignorados por Git
├── astro.config.mjs        # IMPORTANTE: Configuración Astro
├── LICENSE                 # Licencia MIT
├── package.json            # Dependencias y scripts
├── package-lock.json       # Lockfile de dependencias
├── README.md               # Esta guía
├── serve.json              # Configuración servidor preview
└── tsconfig.json           # Configuración TypeScript
```

### ARCHIVOS QUE DEBES MODIFICAR

| Archivo | Qué cambiar | Prioridad |
|---------|-------------|-----------|
| `src/data/projects-data.ts` | Todos tus proyectos | ALTA |
| `src/i18n/translations.ts` | Textos ES/EN | ALTA |
| `src/components/Footer.astro` | Email, redes sociales | ALTA |
| `astro.config.mjs` | Dominio | MEDIA |
| `public/robots.txt` | URL sitemap | MEDIA |
| `src/layouts/Layout.astro` | Meta tags, Analytics | MEDIA |
| `package.json` | Nombre, descripción, autor | BAJA |
| `src/styles/global.css` | Colores, fuentes | OPCIONAL |

### ARCHIVOS QUE NO DEBES MODIFICAR

- `node_modules/` - Dependencias gestionadas por npm
- `package-lock.json` - Lockfile automático
- `.git/` - Control de versiones
- `dist/` - Carpeta de build (se genera automáticamente)
- `src/lib/` - Utilidades del template (salvo que sepas lo que haces)
- Componentes en `src/components/` - Salvo personalización avanzada

---

## TROUBLESHOOTING

### EL SERVIDOR NO INICIA

**Error:** `Port 4321 is in use`

**Solución:**

```bash
# Matar proceso en puerto 4321
lsof -ti:4321 | xargs kill -9   # Mac/Linux
netstat -ano | findstr :4321    # Windows - anota el PID y usa taskkill
```

O cambia el puerto en:

**Archivo:** `package.json`

```json
"dev": "astro dev --port 3000"
```

### IMÁGENES NO SE MUESTRAN

**Problemas comunes:**

1. **Ruta incorrecta:** Verifica que la ruta empiece con `/`
   ```typescript
   images: ["/screenshots/proyecto/img"]  // ✓ Correcto
   images: ["screenshots/proyecto/img"]   // ✗ Incorrecto
   ```

2. **Extensión incluida:** NO incluyas .png, .jpg, etc.
   ```typescript
   images: ["/screenshots/proyecto/img-01"]      // ✓ Correcto
   images: ["/screenshots/proyecto/img-01.png"]  // ✗ Incorrecto
   ```

3. **Archivo no existe:** Verifica que el archivo esté en `public/screenshots/`

### THUMBNAILS NO SE GENERAN

Los thumbnails NO se generan automáticamente. Debes crearlos manualmente usando las opciones en la sección [IMÁGENES Y THUMBNAILS](#imágenes-y-thumbnails).

### TRADUCCIONES NO APARECEN

1. Verifica que hayas modificado AMBOS objetos: `es` y `en`
2. Reinicia el servidor dev (`Ctrl+C` y `npm run dev`)
3. Limpia caché del navegador (Ctrl+Shift+R)

### CAMBIOS NO SE VEN

1. **Reinicia el servidor:**
   ```bash
   # Ctrl+C para detener
   npm run dev  # Reiniciar
   ```

2. **Limpia caché:**
   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```

3. **Hard refresh en navegador:** Ctrl+Shift+R (Cmd+Shift+R en Mac)

### ERROR AL HACER BUILD

**Error:** `Module not found`

**Solución:**

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### PROYECTO NO APARECE

Verifica que:

1. Esté en el array `projectsData` en **Archivo:** `src/data/projects-data.ts`
2. Tenga los campos obligatorios: `title`, `description`, `tech`, `featured`
3. La sintaxis JSON sea correcta (comas, llaves)
4. No haya errores en consola del navegador (F12)

### FILTRO DE SKILLS NO FUNCIONA

1. Verifica que `tech` sea un array: `["Skill1", "Skill2"]`
2. No uses caracteres especiales en nombres de skills
3. Sé consistente con mayúsculas

---

## PREGUNTAS FRECUENTES

### ¿Puedo eliminar el idioma inglés?

Sí, pero requiere modificaciones avanzadas. El template está diseñado para ser bilingüe. Es más fácil mantener ambos idiomas aunque tu audiencia principal sea hispanohablante.

### ¿Cuántos proyectos puedo añadir?

Tantos como quieras. El template es performante incluso con 50+ proyectos.

### ¿Puedo añadir más idiomas?

Sí, pero requiere:
1. Añadir nuevo objeto en `translations.ts`
2. Crear páginas en `src/pages/[nuevo-idioma]/`
3. Actualizar `LanguageSwitcher.astro`

### ¿Puedo usar otro framework?

Este template está construido con Astro. No es compatible con React, Vue, etc. como framework principal (aunque Astro soporta componentes de estos frameworks).

### ¿Cómo añado Google Analytics?

**Archivo:** `src/layouts/Layout.astro` - **Líneas 295-301**

Descomenta el código y reemplaza `G-XXXXXXXXXX` con tu tracking ID.

### ¿Necesito saber TypeScript?

No. Los archivos `.ts` son simples y están comentados. Puedes editarlos sin conocimientos de TypeScript.

### ¿Funciona sin Node.js?

No. Necesitas Node.js para desarrollo. Pero el sitio final es HTML estático y no requiere Node.js en el servidor.

### ¿Puedo venderlo como template?

Sí, bajo licencia MIT puedes usarlo comercialmente. Pero debes mantener el aviso de copyright original.

---

## RECURSOS ADICIONALES

### DOCUMENTACIÓN

- Astro: https://docs.astro.build
- TypeScript: https://www.typescriptlang.org/docs
- Git: https://git-scm.com/doc

### HERRAMIENTAS RECOMENDADAS

- VS Code: https://code.visualstudio.com/
- Extensión Astro: https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode
- Extensión Prettier: https://prettier.io/
- ImageOptim (Mac): https://imageoptim.com/
- TinyPNG: https://tinypng.com/

### INSPIRACIÓN

- Awwwards: https://www.awwwards.com/websites/portfolio/
- Dribbble: https://dribbble.com/tags/portfolio
- Behance: https://www.behance.net/search/projects?search=portfolio

---

## CRÉDITOS

Template creado por [686f6c61](https://github.com/686f6c61)

Licencia: MIT

Versión: 1.0.0

---

**Este README fue creado para ayudarte a personalizar completamente tu portfolio. Si tienes dudas, abre un issue en GitHub.**
