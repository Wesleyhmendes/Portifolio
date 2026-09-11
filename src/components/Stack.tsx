import { useTranslation } from '../i18n/useTranslation';
import { stack } from '../content/stack';
import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';

export function Stack() {
  const { t, localize } = useTranslation();

  return (
    <Section id="stack" index="03" title={t('stack.title')}>
      <div className="flex flex-col gap-8">
        {stack.map((group, index) => (
          <Reveal key={group.id} index={index}>
            <h3 className="mb-3 font-mono text-xs font-normal text-muted">
              {localize(group.label)}
            </h3>
            {/* as divisórias moram nas células: uma linha incompleta termina
                onde o último item termina, sem deixar um bloco vazio */}
            <ul className="grid grid-cols-2 overflow-hidden rounded-xs border-t border-l border-line sm:grid-cols-3 md:grid-cols-4">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border-r border-b border-line px-4 py-3 text-sm text-body"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
