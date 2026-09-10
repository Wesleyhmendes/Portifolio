import { useTranslation } from '../i18n/useTranslation';
import { profile } from '../content/profile';
import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';
import { ExternalLink } from './ui/ExternalLink';

export function Contact() {
  const { t } = useTranslation();

  const link = 'text-sm text-body transition-colors duration-150 hover:text-ink';

  return (
    <Section id="contact" title={t('contact.title')}>
      <Reveal>
        <p className="max-w-prose text-body">{t('contact.lead')}</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-block rounded-xs text-2xl text-ink transition-colors duration-150 hover:text-accent md:text-3xl"
        >
          {profile.email}
        </a>
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
