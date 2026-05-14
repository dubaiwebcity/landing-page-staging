import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import DrAhmedNowasser from '@/components/ar/Common/DrAhmedNowasser';

export const metadata: Metadata = {
  title: "د. أحمد النويصر، استشاري الإخصاب وعلاج العقم | بنون - الأحساء",
  description:
    "الدكتور أحمد النويصر هو استشاري الإخصاب وعلاج العقم في مركز بنون بالأحساء، صاحب الخبرة الواسعة في عمليات أطفال الأنابيب والحقن المجهري لتحقيق أفضل النتائج. احجزوا موعدكم اليوم.",
};

export default function DrAhmedNowasserPage() {
  return (
    <>
      <Navbar />
      <DrAhmedNowasser />
    </>
  );
}
