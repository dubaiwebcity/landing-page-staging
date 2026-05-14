import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Riyadharea from '@/components/ar/Common/Riyadharea';

export const metadata: Metadata = {
  title: "زوروا مراكز الإخصاب وصحة المرأة بالرياض | بنون",
  description:
    "مراكز بنون للإخصاب وصحة المرأة في الرياض تقدم خدمات أطفال الأنابيب والحقن المجهري وعلاج العقم والفحوصات الجينية للأجنة واختيار جنس الجنين تحت إشراف فريق طبي متخصص وتقنيات عالمية مدعومة بالذكاء الاصطناعي.",
};

export default function BnoonRiyadhPage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="clinics-banner-ar" />
      <Riyadharea />
    </>
  );
}
