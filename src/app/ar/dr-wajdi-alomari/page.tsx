import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import DrWajdiAlOmari from '@/components/ar/Common/DrWajdiAlOmari';

export const metadata: Metadata = {
  title: "د. وجدي العمري، استشاري الإخصاب وأطفال الأنابيب | بنون - الرياض",
  description:
    "احجزوا موعدكم مع الدكتور وجدي العمري، استشاري الإخصاب وأطفال الأنابيب في مركز بنون بالرياض، الخبير في علاج العقم والحقن المجهري بأحدث الوسائل والتقنيات الطبية.",
};

export default function DrWajdiAlOmariPage() {
  return (
    <>
      <Navbar />
      <DrWajdiAlOmari />
    </>
  );
}
