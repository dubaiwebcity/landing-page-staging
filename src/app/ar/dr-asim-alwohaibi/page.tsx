import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import DrAsimAlWohaibi from '@/components/ar/Common/DrAsimAlWohaibi';

export const metadata: Metadata = {
  title: "د. عاصم الوهيبي، استشاري الإخصاب وأطفال الأنابيب | بنون - الرياض",
  description:
    "الدكتور عاصم الوهيبي هو استشاري الإخصاب وأطفال الأنابيب في مركز بنون بالرياض، احجز موعد اليوم للحصول على أحدث علاجات العقم المتقدمة والرعاية الطبية المتخصصة للخصوبة.",
};

export default function DrAsimAlwohaibiPage() {
  return (
    <>
      <Navbar />
      <DrAsimAlWohaibi />
    </>
  );
}
