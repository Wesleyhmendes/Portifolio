import { useState } from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { earlierProjects, projects } from '../content/projects';
import { diagrams } from './diagrams';
import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';
import { Tag } from './ui/Tag';
import { ExternalLink } from './ui/ExternalLink';

export function Work() {
  const { t, localize } = useTranslation();
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <Section id="work" index="01" title={t('work.title')}>
      <ul className="flex flex-col gap-4">
        {projects.map((project, index) => {
          const Figure = diagrams[project.id];
          return (
            <li key={project.id}>
              <Reveal index={index}>
                <article className="rounded-md border border-line bg-surface p-6 transition-[border-color,box-shadow] duration-150 hover:border-line-strong hover:shadow-sm md:p-8">
                  <div className="grid gap-8 md:grid-cols-[1fr_22rem] md:gap-10">
                    <div>
                      <p className="font-mono text-xs text-muted">
                        {project.year} · {localize(project.context)}
                      </p>
                      <h3 className="mt-3 text-2xl">{localize(project.title)}</h3>
                      <p className="mt-4">{localize(project.description)}</p>
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
                    </div>

                    {Figure ? (
                      <div className="flex justify-center border-t border-line pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-10">
                        <Figure title={localize(project.diagramTitle)} />
                      </div>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
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
