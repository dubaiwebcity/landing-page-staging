import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import AppointmentSection from '@/components/ar/Common/AppointmentSection';

export const metadata: Metadata = {
  title: "احجز موعدك بالرياض وجدة والأحساء | بنون",
  description:
    "احجزوا موعدكم بسهولة مع أطباء بنون في الرياض أو جدة أو الأحساء. نوفر لكم نظام حجز سريع لاستشارات الإخصاب وصحة المرأة لضمان حصولكم على الرعاية في الوقت المناسب.",
};

export default function RequestAppointmentPage() {
  return (
    <>
      <Navbar />

      <OptimizedPageBanner imageName="request-appointment-banner-ar" />

      <AppointmentSection />
    </>
  );
}
