import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import NationalDayOffer from '@/components/Common/NationalDayOffer';

export const metadata: Metadata = {
  title: "Founding Day IVF Offer | Bnoon",
  description: "Take advantage of Bnoon’s exclusive Founding Day IVF offers. Start your journey to parenthood with advanced treatments and special savings on fertility care.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function NationalDayOfferPage() {
  return (
    <>
      <Navbar />

      {/* ✅ Only on this page: overlay text on banner (NO styled-jsx) */}
      <div style={{ position: 'relative' }}>
        <OptimizedPageBanner imageName="static-banner-en" />

        <div
          className="second-banner-content reveal-text"
          style={{
            position: 'absolute',
            top: '50%',
            left: '8%',
            transform: 'translateY(-50%)',
            zIndex: 10,
          }}
        >
          <h1 style={{ color: '#004E78' }}>
            <span className="rowdies-font">FOUNDING DAY OFFER ON IVF/ICSI CYCLES</span>
          </h1>

          <p style={{ color: '#fff' }} className="special-desc"></p>

          <p style={{ color: '#fff' }} className="terms-text"></p>
        </div>
      </div>

      <NationalDayOffer />
    </>
  );
}
