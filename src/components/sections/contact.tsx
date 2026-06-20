import { Container } from '@/components/layout/container';
import { Reveal } from '@/components/ui/reveal';
import { SectionLabel } from '@/components/ui/section-label';
import { SplitText } from '@/components/ui/split-text';
import { site, hasLink } from '@/content/site';

const socialLinks = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { label: 'LinkedIn', value: 'linkedin.com', href: site.linkedin },
  { label: 'GitHub', value: 'github.com', href: site.github },
];

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36">
      <Container>
        <Reveal variant="fade">
          <SectionLabel>~/contact</SectionLabel>
        </Reveal>

        <h2 className="mt-8 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-text">
          <SplitText text={site.contact.heading} by="char" stagger={0.03} />
        </h2>

        <Reveal variant="fade-up" delay={0.15}>
          <p className="mt-6 max-w-md font-body text-lg text-muted">
            {site.contact.subline}
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={0.25}>
          <ul className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-3">
            {socialLinks.map((link) => {
              const isEmail = link.label === 'Email';
              const live = isEmail || hasLink(link.href);
              const href = live ? link.href : '#';
              return (
                <li key={link.label}>
                  <a
                    href={href}
                    {...(!isEmail && live
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="group flex items-center justify-between bg-surface p-6 transition-colors duration-300 hover:bg-surface-2"
                  >
                    <span>
                      <span className="block font-mono text-xs tracking-widest text-muted uppercase">
                        {link.label}
                      </span>
                      <span className="mt-1 block font-body text-base text-text">
                        {link.value}
                      </span>
                    </span>
                    <span className="text-muted transition-colors group-hover:text-accent">
                      ↗
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
