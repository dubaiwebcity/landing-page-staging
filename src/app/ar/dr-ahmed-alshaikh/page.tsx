import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import DrAhmedAlshaikh from '@/components/ar/Common/DrAhmedAlshaikh';

export const metadata: Metadata = {
  title: "د. أحمد الشيخ، استشاري أطفال الأنابيب والعقم | بنون - جدة",
  description:
    "الدكتور أحمد الشيخ هو استشاري أطفال الأنابيب والعقم في مركز بنون بجدة، ويمتلك خبرة واسعة في علاجات الإخصاب المساعد وتقديم الرعاية المتكاملة لحالات تاخر الإنجاب. احجزوا اليوم.",
};

export default function DrAhmedAlShaikhPage() {
  return (
    <>
      <Navbar />
      <DrAhmedAlshaikh />
    </>
  );
}
