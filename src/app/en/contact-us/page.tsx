import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import ContactUsSection from '@/components/Common/ContactUsSection';
import MediaSection from '@/components/Common/MediaSection';

export const metadata: Metadata = {
  title: "Start Your Parenthood Journey - Contact Us Today | Bnoon",
  description:
    "Contact Bnoon’s fertility and women’s health centers today. Book your appointment in Riyadh, Jeddah, or Al Ahsa to begin your personalized parenthood journey.",
};

export default function ContactUsPage() {
  return (
    <>
      <Navbar />

      <OptimizedPageBanner imageName="contact-us-banner" />
      <ContactUsSection />
      <MediaSection />
    </>
  );
}
