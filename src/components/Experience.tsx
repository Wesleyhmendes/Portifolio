import { useState } from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { experience, type Role } from '../content/experience';
import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';

/** Converte AAAA-MM em meses absolutos, para posicionar no eixo do tempo. */
function months(value: string): number {
  const [year, month] = value.split('-').map(Number);
  return year * 12 + (month - 1);
}

function useTimeline(roles: Role[]) {
  const now = new Date();
  const end = now.getFullYear() * 12 + now.getMonth();
  const start = Math.min(...roles.map((role) => months(role.start)));
  const span = Math.max(end - start, 1);

  return (role: Role) => {
    const from = months(role.start);
    const to = role.end ? months(role.end) : end;
    return {
      left: `${((from - start) / span) * 100}%`,
      // um mês em 28 seria invisível: o piso mantém o cargo curto legível
      width: `max(2%, ${((to - from) / span) * 100}%)`,
    };
  };
}

export function Experience() {
  const { t, localize } = useTranslation();
  // Vários cargos podem ficar abertos: quem compara trajetória quer os dois
  // lados à vista.
  const [openIds, setOpenIds] = useState<ReadonlySet<string>>(new Set());
  const barFor = useTimeline(experience);

  const toggle = (id: string) =>
    setOpenIds((current) => {
      const next = new Set(current);
      if (!next.delete(id)) next.add(id);
      return next;
    });

  return (
    <Section id="experience" index="02" title={t('experience.title')} subtle>
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
                    className="flex w-full flex-wrap items-baseline gap-x-4 gap-y-1 rounded-xs pt-5 pb-3 text-left transition-colors duration-150 hover:text-ink"
                  >
                    <span className="text-ink">{localize(role.title)}</span>
                    <span className="text-body">{role.company}</span>
                    <span className="ml-auto font-mono text-xs text-muted">
                      {localize(role.period)}
                    </span>
                  </button>
                </h3>

                {/* eixo do tempo compartilhado: a duração vira leitura de relance */}
                <div aria-hidden="true" className="relative mb-5 h-px w-full bg-line">
                  <span
                    style={barFor(role)}
                    className="absolute -top-px block h-[3px] rounded-full bg-accent"
                  />
                </div>

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
