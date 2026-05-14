import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import NationalDayOffer from '@/components/Common/NationalDayOffer';

export const metadata: Metadata = {
  title: "National Day IVF Offers | Bnoon",
  description:
    "Celebrate Saudi National Day with Bnoon’s exclusive IVF offers. Benefit from special discounts on advanced fertility treatments and reproductive health care.",
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
      <OptimizedPageBanner imageName="national-day-banner" />
      <NationalDayOffer />
    </>
  );
}
