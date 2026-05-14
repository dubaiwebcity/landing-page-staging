import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import DrMedianAlkhalaf from '@/components/ar/Common/DrMedianAlkhalaf';

export const metadata: Metadata = {
  title: "د. مدين الخلف، استشاري أمراض النساء والولادة | بنون - الأحساء",
  description:
    "الدكتور مدين الخلف هواستشاري أمراض النساء والولادة في مركز بنون بالأحساء، ويمتلك خبرة واسعة في أمراض النساء والولادة لتقديم رعاية طبية شاملة ومتميزة لكِ.",
};

export default function DrMedianAlkhalafPage() {
  return (
    <>
      <Navbar />
      <DrMedianAlkhalaf />
    </>
  );
}
