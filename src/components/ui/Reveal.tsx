import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Posição do item na lista, para escalonar a entrada em 40ms. */
  index?: number;
  className?: string;
};

/**
 * Entrada discreta: fade + 8px, uma vez, ao entrar na viewport.
 * Usa `m` sob LazyMotion para não carregar o bundle completo do Framer Motion
 * por causa de uma única animação.
 */
export function Reveal({ children, index = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className={className}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-64px' }}
        transition={{ duration: 0.24, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
