import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/Layout/Navbar';
import TelemedicineSection from '@/components/Common/TelemedicineSection';

export const metadata: Metadata = {
  title: "Telemedicine Consultations | Bnoon",
  description:
    "Learn more about Bnoon's telemedicine consultations with our IVF consultants for expert reproductive health advice and care.",
};

export default function TelemedicinePage() {
  return (
    <>
      <Navbar />
      {/* PageBanner with static content */}
      <OptimizedPageBanner imageName="telemedicine-banner" />
      <TelemedicineSection />
    </>
  );
}
