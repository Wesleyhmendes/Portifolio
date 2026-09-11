import { Arrow, Box, Caption, Diagram, stroke } from './primitives';

/**
 * O desenho mostra o que a descrição afirma: paralelismo no meio, humano nas
 * duas pontas. As trilhas são idênticas de propósito — o planejador despacha
 * tudo que está desbloqueado ao mesmo tempo.
 */
export function HarnessDiagram({ title }: { title: string }) {
  const lanes = [22, 132, 242];

  return (
    <Diagram title={title} viewBox="0 0 340 298">
      <Box x={90} y={0} width={160} height={28} label="human" note="defines the task" dashed />
      <Arrow from={[170, 28]} to={[170, 48]} />

      <Box x={90} y={48} width={160} height={34} label="planner" note="dependency graph" />

      <Caption x={0} y={100}>
        parallel
      </Caption>

      {lanes.map((x) => (
        <g key={x}>
          <path
            d={`M170,82 L170,104 L${x + 38},104 L${x + 38},120`}
            fill="none"
            stroke={stroke}
            strokeWidth={1}
            markerEnd="url(#arrowhead)"
          />
          <Box x={x} y={120} width={76} height={34} label="implementer" note="per service" />
          <Arrow from={[x + 38, 154]} to={[x + 38, 174]} />
          <Box x={x} y={174} width={76} height={30} label="reviewer" />
          <path
            d={`M${x + 38},204 L${x + 38},220 L170,220 L170,236`}
            fill="none"
            stroke={stroke}
            strokeWidth={1}
            markerEnd="url(#arrowhead)"
          />
        </g>
      ))}

      <Box x={60} y={236} width={220} height={26} label="contract reviewer" />
      <Arrow from={[170, 262]} to={[170, 272]} />
      <Box x={60} y={272} width={220} height={26} label="publisher" note="opens the PR" dashed />
    </Diagram>
  );
}
