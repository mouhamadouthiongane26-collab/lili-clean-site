export interface CompanyInfo {
  name: string;
  legalName: string;
  city: string;
  region: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
  email: string;
  emailHref: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  responsePromise: string;
  audience: string;
  serviceArea: string;
  serviceAreaLabel: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  excerpt: string;
  intro: string;
  benefits: string[];
  useCases: string[];
  process: string[];
  featured: boolean;
  metaDescription: string;
}

export interface Testimonial {
  name: string;
  company?: string;
  quote: string;
  rating: number;
  note?: string;
  isEditorial?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteSettings {
  navItems: Array<{
    label: string;
    href: string;
  }>;
  footerNote: string;
}
