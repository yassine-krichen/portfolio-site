import {
  siNextdotjs,
  siNestjs,
  siFastapi,
  siTypescript,
  siPostgresql,
  siRedis,
  siDocker,
  siPrisma,
  siPython,
  type SimpleIcon,
} from 'simple-icons';

const ICONS: Record<string, SimpleIcon> = {
  siNextdotjs,
  siNestjs,
  siFastapi,
  siTypescript,
  siPostgresql,
  siRedis,
  siDocker,
  siPrisma,
  siPython,
};

type StackIconProps = {
  icon: string;
  title: string;
  className?: string;
};

/** Renders a brand mark from simple-icons path data, tinted via currentColor. */
export function StackIcon({ icon, title, className }: StackIconProps) {
  const data = ICONS[icon];
  if (!data) return null;

  return (
    <svg
      role="img"
      aria-label={title}
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <title>{title}</title>
      <path d={data.path} />
    </svg>
  );
}
