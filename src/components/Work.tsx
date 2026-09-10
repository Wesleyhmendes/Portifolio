import { useState } from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { earlierProjects, projects } from '../content/projects';
import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';
import { Tag } from './ui/Tag';
import { ExternalLink } from './ui/ExternalLink';

export function Work() {
  const { t, localize } = useTranslation();
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <Section id="work" title={t('work.title')}>
      <ul className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <li key={project.id}>
            <Reveal index={index}>
              <article className="rounded-md border border-line bg-surface p-6 transition-[border-color,box-shadow] duration-150 hover:border-line-strong hover:shadow-sm md:p-8">
                <p className="font-mono text-xs text-muted">
                  {project.year} · {localize(project.context)}
                </p>
                <h3 className="mt-3 text-2xl">{localize(project.title)}</h3>
                <p className="mt-4 max-w-prose">{localize(project.description)}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Tag>{tag}</Tag>
                    </li>
                  ))}
                </ul>
                {project.link ? (
                  <ExternalLink
                    href={project.link.href}
                    className="mt-6 inline-block text-sm text-accent"
                  >
                    {localize(project.link.label)} →
                  </ExternalLink>
                ) : null}
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal className="mt-12">
        <button
          type="button"
          onClick={() => setShowEarlier((open) => !open)}
          aria-expanded={showEarlier}
          aria-controls="earlier-projects"
          className="rounded-xs font-mono text-xs text-muted transition-colors duration-150 hover:text-ink"
        >
          {showEarlier ? '−' : '+'} {t('work.earlier')}
        </button>
        <div id="earlier-projects" hidden={!showEarlier} className="mt-6">
          <p className="mb-4 text-sm text-muted">{t('work.earlierHint')}</p>
          <ul className="flex flex-col gap-3">
            {earlierProjects.map((project) => (
              <li key={project.id} className="flex flex-wrap items-baseline gap-x-3 text-sm">
                <span className="font-mono text-xs text-muted">{project.year}</span>
                <ExternalLink href={project.href} className="text-ink">
                  {project.title}
                </ExternalLink>
                <span className="text-muted">{localize(project.summary)}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
