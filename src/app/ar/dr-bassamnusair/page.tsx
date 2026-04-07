import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import DrBassam from '@/components/ar/Common/DrBassam';

export const metadata: Metadata = {
  title: 'الدكتور بسام نصير – أفضل استشاري إخصاب وعقم في الأحساء | بنون',
  description:
    'الدكتور بسام نصير، استشاري الإخصاب وعلاج العقم في مركز بنون بالأحساء. خبرة واسعة في أطفال الأنابيب والحقن المجهري.',
};

export default function BnoonBassamPage() {
  return (
    <>
      <Navbar />
      <DrBassam />
    </>
  );
}
