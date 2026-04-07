import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import DrRaniaAlsherify from '@/components/ar/Common/DrRaniaAlsherify';

export const metadata: Metadata = {
  title: 'الدكتورة رانيا الشريفي - طبيبة أمراض النساء والولادة في بنون بالأحساء',
  description:
    'الدكتورة رانيا الشريفي، استشارية أمراض النساء والولادة في مركز بنون بالأحساء. خبرة واسعة في صحة المرأة والولادة.',
};

export default function BnoonAlahsaPage() {
  return (
    <>
      <Navbar />
      <DrRaniaAlsherify />
    </>
  );
}
