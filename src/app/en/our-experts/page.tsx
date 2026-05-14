import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import FertilityDoctor from '@/components/Common/FertilityDoctor';
import OurExperts from '@/components/Common/OurExperts';

export const metadata: Metadata = {
  title: "Find IVF & OBGYN Experts | Bnoon",
  description:
    "Connect with Bnoon’s expert team of IVF, gynecology, and andrology consultants. Our experienced doctors provide world-class fertility care across Saudi Arabia.",
};

export default function OurExpertsPage() {
  return (
    <>
      <Navbar />

      <OptimizedPageBanner imageName="experts-banner" />

      <OurExperts />
      <FertilityDoctor />
    </>
  );
}
