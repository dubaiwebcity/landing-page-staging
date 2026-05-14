import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrAhmedAlNowasser from '@/components/Common/DrAhmedAlNowasser';

export const metadata: Metadata = {
  title: "Dr. Ahmed Al-Nowasser, IVF & Fertility Consultant | Bnoon - Al Ahsa",
  description:
    "Meet Dr. Ahmed Al-Nowasser, fertility & IVF consultant at Bnoon Al Ahsa, specializing in IVF, ICSI, and advanced infertility treatments for personalized care.",
};

export default function ServerDrAhmedAlNowasserPage() {
  return (
    <>
      <Navbar />
      <DrAhmedAlNowasser />
    </>
  );
}
