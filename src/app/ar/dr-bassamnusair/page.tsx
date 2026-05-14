import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import DrBassam from '@/components/ar/Common/DrBassam';

export const metadata: Metadata = {
  title: "د. بسام نصير، استشاري الإخصاب وعلاج العقم | بنون - الأحساء",
  description:
    "الدكتور بسام نصير هو استشاري الإخصاب وعلاج العقم في بنون بالأحساء، المتخصص في عمليات أطفال الأنابيب والحقن المجهري بأحدث التقنيات الطبية ونسب نجاح عالية.",
};

export default function BnoonBassamPage() {
  return (
    <>
      <Navbar />
      <DrBassam />
    </>
  );
}
