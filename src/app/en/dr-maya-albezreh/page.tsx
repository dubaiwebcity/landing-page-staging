import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrMayaAlbezreh from '@/components/Common/DrMayaAlbezreh';

export const metadata: Metadata = {
  title: "Dr. Maya Albezreh, OBGYN and IVF Consultant | Bnoon - Jeddah",
  description:
    "Consult with Dr. Maya Albezreh, an expert OBGYN and IVF Consultant at Bnoon Jeddah, specializing in women’s health and advanced reproductive medical services.",
};

export default function ServerDrMayaAlbezrehPage() {
  return (
    <>
      <Navbar />
      <DrMayaAlbezreh />
    </>
  );
}
