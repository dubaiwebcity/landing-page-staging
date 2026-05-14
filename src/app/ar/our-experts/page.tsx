import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import FertilityDoctor from '@/components/ar/Common/FertilityDoctor';
import OurExperts from '@/components/ar/Common/OurExperts';

export const metadata: Metadata = {
  title: "أطباء أطفال الأنابيب وأمراض النساء وأمراض الذكورة  | بنون",
  description:
    "تعرفوا على فريق خبراء بنون المتميز من أطباء أطفال الأنابيب وأمراض النساء وأمراض الذكورة. نخبة من المتخصصين في الخصوبة بانتظاركم في فروعنا بالرياض وجدة والأحساء اليوم.",
};

export default function OurExpertsPage() {
  return (
    <>
      <Navbar />

      <OptimizedPageBanner imageName="experts-banner-ar" />

      <OurExperts />

      <FertilityDoctor />
    </>
  );
}
