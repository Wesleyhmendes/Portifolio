import { useTranslation } from '../i18n/useTranslation';
import { stack } from '../content/stack';
import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';

export function Stack() {
  const { t, localize } = useTranslation();

  return (
    <Section id="stack" title={t('stack.title')}>
      <dl className="flex flex-col gap-6">
        {stack.map((group, index) => (
          <Reveal
            key={group.id}
            index={index}
            className="grid gap-1 md:grid-cols-[8rem_1fr] md:gap-6"
          >
            <dt className="font-mono text-xs text-muted md:pt-1">{localize(group.label)}</dt>
            <dd className="text-body">{group.items.join(' · ')}</dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
