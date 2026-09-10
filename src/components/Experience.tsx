import { useState } from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { experience } from '../content/experience';
import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';

export function Experience() {
  const { t, localize } = useTranslation();
  // Vários cargos podem ficar abertos: quem compara trajetória quer os dois
  // lados à vista.
  const [openIds, setOpenIds] = useState<ReadonlySet<string>>(new Set());

  const toggle = (id: string) =>
    setOpenIds((current) => {
      const next = new Set(current);
      if (!next.delete(id)) next.add(id);
      return next;
    });

  return (
    <Section id="experience" title={t('experience.title')} subtle>
      <ul className="flex flex-col">
        {experience.map((role, index) => {
          const isOpen = openIds.has(role.id);
          const panelId = `${role.id}-details`;
          // Os campos são spans adjacentes: sem rótulo explícito o leitor de
          // tela anunciaria "Tech LeadLiquid AINov 2025".
          const label = `${localize(role.title)}, ${role.company}, ${localize(role.period)}`;
          return (
            <li key={role.id} className="border-b border-line last:border-b-0">
              <Reveal index={index}>
                <h3 className="text-base font-normal">
                  <button
                    type="button"
                    onClick={() => toggle(role.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    aria-label={label}
                    className="flex w-full flex-wrap items-baseline gap-x-4 gap-y-1 rounded-xs py-5 text-left transition-colors duration-150 hover:text-ink"
                  >
                    <span className="text-ink">{localize(role.title)}</span>
                    <span className="text-body">{role.company}</span>
                    <span className="ml-auto font-mono text-xs text-muted">
                      {localize(role.period)}
                    </span>
                  </button>
                </h3>
                <div id={panelId} hidden={!isOpen} className="pb-6">
                  <ul className="flex max-w-prose list-disc flex-col gap-2 pl-4 text-sm">
                    {role.highlights.map((highlight) => (
                      <li key={highlight.en}>{localize(highlight)}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
