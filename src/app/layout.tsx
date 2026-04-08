import { GoogleTagManager } from '@next/third-parties/google';
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>

        {/* ✅ Google Tag Manager (must be at top of body) */}
        <GoogleTagManager gtmId="GTM-NVPZTJNP" />

        {/* ✅ Facebook Pixel */}
        <Script strategy="afterInteractive" id="facebook-pixel">
          {`
            !function(f,b,e,v,n,t,s){
            if(f.fbq)return;
            n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];
            t=b.createElement(e);t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
            }(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '807341019046878');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* ✅ TikTok Pixel */}
        <Script strategy="afterInteractive" id="tiktok-pixel">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;
              var ttq=w[t]=w[t]||[];
              ttq.methods=["page","track","identify","ready"];
              ttq.load=function(e){
                var s=d.createElement("script");
                s.src="https://analytics.tiktok.com/i18n/pixel/events.js?sdkid="+e+"&lib="+t;
                s.async=true;
                d.getElementsByTagName("head")[0].appendChild(s);
              };

              ttq.load('D6ES013C77UAAN0097SG');
              // ttq.page();  // enable later if needed
            }(window, document, 'ttq');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
