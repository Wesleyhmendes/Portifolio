import { Arrow, Box, Caption, Diagram, stroke } from './primitives';

/**
 * Hexagonal: o domínio no centro, adaptadores nas bordas. O desenho existe
 * para deixar explícito que agentes e analistas entram pela mesma porta.
 */
export function CrmDiagram({ title }: { title: string }) {
  return (
    <Diagram title={title} viewBox="0 0 340 284">
      <Box x={22} y={0} width={130} height={28} label="analysts" />
      <Box x={188} y={0} width={130} height={28} label="agents" />
      <Arrow from={[87, 28]} to={[87, 48]} />
      <Arrow from={[253, 28]} to={[253, 48]} />

      <Box x={40} y={48} width={260} height={34} label="OpenAPI" note="published contract" />
      <Arrow from={[170, 82]} to={[170, 100]} />

      <Box x={40} y={100} width={260} height={28} label="FastAPI adapters" />
      <Arrow from={[170, 128]} to={[170, 146]} />

      {/* núcleo de domínio: o hexágono é o ponto do desenho */}
      <path
        d="M170,146 L232,176 L232,214 L170,244 L108,214 L108,176 Z"
        fill="none"
        stroke={stroke}
        strokeWidth={1}
      />
      <text
        x={170}
        y={192}
        textAnchor="middle"
        fontSize={10}
        fontFamily="var(--font-mono)"
        fill="var(--color-ink)"
      >
        domain
      </text>
      <text
        x={170}
        y={206}
        textAnchor="middle"
        fontSize={8.5}
        fontFamily="var(--font-mono)"
        fill="var(--color-muted)"
      >
        identity merge
      </text>

      <Caption x={0} y={168}>
        ports
      </Caption>
      <Arrow from={[108, 195]} to={[86, 195]} />
      <Arrow from={[232, 195]} to={[254, 195]} />
      <Box x={0} y={180} width={86} height={30} label="authz" note="per feature" />
      <Box x={254} y={180} width={86} height={30} label="Mongo" />

      <Arrow from={[170, 244]} to={[170, 256]} />
      <Box x={60} y={256} width={220} height={28} label="migrations" note="versioned · audited" />
    </Diagram>
  );
}
