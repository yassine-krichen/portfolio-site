/**
 * Single source of truth for all site copy and data.
 * Edit social URLs + SITE_URL here before deploy — no code changes needed.
 */

// TODO(user): set to the real production domain once deployed to Vercel.
export const SITE_URL = "https://yassinekrichen.vercel.app";

export type Service = {
  label: string;
  title: string;
  description: string;
};

export type StackItem = {
  /** simple-icons export key, e.g. "siNextdotjs" */
  icon: string;
  name: string;
};

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  /** Replace '#' with a real GitHub/demo URL, or leave for client work. */
  href: string;
  client: boolean;
};

export const site = {
  name: "Yassine Krichen",
  role: "Full-Stack Engineer",
  metaTitle:
    "Yassine Krichen — Full-Stack Engineer | Next.js · NestJS · FastAPI",
  description:
    "Full-stack software engineer building production web apps end-to-end — Next.js front ends, NestJS and FastAPI back ends. Available for freelance projects.",
  heroLine: "I build the products startups actually ship.",
  available: true,

  // Contact — fill the two social URLs after the build (one-file edit).
  email: "krichenyassine22@gmail.com",
  linkedin: "linkedin.com/in/krichenyassine",
  github: "github.com/yassine-krichen",

  about: [
    "I’m a final-year software engineering student at INSAT in Tunis, and a generalist full-stack engineer — equally at home designing a database schema and polishing the last pixel of a UI.",
    "I’ve shipped real products for international clients, including US-based businesses, taking each from first commit to deployed and maintained.",
    "I work remotely with async-first teams: clear written updates, predictable delivery, and code the next engineer can actually read.",
  ],

  services: [
    {
      label: "~/full-stack",
      title: "Full-Stack Web Apps",
      description:
        "End-to-end product development with a Next.js front end and a NestJS or FastAPI back end. From auth to deployment.",
    },
    {
      label: "~/backend",
      title: "Backend APIs & System Design",
      description:
        "REST and GraphQL APIs, real-time systems over WebSockets, PostgreSQL + Redis architecture, Docker-ready from day one.",
    },
    {
      label: "~/sites",
      title: "Landing Pages & Client Sites",
      description:
        "Fast, conversion-focused marketing sites. Clean design, strong performance, deployed and maintainable.",
    },
  ] satisfies Service[],

  stack: [
    { icon: "siNextdotjs", name: "Next.js" },
    { icon: "siNestjs", name: "NestJS" },
    { icon: "siFastapi", name: "FastAPI" },
    { icon: "siTypescript", name: "TypeScript" },
    { icon: "siPostgresql", name: "PostgreSQL" },
    { icon: "siRedis", name: "Redis" },
    { icon: "siDocker", name: "Docker" },
    { icon: "siPrisma", name: "Prisma" },
    { icon: "siPython", name: "Python" },
  ] satisfies StackItem[],

  stats: [
    { value: 9, suffix: "", label: "core technologies" },
    { value: 5, suffix: "", label: "products shipped" },
    { value: 2, suffix: "", label: "countries served" },
    { value: 24, suffix: "h", label: "response time" },
  ] satisfies Stat[],

  projects: [
    {
      name: "Resume AI",
      description:
        "AI-powered resume builder that generates optimized resumes based on job descriptions, with real-time feedback and formatting.",
      stack: [
        "Next.js",
        "NestJS",
        "Prisma",
        "LLM",
        "Redis",
        "PostgreSQL",
        "Docker",
      ],
      href: "#", // just for personal use, i doubt that i'm putting this on the open market, but if i do, I'll replace this with a real URL.
      client: false,
    },
    {
      name: "Pulse",
      description:
        "LinkedIn profile reviver — feeds off data you input, generates worthy personalized content and orgainzes it for weekly schedule for maxiumum engagement.",
      stack: ["Next.js", "LLM", "vitest"],
      href: "#", // same for this one, just for personal use, but if i do put it on the open market, I'll replace this with a real URL.
      client: false,
    },
    {
      name: "Mechanic Pro",
      description:
        "Digital mechanic System for digitilizing the whole mechanic process from diagnosis to repair to invoices with many options and flexibility for the users. specifically designed for the US market.",
      stack: ["Next.js", "Supabase", "Prisma"],
      href: "https://vehicle-inspection-app.vercel.app/",
      client: true,
    },
    {
      name: "Day & Night Event Hall",
      description:
        "Landing page for a NY event hall with a modern, elegant design.",
      stack: ["Next.js", "Tailwind CSS", "Shadcn/ui", "Framer Motion"],
      href: "https://day-night-event-hall.vercel.app/",
      client: true,
    },
    {
      name: "JDN Roofing",
      description:
        "Premium roofing company landing page with a sharp, industrial aesthetic.",
      stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
      href: "https://jdn-roofing.com/",
      client: true,
    },
  ] satisfies Project[],

  contact: {
    heading: "Let’s build something.",
    subline: "Available for freelance projects. Response within 24h.",
  },
} as const;

export const hasLink = (url: string): boolean =>
  url.length > 0 && !url.startsWith("<<");
