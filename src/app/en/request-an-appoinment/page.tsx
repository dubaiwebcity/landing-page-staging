import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/Layout/Navbar';
import AppointmentSection from '@/components/Common/AppointmentSection';

export const metadata: Metadata = {
  title: "Book an Appointment in Riyadh, Jeddah & Al Ahsa | Bnoon",
  description:
    "Book your appointment with Bnoon’s fertility and IVF consultants in Riyadh, Jeddah, or Al Ahsa. Enjoy quick and easy booking for all your reproductive health needs.",
};

export default function RequestAppointmentServer() {
  return (
    <>
      <Navbar />

      <OptimizedPageBanner imageName="request-appointment-banner" />

      <AppointmentSection />
    </>
  );
}
