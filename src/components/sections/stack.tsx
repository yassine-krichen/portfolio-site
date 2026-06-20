import { Container } from '@/components/layout/container';
import { Counter } from '@/components/ui/counter';
import { Reveal } from '@/components/ui/reveal';
import { SectionLabel } from '@/components/ui/section-label';
import { StackIcon } from '@/components/ui/stack-icon';
import { site } from '@/content/site';

export function Stack() {
  return (
    <section id="stack" className="border-b border-hairline py-28 md:py-36">
      <Container>
        <Reveal variant="fade">
          <SectionLabel>stack//</SectionLabel>
        </Reveal>

        {/* stats — numbers tick up on entry */}
        <div className="mt-10 grid grid-cols-2 gap-px border border-hairline bg-hairline md:grid-cols-4">
          {site.stats.map((stat) => (
            <div key={stat.label} className="bg-surface p-7 md:p-8">
              <div className="font-display text-5xl font-bold tracking-tight text-text md:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-3 font-mono text-xs tracking-widest text-muted uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* logo row — recognizable marks, no labels */}
        <ul className="mt-px grid grid-cols-3 gap-px border-x border-b border-hairline bg-hairline sm:grid-cols-3 md:grid-cols-9">
          {site.stack.map((item, i) => (
            <Reveal
              key={item.name}
              as="li"
              variant="pop"
              delay={i * 0.05}
              duration={0.5}
              className="flex items-center justify-center bg-surface py-8"
            >
              <StackIcon
                icon={item.icon}
                title={item.name}
                className="h-8 w-8 text-muted transition-colors duration-300 hover:text-accent"
              />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
