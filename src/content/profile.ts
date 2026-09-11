import type { Localized } from './types';

export const profile = {
  name: 'Wesley Mendes',
  role: 'Tech Lead @ Liquid AI',
  email: 'wesleymendes123321@gmail.com',
  github: 'https://github.com/Wesleyhmendes',
  linkedin: 'https://www.linkedin.com/in/wesley-mendes/',
  repository: 'https://github.com/Wesleyhmendes/Portifolio',
  cv: '/cv-wesley-mendes.pdf',
  photo: '/profile.webp',
  photoLarge: '/profile-large.webp',
  tagline: {
    en: 'I build agentic AI systems that run in production.',
    pt: 'Construo sistemas de IA agênticos que rodam em produção.',
  } satisfies Localized,
};
