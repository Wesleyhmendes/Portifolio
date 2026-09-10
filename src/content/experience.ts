import type { Localized } from './types';

export type Role = {
  id: string;
  title: Localized;
  company: string;
  period: Localized;
  /** Início no formato AAAA-MM; `end` ausente significa cargo atual. */
  start: string;
  end?: string;
  highlights: Localized[];
};

export const experience: Role[] = [
  {
    id: 'liquid-tech-lead',
    title: { en: 'Tech Lead', pt: 'Tech Lead' },
    company: 'Liquid AI',
    period: { en: 'Nov 2025 — Present', pt: 'Nov 2025 — Atual' },
    start: '2025-11',
    highlights: [
      {
        en: 'Own the architecture of the agentic assistant and the operations CRM end to end, from domain model to deploy.',
        pt: 'Respondo pela arquitetura da atendente agêntica e do CRM de operação de ponta a ponta, do modelo de domínio ao deploy.',
      },
      {
        en: 'Introduced versioned ADRs and contract review as the way architectural decisions get made and kept.',
        pt: 'Introduzi ADRs versionadas e revisão de contrato como a forma de tomar e sustentar decisões de arquitetura.',
      },
      {
        en: 'Built the multi-agent harness the team uses to plan, implement and review work in parallel.',
        pt: 'Construí o harness multiagente que o time usa para planejar, implementar e revisar trabalho em paralelo.',
      },
    ],
  },
  {
    id: 'liquid-developer',
    title: { en: 'Software Developer', pt: 'Desenvolvedor de Software' },
    company: 'Liquid AI',
    period: { en: 'Jun 2024 — Nov 2025', pt: 'Jun 2024 — Nov 2025' },
    start: '2024-06',
    end: '2025-11',
    highlights: [
      {
        en: 'Shipped the first production version of the WhatsApp assistant on Amazon Bedrock.',
        pt: 'Entreguei a primeira versão em produção da atendente de WhatsApp sobre Amazon Bedrock.',
      },
      {
        en: 'Moved reliability out of prompts and into code: deterministic gates, guardrails and rendered figures.',
        pt: 'Tirei a confiabilidade dos prompts e coloquei em código: travas determinísticas, guardrails e números renderizados.',
      },
      {
        en: 'Worked across Python services on AWS Lambda and React front ends.',
        pt: 'Atuei em serviços Python sobre AWS Lambda e front-ends em React.',
      },
    ],
  },
  {
    id: '4tuna-intern',
    title: { en: 'Full Stack Developer (intern)', pt: 'Desenvolvedor Full Stack (estágio)' },
    company: '4tuna Studio',
    period: { en: 'May 2024 — Jun 2024', pt: 'Mai 2024 — Jun 2024' },
    start: '2024-05',
    end: '2024-06',
    highlights: [
      {
        en: 'Built features across a PHP/Laravel back end and a React front end.',
        pt: 'Construí funcionalidades entre um back-end PHP/Laravel e um front-end React.',
      },
    ],
  },
];
