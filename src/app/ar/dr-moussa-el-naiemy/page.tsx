import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import DrMoussaElNaiemy from '@/components/ar/Common/DrMoussaElNaiemy';

export const metadata: Metadata = {
  title: "د. موسى النعمي، استشاري أمراض الذكورة والعقم | بنون - الرياض",
  description:
    "الدكتور موسى النعمي هو استشاري أمراض الذكورة والعقم في مركز بنون بالرياض ومتخصص في صحة الرجل وأحدث علاجات الإخصاب المساعد لتحقيق حلم الأبوة. احجز الآن.",
};

export default function DrMoussaElNaiemyPage() {
  return (
    <>
      <Navbar />
      <DrMoussaElNaiemy />
    </>
  );
}
