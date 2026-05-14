import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrMoussaElNaiemy from '@/components/Common/DrMoussaElNaiemy';

export const metadata: Metadata = {
  title: "Dr. Mussa AlNumi, Andrology Consultant | Bnoon- Riyadh",
  description:
    "Meet Dr. Mussa AlNumi, an expert Andrology Consultant at Bnoon Riyadh, specializing in male infertility and the latest in advanced reproductive medicine.",
};

export default function ServerDrMoussaElNaiemyPage() {
  return (
    <>
      <Navbar />
      <DrMoussaElNaiemy />
    </>
  );
}
