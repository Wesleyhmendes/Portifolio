import { useTranslation } from '../i18n/useTranslation';
import { profile } from '../content/profile';
import { ExternalLink } from './ui/ExternalLink';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-content flex-wrap items-center justify-between gap-2 px-6 py-8 font-mono text-xs text-muted">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <ExternalLink href={profile.repository} className="transition-colors hover:text-ink">
          {t('footer.source')}
        </ExternalLink>
      </div>
    </footer>
  );
}
