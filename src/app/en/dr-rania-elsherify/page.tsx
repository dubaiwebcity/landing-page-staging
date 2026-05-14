import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrRaniaElsherify from '@/components/Common/DrRaniaElsherify';

export const metadata: Metadata = {
  title: "Dr. Rania El-Sherify, OBGYN & IVF Specialist | Bnoon - Al Ahsa",
  description:
    "Meet Dr. Rania El-Sherify, a dedicated OBGYN Specialist at Bnoon Al Ahsa, specializing in women’s health, obstetrics, and comprehensive gynecological services.",
};

export default function ServerDrRaniaElsherifyPage() {
  return (
    <>
      <Navbar />
      <DrRaniaElsherify />
    </>
  );
}
