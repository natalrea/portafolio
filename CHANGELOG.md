# Changelog

All notable changes to the Astro 686F6C61 Portfolio Template will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2025-01-07

### Initial Release

First stable release of the Astro 686F6C61 Portfolio Template - A minimalist tech portfolio with terminal-inspired design.

---

### Features

#### Design & UI
- **Terminal-inspired aesthetic** with monospace fonts (JetBrains Mono)
- **Minimalist design** with clean lines and focus on content
- **Automatic dark/light mode** based on system preferences
- **Manual theme toggle** button (floating, top-right)
- **Smooth animations** with fade-in effects and transitions
- **Blinking cursor** animation in hero section
- **Responsive mobile-first design** for all screen sizes
- **Custom scrollbar** styling for modern browsers

#### Internationalization (i18n)
- **Complete bilingual support** (Spanish/English)
- **Language switcher** component (floating, top-right)
- **Automatic language detection** based on browser settings
- **Separate pages** for each language (`/` for Spanish, `/en` for English)
- **Centralized translation system** in `src/i18n/translations.ts`
- **SEO hreflang tags** for proper language indexing

#### Project Showcase System
- **Dynamic project cards** with flexible configuration
- **Four project types** (Complete, Featured, Regular, Simple)
- **Featured projects** with PINNED badge
- **Technology filtering** system with terminal-style UI
- **Multiple link types** per project:
  - `[demo]` - Live demo links
  - `[code]` - GitHub repository links
  - `[web]` - Official website links
  - `[images]` - Image gallery modal
  - `[explanation]` - Extended description modal
  - `[csv]` - Downloadable data files
- **Tech stack tags** with automatic skill extraction
- **Responsive grid layout** (auto-fit, 1-3 columns)
- **Project metadata** support (title, description, explanation)
- **HTML support** in descriptions for rich formatting

#### Image Gallery System
- **Lightbox modal** for project screenshots
- **Navigation controls** (previous/next)
- **Thumbnail previews** with automatic loading
- **Keyboard navigation** (arrow keys, ESC to close)
- **Touch-friendly** mobile interface
- **Image optimization** with WebP support
- **Lazy loading** for performance

#### Security & Privacy
- **Base64 email encoding** to prevent spam bots
- **No external dependencies** for core functionality
- **Static site generation** (no server-side vulnerabilities)
- **Content Security Policy** ready

#### SEO & Performance
- **Complete meta tags** (title, description)
- **Open Graph** tags for social media sharing
- **Twitter Card** support
- **JSON-LD structured data** for rich snippets
- **Automatic sitemap** generation (`sitemap.xml`)
- **Robots.txt** configuration
- **Canonical URLs** for duplicate content prevention
- **Hreflang tags** for multilingual SEO
- **Static site generation (SSG)** for maximum performance
- **CSS minification** with Terser
- **Inline stylesheets** optimization
- **Cache headers** configuration (Render deployment)

#### Components

##### Hero Section
- Terminal greeting (`$ whoami`)
- Main title with blinking cursor
- Professional subtitle
- Description with HTML support
- Call-to-action buttons
- Template repository link

##### Projects Section
- Technology filter with terminal UI (`$ ls -C technologies/`)
- Project grid with auto-layout
- Project cards with hover effects
- Modals for images and explanations
- Focus trap for accessibility

##### Footer Section
- Contact section with terminal prompt
- Social media links (configurable)
- Base64 encoded email reveal
- Copyright with dynamic year
- System status indicator

##### Navigation Components
- Theme toggle (light/dark mode)
- Language switcher (ES/EN)
- Fixed positioning for easy access

#### Developer Experience
- **TypeScript** support with type definitions
- **Component-based architecture** with Astro
- **Centralized data management**:
  - `src/data/projects-data.ts` - Project data
  - `src/i18n/translations.ts` - All translations
- **Extensive code documentation** in Spanish
- **Modular CSS** with global variables
- **Hot Module Replacement (HMR)** in development
- **Fast builds** with Astro 5.x

