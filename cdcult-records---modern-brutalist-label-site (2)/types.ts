
export type Language = 'ru' | 'en';

export interface Translation {
  heroTitle: string;
  heroTagline: string;
  btnArtist: string;
  btnReleases: string;
  aboutTitle: string;
  aboutText: string;
  features: string[];
  statsTitle: string;
  statLabel1: string;
  statLabel2: string;
  statLabel3: string;
  howTitle: string;
  steps: { num: string; text: string; link?: string; linkText?: string }[];
  faqTitle: string;
  faqItems: { q: string; a: string }[];
  readyTitle: string;
  readyDesc: string;
  cabinet: string;
  footerText: string;
  navInfo: string;
  navAbout: string;
  navFaq: string;
  navCabinet: string;
  navContact: string;
}

export interface Translations {
  ru: Translation;
  en: Translation;
}
