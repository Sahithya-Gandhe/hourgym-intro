import type { ReactNode } from 'react';

type SiteContainerProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section';
};

export function SiteContainer({ children, className = '', as: Tag = 'div' }: SiteContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10 xl:px-12 ${className}`.trim()}>
      {children}
    </Tag>
  );
}
