import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import DrRaniaAlsherify from '@/components/ar/Common/DrRaniaAlsherify';

export const metadata: Metadata = {
  title: "د. رانيا الشريفي، أخصائية أمراض النساء والولادة | بنون - الأحساء",
  description:
    "احجزي موعدك مع الدكتورة رانيا الشريفي، استشارية أمراض النساء والولادة في مركز بنون بالأحساء، صاحبة الخبرة الواسعة في صحة المرأة والولادة لتقديم أفضل رعاية طبية.",
};

export default function BnoonAlahsaPage() {
  return (
    <>
      <Navbar />
      <DrRaniaAlsherify />
    </>
  );
}
