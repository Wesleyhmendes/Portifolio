import type { Localized } from './types';

export type Project = {
  id: string;
  year: string;
  context: Localized;
  title: Localized;
  description: Localized;
  tags: string[];
  /** Descrição do diagrama para quem não o enxerga. */
  diagramTitle: Localized;
  link?: { label: Localized; href: string };
};

export const projects: Project[] = [
  {
    id: 'agentic-whatsapp-assistant',
    year: '2026',
    context: { en: 'Liquid AI', pt: 'Liquid AI' },
    title: {
      en: 'Agentic WhatsApp assistant',
      pt: 'Atendente agêntica no WhatsApp',
    },
    description: {
      en: 'A tool-calling converse-loop on Amazon Bedrock with eleven action tools and a RAG sub-agent over a knowledge base I built and publish through its own pipeline. Reliability is structural rather than prompted: deterministic gates resolve before the model runs, guardrails enforce consent and PII masking in code, and every figure is rendered in code — the model never writes a number.',
      pt: 'Um loop de conversa com tool calling sobre Amazon Bedrock, com onze ferramentas de ação e um sub-agente de RAG sobre uma base de conhecimento que construí e publico por um pipeline próprio. A confiabilidade é estrutural, não prompted: travas determinísticas resolvem antes do modelo rodar, guardrails aplicam consentimento e mascaramento de PII em código, e todo número é renderizado em código — o modelo nunca escreve um valor.',
    },
    diagramTitle: {
      en: 'Architecture: WhatsApp input passes deterministic gates, then a converse loop where the Bedrock model exchanges turns with eleven tools and a RAG sub-agent, then guardrails for consent and PII masking, and finally a reply whose figures are rendered in code.',
      pt: 'Arquitetura: a entrada do WhatsApp passa por travas determinísticas, depois por um loop de conversa em que o modelo no Bedrock troca turnos com onze ferramentas e um sub-agente de RAG, depois por guardrails de consentimento e mascaramento de PII, e por fim uma resposta cujos números são renderizados em código.',
    },
    tags: [
      'Amazon Bedrock',
      'Tool calling',
      'RAG',
      'Context engineering',
      'Guardrails',
      'Python',
      'AWS Lambda',
    ],
  },
  {
    id: 'multi-agent-harness',
    year: '2026',
    context: { en: 'Liquid AI', pt: 'Liquid AI' },
    title: {
      en: 'Multi-agent development harness',
      pt: 'Harness multiagente de desenvolvimento',
    },
    description: {
      en: 'A planner lays the work queue out as a dependency graph and dispatches everything unblocked in parallel. Implementer agents run per service against versioned ADRs, reviewer agents send corrections back, a contract reviewer checks service boundaries, and a publisher opens the PR. Humans stay at both ends: defining the task and validating the delivery.',
      pt: 'Um planejador organiza a fila de trabalho como um grafo de dependências e dispara em paralelo tudo que está desbloqueado. Agentes implementadores rodam por serviço contra ADRs versionadas, agentes revisores devolvem correções, um revisor de contrato checa as fronteiras entre serviços e um publicador abre o PR. O humano fica nas duas pontas: definindo a tarefa e validando a entrega.',
    },
    diagramTitle: {
      en: 'Architecture: a human defines the task, a planner turns it into a dependency graph and dispatches parallel lanes of implementer and reviewer agents, then a contract reviewer checks service boundaries and a publisher opens the pull request.',
      pt: 'Arquitetura: um humano define a tarefa, um planejador a transforma em grafo de dependências e dispara trilhas paralelas de agentes implementadores e revisores, depois um revisor de contrato checa as fronteiras entre serviços e um publicador abre o pull request.',
    },
    tags: ['Multi-agent', 'Agent orchestration', 'Graph routing', 'MCP', 'ADRs'],
  },
  {
    id: 'agentic-operations-crm',
    year: '2026',
    context: { en: 'Liquid AI', pt: 'Liquid AI' },
    title: {
      en: 'Agentic operations CRM',
      pt: 'CRM de operação agêntica',
    },
    description: {
      en: 'Front end and API built from scratch: hexagonal architecture, published OpenAPI contract, versioned migrations with an audit trail, per-feature authorization, and a domain model with arbitration-free identity merging. Agents work the pipeline alongside human analysts.',
      pt: 'Front-end e API construídos do zero: arquitetura hexagonal, contrato OpenAPI publicado, migrações versionadas com trilha de auditoria, autorização por funcionalidade e um modelo de domínio com fusão de identidades sem arbitragem. Agentes trabalham o funil ao lado dos analistas humanos.',
    },
    diagramTitle: {
      en: 'Architecture: analysts and agents both enter through a published OpenAPI contract, FastAPI adapters wrap a hexagonal domain core that handles identity merging, with per-feature authorization and MongoDB behind ports, and versioned migrations with an audit trail underneath.',
      pt: 'Arquitetura: analistas e agentes entram pelo mesmo contrato OpenAPI publicado, adaptadores FastAPI envolvem um núcleo de domínio hexagonal que resolve a fusão de identidades, com autorização por funcionalidade e MongoDB atrás das portas, e migrações versionadas com trilha de auditoria embaixo.',
    },
    tags: ['Python', 'FastAPI', 'React', 'Hexagonal architecture', 'OpenAPI', 'MongoDB'],
  },
  {
    id: 'ai-legal-saas',
    year: '2026',
    context: { en: 'Own product', pt: 'Produto próprio' },
    title: {
      en: 'AI legal SaaS',
      pt: 'SaaS jurídico com IA',
    },
    description: {
      en: 'From nothing to a billable product, built solo: multi-tenant with cross-tenant isolation covered by tests, Stripe subscription billing with usage limits and dunning, AI cost governance with quotas and per-operation ceilings, and data-protection compliance shipped before the first customer.',
      pt: 'Do zero a um produto faturável, sozinho: multi-tenant com isolamento entre tenants coberto por testes, cobrança por assinatura no Stripe com limites de uso e régua de inadimplência, governança de custo de IA com cotas e tetos por operação, e conformidade com proteção de dados entregue antes do primeiro cliente.',
    },
    diagramTitle: {
      en: 'Architecture: several tenants share one application behind an isolation boundary covered by tests, with Stripe handling subscription limits and dunning on one side and AI quotas capping cost per operation on the other, PostgreSQL holding per-tenant data, and data-protection compliance underneath.',
      pt: 'Arquitetura: vários tenants compartilham uma aplicação atrás de uma fronteira de isolamento coberta por testes, com o Stripe cuidando de limites de assinatura e inadimplência de um lado e cotas de IA limitando o custo por operação do outro, PostgreSQL guardando os dados por tenant, e conformidade de proteção de dados embaixo.',
    },
    tags: ['Next.js', 'Python', 'PostgreSQL', 'Stripe', 'Multi-tenant', 'LLM'],
  },
];

