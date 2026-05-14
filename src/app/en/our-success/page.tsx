import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/Layout/Navbar';
import SuccessSection from '@/components/Common/SuccessSection';

export const metadata: Metadata = {
  title: "Discover IVF Success Rates | High Pregnancy Rates (IVF/ICSI) | Bnoon",
  description:
    "Discover Bnoon’s leading success rates for IVF and ICSI. Our advanced technology and expert medical team are dedicated to helping you achieve a pregnancy.",
};

export default function OurSuccessPage() {
  return (
    <>
      <Navbar />

      <OptimizedPageBanner imageName="success-banner" />

      <SuccessSection />
    </>
  );
}