#### Deployment Support
- **Vercel** - One-click deployment
- **Netlify** - Drag & drop or Git integration
- **GitHub Pages** - Workflow included
- **Cloudflare Pages** - Auto-detection
- **Render** - Automatic with `render.yaml` (recommended)
  - Pre-configured deployment file
  - Automatic builds on push
  - CDN and SSL included
  - Custom headers for caching

#### Documentation
- **Comprehensive README.md** (Spanish, 2000+ lines)
- **Complete INSTRUCTIONS.md** (English translation)
- **Inline code comments** throughout the codebase
- **Example projects** with all features demonstrated
- **Troubleshooting section** with common issues
- **FAQ section** for quick answers
- **Step-by-step guides** for customization

#### Customization Options
- **CSS variables** for colors and fonts
- **Theme switching** (light/dark)
- **Configurable social links**
- **Custom favicon** support (ICO, SVG)
- **Google Analytics** integration (optional)
- **Modular component structure**

#### Accessibility
- **Semantic HTML** elements
- **ARIA labels** on interactive elements
- **Keyboard navigation** support
- **Focus indicators** for keyboard users
- **Focus trap** in modals
- **Reduced motion** support for animations
- **Screen reader** friendly

---

### File Structure

```
portfolio/
├── public/                    # Static assets
│   ├── assets/
│   │   └── example-data/     # Example CSV files
│   ├── screenshots/          # Project screenshots
│   ├── thumbnails/           # Optimized thumbnails
│   ├── favicon.ico           # Site favicon
│   ├── favicon.svg           # Vector favicon
│   ├── og-image.jpg          # Open Graph image
│   └── robots.txt            # SEO configuration
├── src/
│   ├── components/           # Reusable components
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ImageGallery.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── Projects.astro
│   │   └── ThemeToggle.astro
│   ├── data/
│   │   └── projects-data.ts  # Project definitions
│   ├── i18n/
│   │   └── translations.ts   # All translations
│   ├── layouts/
│   │   └── Layout.astro      # Main layout
│   ├── lib/                  # Utility functions
│   ├── pages/
│   │   ├── en/              # English pages
│   │   ├── index.astro      # Spanish home
│   │   └── sitemap.xml.ts   # Sitemap generator
│   └── styles/
│       └── global.css        # Global styles
├── theme-assets/             # Template screenshots
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore rules
├── astro.config.mjs          # Astro configuration
├── CHANGELOG.md              # This file
├── INSTRUCTIONS.md           # English documentation
├── LICENSE                   # MIT License
├── package.json              # Dependencies
├── README.md                 # Spanish documentation
├── render.yaml               # Render deployment config
└── tsconfig.json             # TypeScript config
```

---

### Technical Stack

- **Framework**: Astro 5.15.3
- **Language**: TypeScript
- **Styling**: CSS with custom properties
- **Fonts**: JetBrains Mono (Google Fonts)
- **Icons**: Text-based terminal symbols
- **Build Tool**: Vite (included in Astro)
- **Minification**: Terser
- **Node Version**: 18+

---

### Design System

#### Colors
- **Light mode**: White background, black text
- **Dark mode**: Black background, white text
- **Accent**: Near-black (#111) / Near-white (#eee)
- **Borders**: Light gray (#e5e5e5) / Dark gray (#1a1a1a)

#### Typography
- **Headings**: Responsive with `clamp()`
- **Body**: 16px base, 1.6 line-height
- **Monospace**: JetBrains Mono, Fira Code, Courier New

#### Spacing
- **Sections**: 4rem vertical padding
- **Container**: 1200px max-width, 2rem horizontal padding
- **Grid**: 2rem gap between items

---

### Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

### Performance Metrics

- **Lighthouse Score**: 100/100 (Performance)
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Bundle Size**: ~50KB (gzipped)
- **Build Time**: < 30s

---

### License

MIT License - See [LICENSE](LICENSE) file for details

---

### Author

Created by [686f6c61](https://github.com/686f6c61)

---

### Acknowledgments

- Astro team for the amazing framework
- Google Fonts for JetBrains Mono
- Open source community for inspiration
