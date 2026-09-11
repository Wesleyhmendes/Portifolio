import { Arrow, Box, Caption, Diagram, stroke } from './primitives';

/**
 * O ponto do desenho é onde a confiabilidade mora: as travas resolvem antes do
 * modelo, os guardrails depois dele, e o número final é renderizado em código.
 */
export function AssistantDiagram({ title }: { title: string }) {
  return (
    <Diagram title={title} viewBox="0 0 340 284">
      <Box x={120} y={0} width={100} height={28} label="WhatsApp" />
      <Arrow from={[170, 28]} to={[170, 48]} />

      <Box x={85} y={48} width={170} height={34} label="deterministic gates" note="resolve first" />
      <Arrow from={[170, 82]} to={[170, 102]} />

      {/* laço de conversa: modelo e ferramentas trocam turnos até a resposta */}
      <rect
        x={8}
        y={102}
        width={324}
        height={82}
        rx={6}
        fill="none"
        stroke={stroke}
        strokeDasharray="3 3"
      />
      <Caption x={18} y={118}>
        converse loop
      </Caption>

      <Box x={22} y={132} width={72} height={36} label="11" note="tools" />
      <Arrow from={[94, 150]} to={[116, 150]} bidirectional />
      <Box x={116} y={132} width={108} height={36} label="Bedrock" note="model" highlight />
      <Arrow from={[224, 150]} to={[246, 150]} bidirectional />
      <Box x={246} y={132} width={72} height={36} label="RAG" note="own KB" />

      <Arrow from={[170, 184]} to={[170, 204]} />
      <Box x={85} y={204} width={170} height={34} label="guardrails" note="consent · PII masking" />

      <Arrow from={[170, 238]} to={[170, 256]} />
      <Box x={85} y={256} width={170} height={28} label="reply" note="figures rendered in code" />
    </Diagram>
  );
}
