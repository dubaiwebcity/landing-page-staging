import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import DrMaramDadoua from '@/components/ar/Common/DrMaramDadoua';

export const metadata: Metadata = {
  title: "د. مرام دعدوع، أخصائية أمراض النساء والولادة | بنون - جدة",
  description:
    "الدكتورة مرام دعدوع هي أخصائية أمراض النساء والولادة في مركز بنون بجدة، وتملك خبرة واسعة في صحة المرأة والولادة لتقديم أفضل رعاية طبية متكاملة لكِ.",
};

export default function DrMaramDadouaPage() {
  return (
    <>
      <Navbar />
      <DrMaramDadoua />
    </>
  );
}
