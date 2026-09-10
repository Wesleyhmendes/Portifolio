import type { Localized } from './types';

export type StackGroup = {
  id: string;
  label: Localized;
  items: string[];
};

export const stack: StackGroup[] = [
  {
    id: 'ai',
    label: { en: 'AI', pt: 'IA' },
    items: [
      'Amazon Bedrock',
      'LLMs',
      'RAG',
      'MCP',
      'Tool calling',
      'Multi-agent',
      'Context engineering',
      'Guardrails',
    ],
  },
  {
    id: 'languages',
    label: { en: 'Languages', pt: 'Linguagens' },
    items: ['Python', 'TypeScript', 'Node.js'],
  },
  {
    id: 'server',
    label: { en: 'Server', pt: 'Servidor' },
    items: ['FastAPI', 'REST', 'OpenAPI', 'Hexagonal architecture'],
  },
  {
    id: 'client',
    label: { en: 'Client', pt: 'Cliente' },
    items: ['React', 'Next.js', 'Redux', 'Tailwind'],
  },
  {
    id: 'data',
    label: { en: 'Data', pt: 'Dados' },
    items: ['MongoDB', 'PostgreSQL', 'DynamoDB'],
  },
  {
    id: 'cloud',
    label: { en: 'Cloud', pt: 'Nuvem' },
    items: ['AWS Lambda', 'SQS', 'S3', 'Serverless', 'Docker', 'CI/CD'],
  },
];
