import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import TreatmentsSection from '@/components/ar/Common/TreatmentsSection';
import TreatmentsTabs from '@/components/ar/Common/TreatmentsTabs';

export const metadata: Metadata = {
  title: "علاجات أطفال الأنابيب والحقن المجهري والفحوصات الجينية المتقدمة | بنون",
  description:
    "تعرّفوا على مجموعة واسعة من علاجات الخصوبة في بنون، تشمل أطفال الأنابيب والحقن المجهري وعلاج عقم الرجال والفحص الجيني للأجنة واختيار جنس الجنين والمناظير النسائية المتقدمة وغيرها.",
};

export default function TreatmentsPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <OptimizedPageBanner imageName="treatments-banner-ar" />
      <TreatmentsSection />
      <TreatmentsTabs />
    </>
  );
}
