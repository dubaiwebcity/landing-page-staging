import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import ContactUsSection from '@/components/ar/Common/ContactUsSection';
import MediaSection from '@/components/ar/Common/MediaSection';

export const metadata: Metadata = {
  title: "رحلة الأمومة والأبوة مع بنون، تواصلوا معنا | بنون",
  description:
    "تواصل مع مراكز بنون للإخصاب وصحة المرأة اليوم. احجزوا موعدكم في الرياض أو جدة أو الأحساء لبدء رحلتكم نحو الأمومة والأبوة مع أفضل الخبراء في هذا المجال.",
};

export default function ContactUsPage() {
  return (
    <>
      <Navbar />

      <OptimizedPageBanner imageName="contact-us-banner-ar" />
      <ContactUsSection />
      <MediaSection />
    </>
  );
}
