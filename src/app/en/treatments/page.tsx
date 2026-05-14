import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/Layout/Navbar';
import TreatmentsSection from '@/components/Common/TreatmentsSection';
import TreatmentsTabs from '@/components/Common/TreatmentsTabs';

export const metadata: Metadata = {
  title: "Explore IVF, ICSI, Male Infertility, PGT & Gyne Laproscopy Treatments in KSA | Bnoon",
  description:
    "Explore advanced fertility treatments at Bnoon, including IVF, ICSI, IUI. gender selection, male infertility care, PGT, and gynecological laparoscopy tailored for your specific needs.",
};

export default function TreatmentsPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <OptimizedPageBanner imageName="treatments-banner" />
      <TreatmentsSection />
      <TreatmentsTabs />
    </>
  );
}
