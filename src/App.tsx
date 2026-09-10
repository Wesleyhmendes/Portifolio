import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Experience } from './components/Experience';
import { Stack } from './components/Stack';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useTranslation } from './i18n/useTranslation';

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-xs focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-60 focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-ink focus:shadow-md"
      >
        {t('nav.skipToContent')}
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
