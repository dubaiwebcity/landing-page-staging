import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import DrMayaAlbezreh from '@/components/ar/Common/DrMayaAlbezreh';

export const metadata: Metadata = {
  title: "د. مايا البزرة، استشارية أمراض النساء والولادة والإخصاب  | بنون - جدة",
  description:
    "الدكتورة مايا البزره هي استشارية أمراض النساء والولادة والإخصاب في بنون بجدة، وتمتلك خبرة واسعة في أطفال الأنابيب وصحة المرأة لتقديم رعاية متكاملة.",
};

export default function DrMayaAlbezrehPage() {
  return (
    <>
      <Navbar />
      <DrMayaAlbezreh />
    </>
  );
}
