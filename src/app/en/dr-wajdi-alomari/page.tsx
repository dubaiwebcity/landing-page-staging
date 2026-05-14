import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrWajdiAlOmari from '@/components/Common/DrWajdiAlOmari';

export const metadata: Metadata = {
  title: "Dr. Wajdi Al Omari, IVF & Fertility Consultant | Bnoon - Riyadh",
  description:
    "Consult with Dr. Wajdi Al Omari, a dedicated fertility and IVF consultant at Bnoon Riyadh, providing expert IVF, ICSI, and advanced infertility treatment solutions.",
};

export default function ServerDrWajdiAlomariPage() {
  return (
    <>
      <Navbar />
      <DrWajdiAlOmari />
    </>
  );
}
