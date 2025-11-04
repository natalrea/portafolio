import { projectsData, type Project } from '../data/projects-data.js';

export function getAllProjects(): Project[] {
  return projectsData;
}

export function getFeaturedProjects(): Project[] {
  return projectsData.filter(project => project.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  return projectsData.filter(project => 
    project.tech.some(tech => tech.toLowerCase().includes(category.toLowerCase()))
  );
}

export function getProjectByTitle(title: string): Project | undefined {
  return projectsData.find(project => project.title === title);
}

export function getProjectsWithImages(): Project[] {
  return projectsData.filter(project => project.images && project.images.length > 0);
}

export function getProjectsWithExplanation(): Project[] {
  return projectsData.filter(project => project.explanation);
}