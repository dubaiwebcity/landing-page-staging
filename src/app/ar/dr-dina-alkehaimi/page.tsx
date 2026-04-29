import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import DrDinaAlkehaimi from '@/components/ar/Common/DrDinaAlkehaimi';

export const metadata: Metadata = {
  title: 'د. دينا الكحيمي - طبيبة أمراض النساء والولادة في جدة | بنون ',
  description:
    'الدكتورة دينا الكحيمي، استشارية أمراض النساء والولادة في مركز بنون بجدة. خبرة واسعة في صحة المرأة والولادة.',
};

export default function DrDinaAlkehaimiPage() {
  return (
    <>
      <Navbar />
      <DrDinaAlkehaimi />
    </>
  );
}
