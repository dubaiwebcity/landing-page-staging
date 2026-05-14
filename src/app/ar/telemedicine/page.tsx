import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import TelemedicineSection from '@/components/ar/Common/TelemedicineSection';

export const metadata: Metadata = {
  title: "الاستشارات عن بعد | بنون",
  description:
    "احجزوا استشارة عن بُعد مع نخبة من أطباء بنون المتخصصين في الخصوبة وصحة المرأة. استمتعوا بخدمة الاستشارات الافتراضية المريحة والآمنة من أي مكان.",
};

export default function TelemedicinePage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="telemedicine-banner-ar" />
      <TelemedicineSection />
    </>
  );
}
