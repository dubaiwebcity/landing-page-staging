import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Jeddaharea from '@/components/ar/Common/Jeddaharea';

export const metadata: Metadata = {
  title: "زوروا مركز الإخصاب وصحة المرأة بجدة | بنون",
  description:
    "تفضلوا بزيارة مركز بنون للإخصاب وصحة المرأة في جدة، حيث نقدم خدمات أطفال الأنابيب والحقن المجهري وعلاج العقم مع فريق طبي متخصص يسعى دائماً لتقديم الأفضل.",
};

export default function BnoonJeddahPage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="clinics-banner-ar" />
      <Jeddaharea />
    </>
  );
}
