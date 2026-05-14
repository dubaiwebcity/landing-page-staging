import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import WaadSection from '@/components/ar/Common/WaadSection';

export const metadata: Metadata = {
  title: "برنامج وعد بنون | بنون",
  description:
    "انضم لبرنامج وعد بنون. تعرف على تفاصيل البرنامج وشروط الاستحقاق لضمان نجاح رحلتكم في عمليات أطفال الأنابيب بأمان.",
};

export default function WaadBnoonProgramPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <OptimizedPageBanner imageName="waad-bnoon-banner-ar" />
      <WaadSection />
    </>
  );
}
