import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import OurLocations from '@/components/ar/Common/OurLocations';

export const metadata: Metadata = {
  title: "مراكز الإخصاب وصحة المرأة في الرياض وجدة والأحساء | بنون",
  description:
    "تعرّفوا على مراكز بنون للإخصاب وصحة المرأة في الرياض وجدة والأحساء. مواقعنا المتعددة مجهزة بأحدث التقنيات لتقديم أفضل خدمات علاج العقم وعمليات أطفال الأنابيب.",
};

export default function OurClinicsPage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="clinics-banner-ar" />
      <OurLocations />
    </>
  );
}
