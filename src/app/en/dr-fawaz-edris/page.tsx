import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrFawazEdris from '@/components/Common/DrFawazEdris';

export const metadata: Metadata = {
  title: "Prof. Fawaz Edris, IVF and Infertility Consultant | Bnoon - Jeddah",
  description:
    "Consult with Prof. Fawaz Edris, an IVF and infertility specialist at Bnoon Jeddah, offering expert assisted reproductive treatments and personal fertility care.",
};

export default function ServerDrFawazEdrisPage() {
  return (
    <>
      <Navbar />
      <DrFawazEdris />
    </>
  );
}
