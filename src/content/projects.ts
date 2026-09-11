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
      en: 'A converse loop on Amazon Bedrock where the model calls eleven action tools and a RAG sub-agent, reading from a knowledge base I built and publish through its own pipeline. The reliability lives in the code around the model. Deterministic gates resolve before it runs, guardrails enforce consent and PII masking, and every figure in a reply is rendered by code, so the model never writes a number.',
      pt: 'Um loop de conversa sobre o Amazon Bedrock em que o modelo chama onze ferramentas de ação e um sub-agente de RAG, que lê uma base de conhecimento que construí e publico por um pipeline próprio. A confiabilidade mora no código em volta do modelo. As travas determinísticas resolvem antes de ele rodar, os guardrails aplicam consentimento e mascaramento de PII, e todo número de uma resposta é renderizado por código, então o modelo nunca escreve um valor.',
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
      en: 'A planner turns the work queue into a dependency graph and dispatches everything unblocked at once. Implementer agents run per service against versioned ADRs, reviewer agents send corrections back, a contract reviewer checks the boundaries between services, and a publisher opens the PR. A person defines the task at one end and validates the delivery at the other.',
      pt: 'Um planejador transforma a fila de trabalho num grafo de dependências e dispara de uma vez tudo que está desbloqueado. Agentes implementadores rodam por serviço contra ADRs versionadas, agentes revisores devolvem correções, um revisor de contrato checa as fronteiras entre serviços e um publicador abre o PR. Uma pessoa define a tarefa numa ponta e valida a entrega na outra.',
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
      en: 'I built the front end and the API from scratch: a hexagonal API that publishes its OpenAPI contract, versioned migrations with an audit trail, authorization per feature, and a domain model that merges duplicate identities without arbitration. Agents work the pipeline alongside human analysts.',
      pt: 'Construí o front-end e a API do zero: uma API hexagonal que publica seu contrato OpenAPI, migrações versionadas com trilha de auditoria, autorização por funcionalidade e um modelo de domínio que funde identidades duplicadas sem arbitragem. Agentes trabalham o funil ao lado dos analistas humanos.',
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
      en: 'I built this alone, from nothing to a product that bills customers. It is multi-tenant, and the isolation between tenants is covered by tests. Stripe handles the subscriptions, the usage limits and the dunning, quotas and per-operation ceilings keep the AI cost in check, and the data-protection work was done before the first customer signed up.',
      pt: 'Construí sozinho, do zero até um produto que fatura. É multi-tenant, e o isolamento entre tenants é coberto por testes. O Stripe cuida das assinaturas, dos limites de uso e da régua de inadimplência; cotas e tetos por operação seguram o custo de IA; e a conformidade com proteção de dados ficou pronta antes de o primeiro cliente entrar.',
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
