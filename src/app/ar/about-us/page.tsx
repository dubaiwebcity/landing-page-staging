import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import AboutusSection from '@/components/ar/Common/AboutusSection';
import WhoAreWe from '@/components/ar/Common/WhoAreWe';

export const metadata: Metadata = {
  title: "تعرف علينا | بنون",
  description:
    "تعرف على بنون، الشبكة الرائدة لمراكز الإخصاب وصحة المرأة في السعودية، المتميزة في عمليات الحقن المجهري والتلقيح الاصطناعي وعلم الوراثة الإنجابية في فروعنا بالرياض وجدة والأحساء.",
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="aboutus-banner-ar" />
      <AboutusSection />
      <WhoAreWe />
    </>
  );
}
