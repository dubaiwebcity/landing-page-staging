import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import VisitTabs from '@/components/ar/Common/VisitTabs';

export const metadata: Metadata = {
  title: "زيارتكم لمراكزنا في الرياض وجدة والأحساء  | بنون",
  description:
    "كل ما تحتاجون معرفته عن زيارتكم لمراكز بنون في جدة والرياض والأحساء من حجز المواعيد والتحضيرات والخدمات المتاحة.",
};

export default function YourVisitPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <OptimizedPageBanner imageName="visit-banner-ar" />
      <VisitTabs />
    </>
  );
}
