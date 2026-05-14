import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrAhmedAlshaikh from '@/components/Common/DrAhmedAlshaikh';

export const metadata: Metadata = {
  title: "Dr. Ahmed Al-Shaikh, IVF and Infertility Consultant | Bnoon - Jeddah",
  description:
    "Consult with Dr. Ahmed Al-Shaikh, an IVF and infertility consultant at Bnoon Jeddah, specializing in assisted reproductive treatments and expert fertility care.",
};

export default function ServerDrAhmedAlshaikhPage() {
  return (
    <>
      <Navbar />
      <DrAhmedAlshaikh />
    </>
  );
}
