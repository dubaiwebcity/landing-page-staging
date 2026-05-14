import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import SuccessSection from '@/components/ar/Common/SuccessSection';

export const metadata: Metadata = {
  title: "نسب نجاح عالية للحمل وعمليات أطفال الأنابيب | بنون",
  description:
    "اكتشفوا نسب نجاح الحمل المتميزة لعمليات أطفال الأنابيب والحقن المجهري في مراكز بنون، حيث نجمع بين التقنيات المتطورة والخبرات الطبية لتحقيق أفضل النتائج لكم.",
};

export default function OurSuccessPage() {
  return (
    <>
      <Navbar />

      <OptimizedPageBanner imageName="success-banner-ar" />

      <SuccessSection />
    </>
  );
}
