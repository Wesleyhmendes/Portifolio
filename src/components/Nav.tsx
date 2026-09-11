import { useEffect, useState } from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { useTheme } from '../theme/useTheme';
import { profile } from '../content/profile';
import type { TranslationKey } from '../i18n/en';

const links: { href: string; key: TranslationKey }[] = [
  { href: '#work', key: 'nav.work' },
  { href: '#experience', key: 'nav.experience' },
  { href: '#stack', key: 'nav.stack' },
  { href: '#about', key: 'nav.about' },
  { href: '#contact', key: 'nav.contact' },
];

export function Nav() {
  const { t, language, setLanguage } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const controlClass =
    'rounded-xs px-2 py-1 font-mono text-xs text-muted transition-colors duration-150 hover:text-ink';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-bg/72 backdrop-blur-md transition-colors duration-150 ${
        scrolled ? 'border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label={profile.name}
        className="mx-auto flex w-full max-w-content items-center justify-between px-6 py-4"
      >
        <a href="#top" className="font-medium text-ink">
          {profile.name}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm transition-colors duration-150 hover:text-ink"
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1 border-l border-line pl-4">
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
              aria-label={t('lang.toggle')}
              className={controlClass}
            >
              {language === 'en' ? 'EN' : 'PT'}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t('theme.toggleLight') : t('theme.toggle')}
              className={controlClass}
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          className={`${controlClass} md:hidden`}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-line bg-bg px-6 py-4 md:hidden"
      >
        <ul className="flex flex-col gap-3">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)} className="text-sm">
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center gap-2 border-t border-line pt-4">
          <button
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
            aria-label={t('lang.toggle')}
            className={controlClass}
          >
            {language === 'en' ? 'EN' : 'PT'}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('theme.toggleLight') : t('theme.toggle')}
            className={controlClass}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </header>
  );
}