export type EarlierProject = {
  id: string;
  year: string;
  title: string;
  summary: Localized;
  href: string;
};

/** Projetos de bootcamp: preservados, mas fora da disputa por atenção. */
export const earlierProjects: EarlierProject[] = [
  {
    id: 'byte-for-bite',
    year: '2024',
    title: 'Byte for Bite',
    summary: {
      en: 'Recipe app in React with Context API and RTL coverage.',
      pt: 'App de receitas em React com Context API e cobertura em RTL.',
    },
    href: 'https://github.com/Wesleyhmendes',
  },
  {
    id: 'tfc',
    year: '2023',
    title: 'Trybe Futebol Clube',
    summary: {
      en: 'Football league table API in TypeScript with layered architecture.',
      pt: 'API de tabela de campeonato em TypeScript com arquitetura em camadas.',
    },
    href: 'https://github.com/Wesleyhmendes',
  },
  {
    id: 'igo-ticket',
    year: '2023',
    title: 'Igo Ticket',
    summary: {
      en: 'Event ticketing front end built with a team.',
      pt: 'Front-end de venda de ingressos construído em equipe.',
    },
    href: 'https://github.com/Wesleyhmendes',
  },
  {
    id: 'news-site',
    year: '2023',
    title: 'News site',
    summary: {
      en: 'News reader consuming the public IBGE API.',
      pt: 'Leitor de notícias consumindo a API pública do IBGE.',
    },
    href: 'https://github.com/Wesleyhmendes',
  },
];
