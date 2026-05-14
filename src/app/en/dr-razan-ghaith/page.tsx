import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrRazanGhaith from '@/components/Common/DrRazanGhaith';

export const metadata: Metadata = {
  title: "Dr. Razan Ghaith, OBGYN & IVF Doctor | Bnoon - Jeddah",
  description:
    "Consult with Dr. Razan Ghaith, a dedicated OBGYN and IVF Consultant at Bnoon Jeddah, specializing in women’s health and advanced reproductive medicine services.",
};

export default function ServerDrRazanGhaithPage() {
  return (
    <>
      <Navbar />
      <DrRazanGhaith />
    </>
  );
}
