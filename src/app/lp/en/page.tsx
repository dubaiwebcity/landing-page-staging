import type { Metadata } from 'next';
import LandingPage from './_components/LandingPage';

export const metadata: Metadata = {
  title: 'Bnoon Fertility & Women\'s Health Centers | IVF in Saudi Arabia',
  description: 'Building families across Saudi Arabia through advanced fertility care. IVF, ICSI, Genetic Testing, Egg Freezing and more — across 5 locations.',
};

export default function Page() {
  return <LandingPage />;
}
