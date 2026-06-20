import type { Variants } from 'motion/react';

/** Anticipation curve for entries (per design brief — no bounce anywhere). */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
/** Ease-in for exits. */
export const EASE_IN = [0.4, 0, 1, 1] as const;

export type RevealVariant =
  | 'fade-up'
  | 'clip-left'
  | 'rise-rotate'
  | 'fade'
  | 'pop'
  | 'slide-x';

/**
 * Distinct entrance variants so no two consecutive sections animate alike.
 * `slide-x` reads its direction from a CSS var fallback via custom prop.
 */
export const revealVariants: Record<RevealVariant, Variants> = {
  'fade-up': {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  'clip-left': {
    hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
    visible: { clipPath: 'inset(0 0% 0 0)', opacity: 1 },
  },
  'rise-rotate': {
    hidden: { opacity: 0, y: 44, rotate: -2 },
    visible: { opacity: 1, y: 0, rotate: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  pop: {
    hidden: { opacity: 0, scale: 0.62 },
    visible: { opacity: 1, scale: 1 },
  },
  'slide-x': {
    hidden: (dir: number = -1) => ({ opacity: 0, x: 56 * dir }),
    visible: { opacity: 1, x: 0 },
  },
};
