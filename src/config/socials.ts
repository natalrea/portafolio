/**
 * CONFIGURACIÓN DE REDES SOCIALES
 * ================================
 * Este archivo define los enlaces visibles en la sección de contacto del portafolio.
 * Se renderizan automáticamente en el footer y en la terminal de contacto.
 *
 * Puedes agregar, eliminar o modificar redes sociales libremente.
 */

/**
 * ARCHIVO: socials.ts
 * ===================
 *
 * Contiene la información de contacto y redes sociales que se usan en el portafolio.
 * Puedes agregar o quitar redes según sea necesario.
 */

/**
 * ARCHIVO: socials.ts
 * ===================
 * Contiene todas las redes sociales y links del portafolio.
 * Cada objeto tiene: nombre, URL y opcionalmente un icono de Iconify.
 */

export interface Social {
  name: string;
  url: string;
  icon?: string;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/reyvictor",
    icon: "mdi:github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/victor-rea-vj?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: "mdi:linkedin"
  },
  {
    name: "Email",
    url: "mailto:reavalenciavictor@gmail.com",
    icon: "mdi:email"
  }
];



