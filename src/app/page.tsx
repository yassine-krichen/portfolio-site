import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { Stack } from '@/components/sections/stack';
import { Projects } from '@/components/sections/projects';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
