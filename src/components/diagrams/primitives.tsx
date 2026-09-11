import type { ReactNode } from 'react';

/**
 * Primitivas dos diagramas de arquitetura.
 *
 * As cores saem dos tokens do site em vez de valores fixos, para que o
 * desenho acompanhe o tema sem uma segunda versão. O traço é sempre hairline
 * e o texto sempre mono: o diagrama é uma nota técnica, não uma ilustração.
 */

export const stroke = 'var(--color-line-strong)';
export const accent = 'var(--color-accent)';
export const surface = 'var(--color-bg)';

type BoxProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  /** Segunda linha, para a qualificação técnica do bloco. */
  note?: string;
  /** Destaca o bloco onde o modelo age — o resto do desenho é neutro. */
  highlight?: boolean;
  dashed?: boolean;
};

export function Box({ x, y, width, height, label, note, highlight, dashed }: BoxProps) {
  const centerX = x + width / 2;
  const centerY = y + height / 2;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={4}
        fill={surface}
        stroke={highlight ? accent : stroke}
        strokeWidth={1}
        strokeDasharray={dashed ? '3 3' : undefined}
      />
      <text
        x={centerX}
        y={note ? centerY - 4 : centerY + 3.5}
        textAnchor="middle"
        fontSize={10}
        fontFamily="var(--font-mono)"
        fill={highlight ? accent : 'var(--color-ink)'}
      >
        {label}
      </text>
      {note ? (
        <text
          x={centerX}
          y={centerY + 9}
          textAnchor="middle"
          fontSize={8.5}
          fontFamily="var(--font-mono)"
          fill="var(--color-muted)"
        >
          {note}
        </text>
      ) : null}
    </g>
  );
}

type ArrowProps = {
  from: [number, number];
  to: [number, number];
  /** Aresta de ida e volta, para o laço entre modelo e ferramentas. */
  bidirectional?: boolean;
  dashed?: boolean;
};

export function Arrow({ from, to, bidirectional, dashed }: ArrowProps) {
  return (
    <line
      x1={from[0]}
      y1={from[1]}
      x2={to[0]}
      y2={to[1]}
      stroke={stroke}
      strokeWidth={1}
      strokeDasharray={dashed ? '3 3' : undefined}
      markerEnd="url(#arrowhead)"
      markerStart={bidirectional ? 'url(#arrowhead-start)' : undefined}
    />
  );
}

export function Caption({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text x={x} y={y} fontSize={8.5} fontFamily="var(--font-mono)" fill="var(--color-muted)">
      {children}
    </text>
  );
}

type DiagramProps = {
  /** Descrição textual: o SVG é uma imagem para quem usa leitor de tela. */
  title: string;
  viewBox: string;
  children: ReactNode;
};

export function Diagram({ title, viewBox, children }: DiagramProps) {
  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-label={title}
      className="h-auto w-full max-w-[22rem]"
      preserveAspectRatio="xMidYMin meet"
    >
      <defs>
        <marker id="arrowhead" markerWidth={6} markerHeight={6} refX={5.5} refY={3} orient="auto">
          <path d="M0,0.5 L5.5,3 L0,5.5" fill="none" stroke={stroke} strokeWidth={1} />
        </marker>
        <marker
          id="arrowhead-start"
          markerWidth={6}
          markerHeight={6}
          refX={0.5}
          refY={3}
          orient="auto"
        >
          <path d="M6,0.5 L0.5,3 L6,5.5" fill="none" stroke={stroke} strokeWidth={1} />
        </marker>
      </defs>
      {children}
    </svg>
  );
}
