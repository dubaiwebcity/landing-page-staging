import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrBassam from '@/components/Common/DrBassam';

export const metadata: Metadata = {
  title: "Dr. Bassam Nusair, IVF & Infertility Consultant | Bnoon - Al Ahsa",
  description:
    "Meet Dr. Bassam Nusair, a dedicated fertility & IVF consultant at Bnoon Al Ahsa, specializing in advanced IVF, ICSI, and effective infertility treatment solutions.",
};

export default function ServerDrBassamPage() {
  return (
    <>
      <Navbar />
      <DrBassam />
    </>
  );
}
