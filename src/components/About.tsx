import { useTranslation } from '../i18n/useTranslation';
import { about } from '../content/about';
import { profile } from '../content/profile';
import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';

export function About() {
  const { t, localize } = useTranslation();

  return (
    <Section id="about" index="04" title={t('about.title')} subtle>
      <Reveal>
        <div className="flex flex-col gap-6 md:flex-row md:gap-10">
          <img
            src={profile.photo}
            alt=""
            width={96}
            height={96}
            loading="lazy"
            className="size-24 shrink-0 rounded-full border border-line object-cover"
          />
          <div className="flex max-w-prose flex-col gap-4">
            {about.map((paragraph) => (
              <p key={paragraph.en}>{localize(paragraph)}</p>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
