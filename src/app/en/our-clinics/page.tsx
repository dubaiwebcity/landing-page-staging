import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import OurLocations from '@/components/Common/OurLocations';

export const metadata: Metadata = {
  title: "Visit Our Fertility & Women's Health Clinics in KSA | Bnoon",
  description:
    "Visit Bnoon’s fertility and women’s health centers in Riyadh, Jeddah, and Al Ahsa. We offer top-tier IVF and infertility services at convenient locations across KSA.",
};

export default function OurClinicsPage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="clinics-banner" />
      <OurLocations />
    </>
  );
}
