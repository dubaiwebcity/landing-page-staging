import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import DrFawazEdris from '@/components/ar/Common/DrFawazEdris';

export const metadata: Metadata = {
  title: "البروفيسور فواز إدريس، استشاري الإخصاب وأطفال الأنابيب والعقم | بنون - جدة",
  description:
    "البروفيسور فواز إدريس هو استشاري أطفال الأنابيب والعقم وطب الأجنة والأمومة والمناظير في مركز بنون بجدة، الخبير في علاجات الإخصاب المساعد والرعاية الشاملة للخصوبة بأعلى المعايير الطبية العالمية.",
};

export default function DrFawazEdrisPage() {
  return (
    <>
      <Navbar />
      <DrFawazEdris />
    </>
  );
}
