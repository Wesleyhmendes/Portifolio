import { Arrow, Box, Caption, Diagram, stroke } from './primitives';

/**
 * O desenho carrega o que diferencia o produto de um CRUD: a fronteira de
 * isolamento entre tenants e os dois tetos — cobrança e custo de IA. Tudo o
 * que guarda dado por tenant fica dentro da fronteira, inclusive o banco.
 */
export function SaasDiagram({ title }: { title: string }) {
  const tenants = [22, 132, 242];

  return (
    <Diagram title={title} viewBox="0 0 340 306">
      {tenants.map((x, index) => (
        <Box key={x} x={x} y={0} width={76} height={26} label={`tenant ${index + 1}`} />
      ))}

      {tenants.map((x) => (
        <path
          key={x}
          d={`M${x + 38},26 L${x + 38},42 L170,42 L170,92`}
          fill="none"
          stroke={stroke}
          strokeWidth={1}
          markerEnd="url(#arrowhead)"
        />
      ))}

      <rect
        x={8}
        y={56}
        width={324}
        height={216}
        rx={6}
        fill="none"
        stroke={stroke}
        strokeDasharray="3 3"
      />
      <Caption x={18} y={70}>
        isolation boundary
      </Caption>

      <Box x={90} y={92} width={160} height={34} label="application" note="Next.js · Python" />

      <Arrow from={[120, 126]} to={[86, 152]} />
      <Arrow from={[220, 126]} to={[254, 152]} />

      <Box x={22} y={152} width={128} height={36} label="Stripe" note="limits · dunning" />
      <Box x={190} y={152} width={128} height={36} label="AI quotas" note="cost ceiling" />

      <Arrow from={[86, 188]} to={[150, 226]} />
      <Arrow from={[254, 188]} to={[190, 226]} />

      <Box x={90} y={228} width={160} height={32} label="PostgreSQL" note="per-tenant data" />

      <Caption x={18} y={266}>
        covered by tests
      </Caption>

      <Box x={40} y={284} width={260} height={22} label="data protection · day one" dashed />
    </Diagram>
  );
}
