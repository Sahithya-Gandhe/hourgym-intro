import Image from 'next/image';
import { LOGO_SRC, SITE_NAME } from '@/lib/site';

type BrandLogoProps = {
  size?: 'sm' | 'md' | 'lg';
  priority?: boolean;
};

const sizeMap = {
  sm: { box: 'h-10 w-10 sm:h-12 sm:w-12', image: 'h-8 w-8 sm:h-10 sm:w-10', dimension: 40 },
  md: { box: 'h-14 w-14 sm:h-16 sm:w-16', image: 'h-11 w-11 sm:h-14 sm:w-14', dimension: 56 },
  lg: { box: 'h-24 w-24 sm:h-28 sm:w-28', image: 'h-20 w-20 sm:h-24 sm:w-24', dimension: 96 },
} as const;

export function BrandLogo({ size = 'md', priority = false }: BrandLogoProps) {
  const styles = sizeMap[size];

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[rgba(246,204,119,.35)] bg-[rgba(20,20,22,.75)] shadow-lg shadow-[rgba(230,57,45,.2)] ${styles.box}`}
    >
      <Image
        src={LOGO_SRC}
        alt={`${SITE_NAME} logo`}
        width={styles.dimension}
        height={styles.dimension}
        className={`object-contain ${styles.image}`}
        priority={priority}
      />
    </span>
  );
}
