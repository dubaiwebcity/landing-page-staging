import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import DrAhmedNowasser from '@/components/ar/Common/DrAhmedNowasser';

export const metadata: Metadata = {
  title: 'الدكتور أحمد النويصر – أفضل استشاري إخصاب وعقم في الأحساء | بنون',
  description:
    'الدكتور أحمد النويصر، استشاري الإخصاب وعلاج العقم في مركز بنون بالأحساء. خبرة واسعة في أطفال الأنابيب والحقن المجهري.',
};

export default function DrAhmedNowasserPage() {
  return (
    <>
      <Navbar />
      <DrAhmedNowasser />
    </>
  );
}
