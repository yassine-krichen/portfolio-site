import { site, SITE_URL, hasLink } from '@/content/site';

/**
 * Person structured data (schema.org) for rich results + entity recognition.
 * Server component — emitted in the initial HTML, no client JS.
 */
export function PersonJsonLd() {
  const sameAs = [site.linkedin, site.github].filter(hasLink);

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    description: site.description,
    url: SITE_URL,
    email: `mailto:${site.email}`,
    knowsAbout: site.stack.map((s) => s.name),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe; no user input is interpolated.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
