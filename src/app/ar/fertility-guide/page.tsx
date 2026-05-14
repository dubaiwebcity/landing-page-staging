import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import FertilityTabs from '@/components/ar/Common/FertilityTabs';
import CustomList from '@/components/ar/Common/CustomList';

export const metadata: Metadata = {
  title: "معلومات شاملة عن الخصوبة وعلاجات الإخصاب والحمل | بنون",
  description:
    "اكتشف دليل بنون الشامل للخصوبة، الذي يقدم معلومات طبية موثوقة حول أسباب العقم، وأحدث العلاجات المتاحة، ونصائح الخبراء لزيادة فرص الحمل بنجاح وأمان تام.",
};

export default function FertilityGuidePage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <OptimizedPageBanner imageName="fertility-guide-banner-ar" />
      <FertilityTabs />
    </>
  );
}
