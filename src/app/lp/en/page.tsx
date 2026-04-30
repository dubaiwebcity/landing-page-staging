import type { Metadata } from 'next';
import LandingPage from './_components/LandingPage';

export const metadata: Metadata = {
  title: 'Bnoon | Saudi Arabia',
  description: '',
};

export default function Page() {
  return <LandingPage />;
}
