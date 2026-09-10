import { useEffect, useState } from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { profile } from '../content/profile';
import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';
import { ExternalLink } from './ui/ExternalLink';

export function Contact() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      // sem permissão de área de transferência: o mailto ao lado continua valendo
    }
  };

  const link = 'text-sm text-body transition-colors duration-150 hover:text-ink';

  return (
    <Section id="contact" index="05" title={t('contact.title')}>
      <Reveal>
        <p className="max-w-prose text-body">{t('contact.lead')}</p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-xs text-2xl text-ink transition-colors duration-150 hover:text-accent md:text-3xl"
          >
            {profile.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="rounded-xs border border-line px-2 py-1 font-mono text-xs text-muted transition-colors duration-150 hover:border-line-strong hover:text-ink"
          >
            {copied ? t('contact.copied') : t('contact.copy')}
          </button>
          {/* o anúncio é separado do botão: trocar o rótulo sozinho não avisa
              quem usa leitor de tela */}
          <span role="status" aria-live="polite" className="sr-only">
            {copied ? t('contact.copied') : ''}
          </span>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <ExternalLink href={profile.linkedin} className={link}>
            LinkedIn
          </ExternalLink>
          <ExternalLink href={profile.github} className={link}>
            GitHub
          </ExternalLink>
          <a
            href={profile.cv}
            download
            className="rounded-xs border border-line-strong px-4 py-2.5 text-sm text-ink transition-[border-color,box-shadow] duration-150 hover:shadow-sm"
          >
            {t('contact.downloadCv')}
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
