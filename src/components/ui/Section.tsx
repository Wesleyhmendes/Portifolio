import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  /** Alterna o fundo para separar blocos sem recorrer a divisórias. */
  subtle?: boolean;
};

export function Section({ id, title, children, subtle = false }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={subtle ? 'bg-bg-subtle py-16 md:py-28' : 'py-16 md:py-28'}
    >
      <div className="mx-auto w-full max-w-content px-6">
        <Reveal>
          <h2 id={`${id}-title`} className="mb-10 text-3xl md:mb-14 md:text-4xl">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
