import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrMazinBishara from '@/components/Common/DrMazinBishara';

export const metadata: Metadata = {
  title: "Dr. Mazin Bishara, IVF and Infertility Consultant | Bnoon - Jeddah",
  description:
    "Meet Dr. Mazin Bishara, an IVF and infertility consultant at Bnoon Jeddah, providing expert assisted reproductive treatments and compassionate fertility care.",
};

export default function ServerDrMazinBisharaPage() {
  return (
    <>
      <Navbar />
      <DrMazinBishara />
    </>
  );
}
