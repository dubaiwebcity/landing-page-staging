import type { Metadata } from 'next';
import LandingPage from './_components/LandingPage';

export const metadata: Metadata = {
  title: 'مراكز بنون | المملكة العربية السعودية',
  description: '',
};

export default function Page() {
  return <LandingPage />;
}
