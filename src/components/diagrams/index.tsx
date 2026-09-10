import type { ComponentType } from 'react';
import { AssistantDiagram } from './AssistantDiagram';
import { HarnessDiagram } from './HarnessDiagram';
import { CrmDiagram } from './CrmDiagram';
import { SaasDiagram } from './SaasDiagram';

/** Liga cada projeto ao seu desenho pelo id, sem conteúdo dentro do markup. */
export const diagrams: Record<string, ComponentType<{ title: string }>> = {
  'agentic-whatsapp-assistant': AssistantDiagram,
  'multi-agent-harness': HarnessDiagram,
  'agentic-operations-crm': CrmDiagram,
  'ai-legal-saas': SaasDiagram,
};
