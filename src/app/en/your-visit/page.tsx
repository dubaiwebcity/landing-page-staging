import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/Layout/Navbar';
import VisitTabs from '@/components/Common/VisitTabs';

export const metadata: Metadata = {
  title: "Plan Your Visit KSA | Bnoon",
  description:
    "Plan your visit to Bnoon’s clinics in Riyadh, Jeddah, or Al Ahsa. Find all details on appointments, preparation, and our comprehensive reproductive services.",
};

export default function YourVisitPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <OptimizedPageBanner imageName="visit-banner" />
      <VisitTabs />
    </>
  );
}
