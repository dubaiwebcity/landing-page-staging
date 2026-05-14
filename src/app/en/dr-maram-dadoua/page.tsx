import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrMaramDadoua from '@/components/Common/DrMaramDadoua';

export const metadata: Metadata = {
  title: "Dr. Maram Dadoua, OBGYN Specialist | Bnoon - Jeddah",
  description:
    "Meet Dr. Maram Dadoua, a dedicated OBGYN Specialist at Bnoon Jeddah, specializing in women’s health, obstetrics, and comprehensive gynecological care services.",
};

export default function ServerDrMaramDadouaPage() {
  return (
    <>
      <Navbar />
      <DrMaramDadoua />
    </>
  );
}
