import type { ReactNode } from 'react';

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
};

/** Todo link externo sai com rel="noopener noreferrer" por construção. */
export function ExternalLink({ href, children, className, ...rest }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
      {children}
    </a>
  );
}
