import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import DrAbdulAzizAlShahrani from '@/components/ar/Common/DrAbdulAzizAlShahrani';

export const metadata: Metadata = {
  title: "د. عبدالعزيز الشهراني، استشاري الإخصاب وأطفال الأنابيب والعقم | بنون - الرياض",
  description: "الدكتور عبدالعزيز الشهراني هو استشاري الإخصاب وأطفال الأنابيب وعلاج العقم في بنون بالرياض، ومتخصص في الحقن المجهري وأحدث تقنيات طب الإخصاب لضمان أفضل فرص النجاح.",
};

export default function DrAbdalazizAlshahraniPage() {
  return (
    <>
      <Navbar />
      <DrAbdulAzizAlShahrani />
    </>
  );
}
