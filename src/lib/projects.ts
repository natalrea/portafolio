/**
 * MÓDULO DE GESTIÓN DE PROYECTOS
 * ===============================
 *
 * Este módulo proporciona funciones de utilidad para trabajar con
 * los proyectos del portfolio. Actúa como capa de abstracción sobre
 * los datos crudos definidos en projects-data.ts
 *
 * FUNCIONALIDAD:
 * - Obtener todos los proyectos
 * - Filtrar proyectos destacados (PINNED)
 * - Filtrar por tecnología/skill
 * - Buscar proyectos específicos
 * - Obtener proyectos con características especiales (imágenes, explicación)
 *
 * USO EN COMPONENTES:
 * ```astro
 * ---
 * import { getAllProjects, getFeaturedProjects } from '../lib/projects';
 * const projects = getAllProjects();
 * const featured = getFeaturedProjects();
 * ---
 * ```
 */

import { projectsData, type Project } from '../data/projects-data.js';

/**
 * FUNCIÓN: getAllProjects
 * -----------------------
 * Obtiene todos los proyectos del portfolio sin filtros
 *
 * RETORNA:
 * @returns {Project[]} Array completo de proyectos
 *
 * EJEMPLO:
 * ```typescript
 * const projects = getAllProjects();
 * console.log(projects.length); // 4 (proyectos de ejemplo)
 * ```
 */
export function getAllProjects(): Project[] {
  return projectsData;
}

/**
 * FUNCIÓN: getFeaturedProjects
 * ----------------------------
 * Obtiene solo los proyectos marcados como destacados (featured: true)
 * Estos proyectos aparecen con el badge "PINNED" en la interfaz
 *
 * RETORNA:
 * @returns {Project[]} Array de proyectos destacados
 *
 * EJEMPLO:
 * ```typescript
 * const featured = getFeaturedProjects();
 * // Retorna solo proyectos con featured: true
 * ```
 */
export function getFeaturedProjects(): Project[] {
  return projectsData.filter(project => project.featured);
}

/**
 * FUNCIÓN: getProjectsByCategory
 * -------------------------------
 * Filtra proyectos por tecnología/skill
 * Búsqueda case-insensitive y parcial (permite coincidencias parciales)
 *
 * PARÁMETROS:
 * @param category - Nombre de la tecnología a buscar (ej: "React", "Node")
 *
 * RETORNA:
 * @returns {Project[]} Array de proyectos que usan esa tecnología
 *
 * EJEMPLO:
 * ```typescript
 * const reactProjects = getProjectsByCategory('React');
 * const nodeProjects = getProjectsByCategory('node'); // Case-insensitive
 * ```
 *
 * NOTA: Busca en el array 'tech' de cada proyecto
 */
export function getProjectsByCategory(category: string): Project[] {
  return projectsData.filter(project =>
    project.tech.some(tech => tech.toLowerCase().includes(category.toLowerCase()))
  );
}

/**
 * FUNCIÓN: getProjectByTitle
 * ---------------------------
 * Busca un proyecto específico por su título
 * Búsqueda exacta (no case-insensitive)
 *
 * PARÁMETROS:
 * @param title - Título exacto del proyecto a buscar
 *
 * RETORNA:
 * @returns {Project | undefined} Proyecto encontrado o undefined
 *
 * EJEMPLO:
 * ```typescript
 * const project = getProjectByTitle('Mi Proyecto');
 * if (project) {
 *   console.log(project.description);
 * }
 * ```
 */
export function getProjectByTitle(title: string): Project | undefined {
  return projectsData.find(project => project.title === title);
}

/**
 * FUNCIÓN: getProjectsWithImages
 * -------------------------------
 * Obtiene solo proyectos que tienen galería de imágenes
 * Útil para mostrar proyectos con screenshots disponibles
 *
 * RETORNA:
 * @returns {Project[]} Array de proyectos con imágenes
 *
 * EJEMPLO:
 * ```typescript
 * const projectsWithGallery = getProjectsWithImages();
 * // Retorna proyectos donde images !== null y images.length > 0
 * ```
 *
 * NOTA: Filtra proyectos con propiedad 'images' no vacía
 */
export function getProjectsWithImages(): Project[] {
  return projectsData.filter(project => project.images && project.images.length > 0);
}

/**
 * FUNCIÓN: getProjectsWithExplanation
 * ------------------------------------
 * Obtiene proyectos que tienen explicación extendida
 * Estos proyectos muestran un botón [explicación] que abre un modal
 *
 * RETORNA:
 * @returns {Project[]} Array de proyectos con explicación
 *
 * EJEMPLO:
 * ```typescript
 * const detailedProjects = getProjectsWithExplanation();
 * // Retorna proyectos con propiedad 'explanation' definida
 * ```
 *
 * NOTA: Útil para identificar proyectos con documentación adicional
 */
export function getProjectsWithExplanation(): Project[] {
  return projectsData.filter(project => project.explanation);
}
