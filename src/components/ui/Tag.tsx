/**
 * Etiqueta técnica: rótulo visual, nunca um controle. Mono, hairline,
 * fundo transparente — badge colorida é assinatura de portfólio júnior.
 */
export function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-xs border border-line-strong/70 px-2 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
