import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import AlahsaArea from '@/components/ar/Common/AlahsaArea';

export const metadata: Metadata = {
  title: "زوروا مركز الإخصاب وصحة المرأة بالأحساء | بنون",
  description:
    "تفضلوا بزيارة مركز بنون للإخصاب وصحة المرأة في الأحساء، حيث نوفر خدمات أطفال الأنابيب والحقن المجهري وعلاج العقم تحت إشراف فريق طبي متميز وتقنيات متطورة.",
};

export default function BnoonAlahsaPage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="clinics-banner-ar" />
      <AlahsaArea />
    </>
  );
}
