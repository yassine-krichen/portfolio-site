'use client';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import { useRef } from 'react';

import { Container } from '@/components/layout/container';
import { SplitText } from '@/components/ui/split-text';
import { EASE_OUT } from '@/lib/motion';
import { site } from '@/content/site';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  // Parallax: background initials drift up slower than the scroll.
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '38%']);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden border-b border-hairline"
    >
      {/* parallax background element — oversized initials, not a gradient/blob */}
      <motion.div
        aria-hidden
        style={reduceMotion ? undefined : { y: bgY, opacity: bgOpacity }}
        className="pointer-events-none absolute -right-[6vw] top-1/2 -translate-y-1/2 select-none font-display text-[42vw] font-bold leading-none text-surface-2 md:text-[34vw]"
      >
        YK
      </motion.div>

      <Container className="relative">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="mb-8 inline-flex items-center gap-3 border border-hairline bg-surface/60 px-3.5 py-2"
        >
          <span className="relative flex h-2 w-2">
            {!reduceMotion && (
              <span className="absolute inline-flex h-full w-full animate-ping bg-accent opacity-75" />
            )}
            <span className="relative inline-flex h-2 w-2 bg-accent" />
          </span>
          <span className="font-mono text-xs tracking-widest text-muted uppercase">
            Available for new projects
          </span>
        </motion.div>

        <h1 className="max-w-4xl">
          <span className="block font-display text-[clamp(2.75rem,9vw,7rem)] font-bold leading-[0.95] tracking-tight text-text">
            <SplitText text={site.name} by="char" stagger={0.035} />
          </span>
          <span className="mt-3 block font-display text-[clamp(1.25rem,3.4vw,2.25rem)] font-medium tracking-tight text-accent">
            <SplitText text={site.role} by="word" delay={0.5} stagger={0.06} />
          </span>
        </h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.9 }}
          className="mt-8 max-w-xl font-body text-lg text-muted md:text-xl"
        >
          {site.heroLine}
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 1.05 }}
          className="mt-10 flex items-center gap-6"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border border-accent bg-accent px-7 py-3.5 font-mono text-sm font-medium tracking-wide text-accent-ink transition-colors hover:bg-transparent hover:text-accent"
          >
            Let’s work together
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <span className="hidden font-mono text-xs tracking-widest text-muted uppercase sm:inline">
            scroll ↓
          </span>
        </motion.div>
      </Container>
    </section>
  );
}
