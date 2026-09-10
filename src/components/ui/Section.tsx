import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionProps = {
  id: string;
  /** Índice em mono que dá estrutura visual à rolagem. */
  index: string;
  title: string;
  children: ReactNode;
  /** Alterna o fundo para separar blocos sem recorrer a divisórias. */
  subtle?: boolean;
};

export function Section({ id, index, title, children, subtle = false }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={subtle ? 'bg-bg-subtle py-16 md:py-28' : 'py-16 md:py-28'}
    >
      <div className="mx-auto w-full max-w-content px-6">
        <Reveal>
          <div className="mb-10 flex items-baseline gap-4 md:mb-14">
            <span aria-hidden="true" className="font-mono text-xs text-muted">
              {index}
            </span>
            <h2 id={`${id}-title`} className="text-3xl md:text-4xl">
              {title}
            </h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
