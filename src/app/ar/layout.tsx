import 'bootstrap/dist/css/bootstrap.min.css';
import localFont from 'next/font/local';
import Footer from '@/components/ar/Layout/Footer';
import GoTop from '@/components/ar/Layout/GoTop';
import Script from 'next/script';
import type { Metadata } from 'next';
import '../../fonts/alexandria.css';

const cairo = localFont({
  src: [
    { path: '../../fonts/cairo-arabic.woff2', style: 'normal' },
    { path: '../../fonts/cairo-latin.woff2', style: 'normal' },
  ],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bnoon.sa'),
  icons: {
    icon: '/images/fav.png',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://bnoon.sa/ar',
    siteName: 'بنون',
    images: [
      {
        url: 'https://bnoon-website.b-cdn.net/images/logo/bnoon-og.jpg',
        width: 1200,
        height: 630,
        alt: 'بنون - مراكز الإخصاب وصحة المرأة',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
   <html lang="ar" dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://bnoon-website.b-cdn.net/assets/css/arabic.css"
        />
        <link
          rel="stylesheet"
          href="https://bnoon-website.b-cdn.net/assets/css/arabic-responsive.css"
        />
         <link
    href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
    rel="stylesheet"
  />
      </head>
     <body dir="rtl">
      <div className={`${cairo.variable} arabic`}>
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
        </body>
         </html>
    
  );
}
