import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrDaliaNour from '@/components/Common/DrDaliaNour';

export const metadata: Metadata = {
  title: "Dr. Dalia Nour, IVF Consultant | Bnoon - Riyadh",
  description:
    "Meet Dr. Dalia Nour, a skilled OBGYN & Infertility Consultant at Bnoon Riyadh, providing expert care in women’s health, obstetrics, and comprehensive fertility care.",
};

export default function ServerDrDaliaNourPage() {
  return (
    <>
      <Navbar />
      <DrDaliaNour />
    </>
  );
}
