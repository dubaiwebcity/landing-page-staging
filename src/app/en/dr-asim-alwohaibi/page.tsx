import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrAsimAlWohaibi from '@/components/Common/DrAsimAlWohaibi';

export const metadata: Metadata = {
  title: "Dr. Asim Alwohaibi, Fertility Consultant  | Bnoon - Riyadh",
  description:
    "Consult with Dr. Asim Alwohaibi, a leading fertility consultant at Bnoon in Riyadh. Expert care for IVF, ICSI, and advanced infertility treatments awaits you.",
};

export default function ServerDrAsimAlwohaibiPage() {
  return (
    <>
      <Navbar />
      <DrAsimAlWohaibi />
    </>
  );
}
