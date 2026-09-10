import { describe, expect, it } from 'vitest';
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderApp } from './renderApp';
import { projects } from '../content/projects';
import { experience } from '../content/experience';
import { stack } from '../content/stack';
import { profile } from '../content/profile';
import type { Role } from '../content/experience';

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Dois cargos dividem a mesma empresa: o nome acessível precisa do par. */
const roleName = (role: Role) => new RegExp(escapeRegExp(`${role.title.en}, ${role.company}`));

describe('conteúdo', () => {
  it('renderiza cada seção a partir dos arquivos de dados', () => {
    renderApp();

    expect(screen.getByRole('heading', { level: 1, name: profile.name })).toBeInTheDocument();
    expect(screen.getByText(profile.tagline.en)).toBeInTheDocument();

    for (const project of projects) {
      expect(screen.getByRole('heading', { name: project.title.en })).toBeInTheDocument();
    }
    for (const role of experience) {
      const trigger = screen.getByRole('button', { name: roleName(role) });
      // cada cargo é um heading de seção, com o botão como seu conteúdo
      expect(trigger.closest('h3')).not.toBeNull();
    }
    for (const group of stack) {
      expect(screen.getByText(group.items.join(' · '))).toBeInTheDocument();
    }
    expect(screen.getByRole('link', { name: profile.email })).toHaveAttribute(
      'href',
      `mailto:${profile.email}`,
    );
  });

  it('mantém um único h1 na página', () => {
    renderApp();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });
});

describe('idioma', () => {
  it('troca o texto exibido e persiste a escolha', async () => {
    const user = userEvent.setup();
    renderApp();

    expect(screen.getByText(profile.tagline.en)).toBeInTheDocument();

    await user.click(screen.getAllByRole('button', { name: /switch to portuguese/i })[0]);

    expect(screen.getByText(profile.tagline.pt)).toBeInTheDocument();
    expect(screen.queryByText(profile.tagline.en)).not.toBeInTheDocument();
    expect(localStorage.getItem('portfolio:lang')).toBe('pt');
    expect(document.documentElement.lang).toBe('pt');
  });
});

describe('tema', () => {
  it('alterna o atributo na raiz e persiste', async () => {
    const user = userEvent.setup();
    renderApp();

    expect(document.documentElement.dataset.theme).toBe('light');

    await user.click(screen.getAllByRole('button', { name: /dark theme/i })[0]);

    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem('portfolio:theme')).toBe('dark');
  });
});

describe('acessibilidade', () => {
  it('abre todo link externo com rel="noopener noreferrer"', () => {
    renderApp();

    const externalLinks = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('target') === '_blank');

    expect(externalLinks.length).toBeGreaterThan(0);
    for (const link of externalLinks) {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });

  it('não usa botão como etiqueta de tecnologia', () => {
    renderApp();

    const tagLabels = new Set(projects.flatMap((project) => project.tags));
    for (const label of tagLabels) {
      expect(screen.queryByRole('button', { name: label })).not.toBeInTheDocument();
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    }
  });

  it('expande um cargo da experiência pelo teclado', async () => {
    const user = userEvent.setup();
    renderApp();

    const [role] = experience;
    const trigger = screen.getByRole('button', { name: roleName(role) });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    trigger.focus();
    await user.keyboard('{Enter}');

    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    const panel = document.getElementById(`${role.id}-details`) as HTMLElement;
    expect(panel).toBeVisible();
    expect(within(panel).getByText(role.highlights[0].en)).toBeInTheDocument();
  });

  it('mantém o menu mobile controlado por aria-expanded', async () => {
    const user = userEvent.setup();
    renderApp();

    const trigger = screen.getByRole('button', { name: /open menu/i });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await user.click(trigger);
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  });
});
