import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrAhmadHaroun from '@/components/Common/DrAhmadHaroun';

export const metadata: Metadata = {
  title: "Dr. Ahmad Haroun, Andrology Consultant | Bnoon - Jeddah",
  description:
    "Consult with Dr. Ahmad Haroun, an expert Andrology & Male Infertility Consultant at Bnoon Jeddah, specializing in male surgical procedures including TESA, Micro-TESE and PESA.",
};

export default function ServerDrAhmadHarounPage() {
  return (
    <>
      <Navbar />
      <DrAhmadHaroun />
    </>
  );
}
