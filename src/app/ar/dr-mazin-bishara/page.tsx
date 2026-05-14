import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import DrMazinBishara from '@/components/ar/Common/DrMazinBishara';

export const metadata: Metadata = {
  title: "د. مازن بشارة، استشاري الإخصاب وأطفال الأنابيب والعقم | بنون - جدة",
  description:
    "الدكتور مازن بشارة هو استشاري أطفال الأنابيب والعقم في بنون بجدة، ويملك خبرة واسعة في علاجات الإخصاب المساعد وتقديم الرعاية الطبية المتميزة لكل حالة.",
};

export default function DrMazinBisharaPage() {
  return (
    <>
      <Navbar />
      <DrMazinBishara />
    </>
  );
}
