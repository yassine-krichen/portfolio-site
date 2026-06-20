import { Container } from './container';

/** Thin persistent bar — keeps the wordmark and a contact jump always reachable. */
export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline/70 bg-bg/80 backdrop-blur-sm">
      <Container className="flex h-14 items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-widest text-text"
        >
          YK<span className="text-accent">.</span>
        </a>
        <a
          href="#contact"
          className="font-mono text-xs tracking-widest text-muted uppercase transition-colors hover:text-accent"
        >
          contact ↗
        </a>
      </Container>
    </header>
  );
}
