import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Riyadharea from '@/components/Common/Riyadharea';

export const metadata: Metadata = {
  title: "Advanced Fertility & Women's Health Center | Riyadh | Bnoon",
  description:
    "Experience high-quality care at Bnoon’s fertility and women’s health centers in Riyadh. Our expert team is specialized in advanced IVF, ICSI, and infertility treatments using AI-based technologies.",
};

export default function BnoonRiyadhPage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="clinics-banner" />
      <Riyadharea />
    </>
  );
}
