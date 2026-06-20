'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

import {
  EASE_OUT,
  revealVariants,
  type RevealVariant,
} from '@/lib/motion';

type RevealProps = {
  children: ReactNode;
  variant?: RevealVariant;
  /** seconds */
  delay?: number;
  duration?: number;
  /** direction multiplier for the `slide-x` variant (-1 left, 1 right) */
  direction?: number;
  className?: string;
  as?: 'div' | 'li' | 'section' | 'span';
};

/**
 * Scroll-triggered entrance. Fires once when the element enters the viewport.
 * Collapses to an instant fade when the user prefers reduced motion.
 */
export function Reveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.7,
  direction = -1,
  className,
  as = 'div',
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    return (
      <MotionTag
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      custom={direction}
      variants={revealVariants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
      transition={{ duration, ease: EASE_OUT, delay }}
    >
      {children}
    </MotionTag>
  );
}
