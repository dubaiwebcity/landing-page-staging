import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import DrHusseinSabban from '@/components/ar/Common/DrHusseinSabban';

export const metadata: Metadata = {
  title: "د. حسين صبّان، استشاري أطفال الأنابيب والعقم | بنون- جدة",
  description:
    "استشر الدكتور حسين صبّان، استشاري أطفال الأنابيب والعقم في بنون جدة، الخبير في علاجات الإخصاب المساعد وتقديم الرعاية الطبية المتميزة لتحقيق أفضل النتائج.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function DrHusseinSabbanPage() {
  return (
    <>
      <Navbar />
      <DrHusseinSabban />
    </>
  );
}
