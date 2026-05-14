import type { Metadata } from 'next';
import { Orbitron, Rajdhani } from 'next/font/google';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { LOGO_SRC, SITE_NAME } from '@/lib/site';
import './globals.css';

const headingFont = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'],
  weight: ['500', '700', '800'],
});

const bodyFont = Rajdhani({
  variable: '--font-rajdhani',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  applicationName: 'HourGym Intro',
  title: {
    default: `${SITE_NAME} | Hourly gym booking`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'HourGym helps customers discover partner gyms, book hourly training sessions, and pay securely through Razorpay in India.',
  icons: {
    icon: LOGO_SRC,
    apple: LOGO_SRC,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
