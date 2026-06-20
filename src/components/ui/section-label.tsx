/**
 * Mono "console" eyebrow — the signature structural device. Renders a section's
 * semantic path/status token (e.g. `~/about`) rather than a decorative number.
 */
export function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest text-muted uppercase">
      <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
      {children}
    </span>
  );
}
