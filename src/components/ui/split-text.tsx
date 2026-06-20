'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';

import { EASE_OUT } from '@/lib/motion';

type SplitTextProps = {
  text: string;
  by?: 'word' | 'char';
  className?: string;
  delay?: number;
  stagger?: number;
};

const container = (delay: number, stagger: number): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const item: Variants = {
  hidden: { y: '110%' },
  visible: { y: '0%', transition: { duration: 0.7, ease: EASE_OUT } },
};

/**
 * Heading reveal that splits text into words or characters and rises each unit
 * out of an overflow-hidden mask, staggered. Custom Framer variants — no library.
 * The hero name and contact heading use this as a deliberate bookend pair.
 */
export function SplitText({
  text,
  by = 'word',
  className,
  delay = 0,
  stagger = 0.045,
}: SplitTextProps) {
  const reduceMotion = useReducedMotion();
  const units = by === 'char' ? [...text] : text.split(' ');

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={className}
      style={{ display: 'inline-block' }}
      variants={container(delay, stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      aria-label={text}
    >
      {units.map((unit, i) => (
        <span
          key={`${unit}-${i}`}
          aria-hidden
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'top',
          }}
        >
          <motion.span variants={item} style={{ display: 'inline-block' }}>
            {unit === ' ' ? ' ' : unit}
            {by === 'word' && i < units.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
