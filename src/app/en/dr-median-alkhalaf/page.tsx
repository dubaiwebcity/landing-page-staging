import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrMedianAlkhalaf from '@/components/Common/DrMedianAlkhalaf';

export const metadata: Metadata = {
  title: "Dr. Median Alkhalaf, OBGYN Consultant | Bnoon - Al Ahsa",
  description:
    "Meet Dr. Median Alkhalaf, a skilled OBGYN Consultant at Bnoon Al Ahsa, specializing in women’s health, obstetrics, and comprehensive gynecological services.",
};

export default function ServerDrMedianAlkhalafPage() {
  return (
    <>
      <Navbar />
      <DrMedianAlkhalaf />
    </>
  );
}
