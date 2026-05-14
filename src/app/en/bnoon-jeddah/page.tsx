import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Jeddaharea from '@/components/Common/Jeddaharea';

export const metadata: Metadata = {
  title: "Visit our Fertility Center in Jeddah | Bnoon",
  description:
    "Visit Bnoon’s fertility and women’s health center in Jeddah for expert IVF, ICSI, gender selection, genetic testing and infertility treatments delivered by our highly experienced medical team.",
};

export default function BnoonJeddahPage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="clinics-banner" />
      <Jeddaharea />
    </>
  );
}
