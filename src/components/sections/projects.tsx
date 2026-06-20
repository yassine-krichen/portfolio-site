import { Container } from '@/components/layout/container';
import { Reveal } from '@/components/ui/reveal';
import { SectionLabel } from '@/components/ui/section-label';
import { site } from '@/content/site';

export function Projects() {
  return (
    <section id="projects" className="border-b border-hairline py-28 md:py-36">
      <Container>
        <Reveal variant="fade">
          <SectionLabel>~/projects</SectionLabel>
        </Reveal>
        <Reveal variant="fade-up" delay={0.08}>
          <h2 className="mt-8 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-text md:text-5xl">
            Selected work.
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-hairline">
          {site.projects.map((project, i) => {
            const isLive = project.href.startsWith('http');
            return (
              <Reveal
                key={project.name}
                variant="slide-x"
                direction={i % 2 === 0 ? -1 : 1}
                delay={0.04}
                className="group block border-b border-hairline transition-colors duration-300 hover:bg-surface"
              >
                <article className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline md:gap-8">
                  <div className="md:col-span-4">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-text transition-colors group-hover:text-accent">
                      {project.name}
                    </h3>
                    <span className="mt-2 inline-block font-mono text-[0.7rem] tracking-widest text-muted uppercase">
                      {project.client ? 'client delivery' : 'personal build'}
                    </span>
                  </div>

                  <p className="font-body text-base leading-relaxed text-muted md:col-span-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 md:col-span-3 md:justify-end">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="border border-hairline px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                    {isLive ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs tracking-widest text-accent uppercase"
                      >
                        live ↗
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 border border-hairline px-2.5 py-1 font-mono text-xs tracking-widest text-muted uppercase">
                        <span aria-hidden className="text-accent">
                          ●
                        </span>
                        Private
                      </span>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="fade" delay={0.1}>
          <p className="mt-8 font-mono text-xs tracking-wide text-muted">
            <span className="text-accent">▸</span> Live client work shipped to
            production. Source for personal builds kept private — walkthroughs
            available on request.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
