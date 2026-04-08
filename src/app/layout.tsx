import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* ✅ Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NVPZTJNP');
            `,
          }}
        />

        {/* ✅ Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
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
            `,
          }}
        />

        {/* ✅ TikTok Pixel */}
        <Script
          id="tiktok-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
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
              }(window, document, 'ttq');
            `,
          }}
        />
      </head>

      <body>
        {/* ✅ GTM NoScript (important) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NVPZTJNP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
