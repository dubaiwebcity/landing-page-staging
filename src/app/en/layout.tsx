import 'bootstrap/dist/css/bootstrap.min.css';
import localFont from 'next/font/local';
import Footer from '@/components/Layout/Footer';
import GoTop from '@/components/Layout/GoTop';
import SetLocaleAttrs from '@/components/SetLocaleAttrs';
import Script from 'next/script';
import type { Metadata } from 'next';

const plusJakartaSans = localFont({
  src: [
    {
      path: '../../fonts/plus-jakarta-sans-latin.woff2',
      style: 'normal',
    },
    {
      path: '../../fonts/plus-jakarta-sans-latin-ext.woff2',
      style: 'normal',
    },
  ],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bnoon.sa'),
  icons: {
    icon: '/images/fav.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bnoon.sa/en',
    siteName: 'Bnoon',
    images: [
      {
        url: 'https://bnoon-website.b-cdn.net/images/logo/bnoon-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Bnoon - Fertility & Women Health Centers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${plusJakartaSans.variable}`}>
      <link rel="stylesheet" href="https://bnoon-website.b-cdn.net/assets/css/style.css" />
      <link rel="stylesheet" href="https://bnoon-website.b-cdn.net/assets/css/responsive.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <SetLocaleAttrs lang="en" dir="ltr" />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6CDMTCELGG"
        strategy="afterInteractive"
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6CDMTCELGG');
            `,
        }}
      />
      {children}
      <Footer />
      <GoTop />
    </div>
  );
}
