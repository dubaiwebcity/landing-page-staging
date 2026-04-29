import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrDinaAlkehaimi from '@/components/Common/DrDinaAlkehaimi';

export const metadata: Metadata = {
  title: 'Dr. Dina Alkehaimi - Best OBGYN Doctor in Jeddah| Bnoon ',
  description:
    "Dr. Dina Alkehaimi, OBGYN consultant at Bnoon Jeddah. Specialized in women's health, obstetrics, and gynecological care.",
};

export default function ServerDrDinaAlkehaimiPage() {
  return (
    <>
      <Navbar />
      <DrDinaAlkehaimi />
    </>
  );
}
