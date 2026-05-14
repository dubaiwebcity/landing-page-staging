import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import DrDaliaNour from '@/components/ar/Common/DrDaliaNour';

export const metadata: Metadata = {
  title: "د. داليا عادل، استشارية أمراض النساء والولادة وتأخر الحمل | بنون - الرياض",
  description:
    "احجزي موعدك مع الدكتورة داليا عادل، استشارية أمراض النساء والولادة وتأخر الحمل في مركز بنون بالرياض، المتخصصة في صحة المرأة والولادة بأعلى مستويات الرعاية الطبية.",
};

export default function DrDaliaNourPage() {
  return (
    <>
      <Navbar />
      <DrDaliaNour />
    </>
  );
}
