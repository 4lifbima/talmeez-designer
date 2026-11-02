import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

export interface InquiryFormData {
  name: string;
  email: string;
  serviceType: string;
  budget: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function getProjectBySlug(slug: string): Project | undefined {
  if (!slug) return undefined;
  return PORTFOLIO_DATA.projects.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export function getFeaturedProjects(): Project[] {
  return PORTFOLIO_DATA.projects.filter((p) => p.featured);
}

export function getNextAndPrevProject(currentSlug: string): { prev?: Project; next?: Project } {
  const index = PORTFOLIO_DATA.projects.findIndex((p) => p.slug === currentSlug);
  if (index === -1) return {};
  const prev = index > 0 ? PORTFOLIO_DATA.projects[index - 1] : PORTFOLIO_DATA.projects[PORTFOLIO_DATA.projects.length - 1];
  const next = index < PORTFOLIO_DATA.projects.length - 1 ? PORTFOLIO_DATA.projects[index + 1] : PORTFOLIO_DATA.projects[0];
  return { prev, next };
}

export function validateInquiryForm(data: Partial<InquiryFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide a valid name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please provide project details (at least 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
