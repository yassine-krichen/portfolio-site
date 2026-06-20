import { Container } from './container';
import { site } from '@/content/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline py-8">
      <Container className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <span className="font-mono text-xs tracking-widest text-muted">
          {site.name} © {new Date().getFullYear()}
        </span>
        <span className="font-mono text-xs tracking-widest text-muted uppercase">
          Built with Next.js · Remote &amp; async-first
        </span>
      </Container>
    </footer>
  );
}
