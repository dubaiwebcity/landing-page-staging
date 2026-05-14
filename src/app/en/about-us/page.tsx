import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/Layout/Navbar';
import AboutusSection from '@/components/Common/AboutusSection';
import WhoAreWe from '@/components/Common/WhoAreWe';

export const metadata: Metadata = {
  title: "About Us | Bnoon",
  description:
    "Discover Bnoon, Saudi Arabia’s leading and fastest-growing fertility & women's health network. We offer advanced IVF and reproductive medicine across our clinics in Riyadh, Jeddah, and Al Ahsa.",
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <OptimizedPageBanner imageName="aboutus-banner" />
      <AboutusSection />
      <WhoAreWe />
    </>
  );
}
