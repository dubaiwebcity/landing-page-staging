import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrBassam from '@/components/Common/DrBassam';

export const metadata: Metadata = {
  title: 'Dr. Bassam Nusair  – Best Fertility Doctor in Al Ahsa | Bnoon ',
  description:
    'Dr. Bassam Nusair, fertility consultant at Bnoon Al Ahsa. Specialized in IVF, ICSI, and advanced infertility treatments.',
};

export default function ServerDrBassamPage() {
  return (
    <>
      <Navbar />
      <DrBassam />
    </>
  );
}
