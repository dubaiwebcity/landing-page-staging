import type { Metadata } from 'next';
import LandingPage from './_components/LandingPage';

export const metadata: Metadata = {
  title: 'مراكز بنون للخصوبة وصحة المرأة | أطفال الأنابيب في المملكة العربية السعودية',
  description: 'بناء الأسر عبر المملكة العربية السعودية من خلال رعاية متقدمة للخصوبة. أطفال الأنابيب، الحقن المجهري، الفحوصات الجينية، تجميد البويضات وأكثر — في 5 مواقع.',
};

export default function Page() {
  return <LandingPage />;
}
