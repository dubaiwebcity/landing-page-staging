import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import NationalDayOffer from '@/components/ar/Common/NationalDayOffer';

export const metadata: Metadata = {
  title: "عرض يوم التأسيس للذكورة | بنون",
  description: "استفد من عروض يوم التأسيس الحصرية من بنون على خدمات أمراض الذكورة. نقدم استشارات متخصصة وعلاجات متطورة لدعم صحة الرجل وتحقيق حلم الإنجاب بأسعار مميزة.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function FoundingDayDiscountPage() {
  return (
    <>
      <Navbar />
      <div style={{ position: 'relative' }}>
        <OptimizedPageBanner imageName="static-banner-ar" />

        <div
          className="second-banner-content reveal-text"
          style={{
            position: 'absolute',
            top: '50%',
            right: '8%',
            transform: 'translateY(-50%)',
            zIndex: 10,
          }}
        >
          <h1 style={{ color: '#004E78' }}>
            <span className="rowdies-font">العرض الخاص بيوم التأسيس السعودي</span>
          </h1>

          <p style={{ color: '#fff' }} className="special-desc"></p>

          <p style={{ color: '#fff' }} className="terms-text"></p>
        </div>
      </div>

      <NationalDayOffer />
    </>
  );
}
