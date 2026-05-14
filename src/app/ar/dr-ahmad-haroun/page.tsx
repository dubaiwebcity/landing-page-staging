import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import DrAhmadHaroun from '@/components/ar/Common/DrAhmadHaroun';

export const metadata: Metadata = {
  title: "د. أحمد هارون، استشاري أمراض الذكورة والعقم | بنون - جدة",
  description:
    "الدكتور أحمد هارون هواستشاري جراحة المسالك البولية وأمراض الذكورة والعقم في مركز بنون بجدة، المتخصص في صحة الرجل وأحدث علاجات الإخصاب المتقدمة لمساعدتكم في رحلة البحث عن الإنجاب. احجز موعدك مع الدكتور أحمد اليوم.",
};

export default function DrAhmadHarounPage() {
  return (
    <>
      <Navbar />
      <DrAhmadHaroun />
    </>
  );
}
