import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/Layout/Navbar';
import WaadSection from '@/components/Common/WaadSection';

export const metadata: Metadata = {
  title: "Join Wa'ad Bnoon IVF Program | Bnoon",
  description:
    "Learn about Wa’ad Bnoon IVF Program. Learn about eligibility and how we support your journey to successful parenthood.",
};

export default function WaadPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <OptimizedPageBanner imageName="waad-bnoon-banner" />
      <WaadSection />
    </>
  );
}
