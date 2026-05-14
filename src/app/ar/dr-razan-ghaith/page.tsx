import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import DrRazanGhaith from '@/components/ar/Common/DrRazanGhaith';

export const metadata: Metadata = {
  title: "د. رزان غيث، استشارية أمراض النساء والولادة وتأخر الحمل | بنون - جدة",
  description:
    "الدكتورة رزان غيث هي استشارية أمراض النساء والولادة وتأخر الحمل في مركز بنون بجدة، ومتخصصة في علاجات تأخر الحمل ورعاية صحة المرأة بأعلى معايير الرعاية الطبية. احجزي موعدك مع الدكتورة رزان اليوم.",
};

export default function DrRazanGhaithPage() {
  return (
    <>
      <Navbar />
      <DrRazanGhaith />
    </>
  );
}
