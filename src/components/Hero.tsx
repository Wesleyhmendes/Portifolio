import { useTranslation } from '../i18n/useTranslation';
import { profile } from '../content/profile';
import { ExternalLink } from './ui/ExternalLink';
import { Reveal } from './ui/Reveal';

export function Hero() {
  const { t, localize } = useTranslation();

  const secondaryLink =
    'rounded-xs px-4 py-2.5 text-sm text-body transition-colors duration-150 hover:text-ink';

  return (
    <section id="top" className="mx-auto w-full max-w-content px-6 pt-32 pb-16 md:pt-44 md:pb-28">
      <Reveal>
        <div className="mb-6 flex items-center gap-4">
          <img
            src={profile.photo}
            alt={t('hero.photoAlt')}
            width={48}
            height={48}
            className="size-12 rounded-full border border-line object-cover"
          />
          <p className="font-mono text-xs text-muted">{profile.role}</p>
        </div>
      </Reveal>

      <Reveal index={1}>
        <h1 className="max-w-prose text-5xl md:text-6xl">{profile.name}</h1>
      </Reveal>

      <Reveal index={2}>
        <p className="mt-6 max-w-prose text-xl text-body">{localize(profile.tagline)}</p>
      </Reveal>

      <Reveal index={3}>
        <div className="mt-10 flex flex-wrap items-center gap-2">
          <a
            href="#work"
            className="rounded-xs bg-ink px-4 py-2.5 text-sm text-bg transition-opacity duration-150 hover:opacity-90"
          >
            {t('hero.viewWork')}
          </a>
          <ExternalLink href={profile.github} className={secondaryLink}>
            GitHub
          </ExternalLink>
          <ExternalLink href={profile.linkedin} className={secondaryLink}>
            LinkedIn
          </ExternalLink>
        </div>
      </Reveal>
    </section>
  );
}
