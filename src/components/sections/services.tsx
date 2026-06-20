import { Container } from '@/components/layout/container';
import { Reveal } from '@/components/ui/reveal';
import { SectionLabel } from '@/components/ui/section-label';
import { site } from '@/content/site';

export function Services() {
  return (
    <section id="services" className="border-b border-hairline py-28 md:py-36">
      <Container>
        <Reveal variant="fade">
          <SectionLabel>~/services</SectionLabel>
        </Reveal>
        <Reveal variant="fade-up" delay={0.08}>
          <h2 className="mt-8 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-text md:text-5xl">
            What I build, and how I ship it.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px border border-hairline bg-hairline md:grid-cols-3">
          {site.services.map((service, i) => (
            <Reveal
              key={service.title}
              variant="rise-rotate"
              delay={i * 0.12}
              className="group h-full bg-surface p-8 transition-colors duration-300 hover:bg-surface-2 md:p-10"
            >
              <span className="font-mono text-xs tracking-widest text-accent">
                {service.label}
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-text">
                {service.title}
              </h3>
              <p className="mt-4 font-body text-base leading-relaxed text-muted">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
