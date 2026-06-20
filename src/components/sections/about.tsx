import { Container } from '@/components/layout/container';
import { Reveal } from '@/components/ui/reveal';
import { SectionLabel } from '@/components/ui/section-label';
import { site } from '@/content/site';

export function About() {
  return (
    <section id="about" className="border-b border-hairline py-28 md:py-36">
      <Container>
        <Reveal variant="fade">
          <SectionLabel>~/about</SectionLabel>
        </Reveal>

        <div className="mt-8 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal variant="clip-left" duration={0.85}>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-text md:text-5xl">
                From database schema to the last pixel.
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="space-y-6">
              {site.about.map((paragraph, i) => (
                <Reveal key={i} variant="fade-up" delay={0.1 + i * 0.12}>
                  <p className="font-body text-lg leading-relaxed text-muted">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
