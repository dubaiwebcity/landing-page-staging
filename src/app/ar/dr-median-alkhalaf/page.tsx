import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import DrMedianAlkhalaf from '@/components/ar/Common/DrMedianAlkhalaf';

export const metadata: Metadata = {
  title: 'الدكتور مدين الخلف - استشاري أمراض النساء والولادة في بنون بالأحساء',
  description:
    'الدكتور مدين الخلف، استشاري أمراض النساء والولادة في مركز بنون بالأحساء. خبرة واسعة في صحة المرأة والولادة.',
};

export default function DrMedianAlkhalafPage() {
  return (
    <>
      <Navbar />
      <DrMedianAlkhalaf />
    </>
  );
}
