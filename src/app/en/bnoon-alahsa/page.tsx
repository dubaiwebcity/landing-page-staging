import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import AlahsaArea from '@/components/Common/AlahsaArea';

export const metadata: Metadata = {
  title: "Visit our Fertility Center in Al Ahsa | Bnoon",
  description:
    "Visit Bnoon’s fertility and women’s health center in Al Ahsa. Our expert medical team provides advanced IVF, ICSI, genetic testing and comprehensive infertility treatments.",
};

export default function BnoonAlahsaPage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="clinics-banner" />
      <AlahsaArea />
    </>
  );
}
