import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import TeamsSection from '@/components/ar/Common/TeamsSection';

export const metadata: Metadata = {
  title: "انضم لفريقنا الطبي المتميز | بنون",
  description:
    "انضم إلى فريق بنون الطبي المتميز وساهم في تعزيز الابتكار والتعليم والأبحاث في مجال طب الخصوبة. اكتشف فرصاً مهنية واعدة في الرياض وجدة والأحساء.",
};

export default function JoinOurTeamPage() {
  return (
    <>
      <Navbar />

      <OptimizedPageBanner imageName="join-team-banner-ar" />

      <TeamsSection />
    </>
  );
}
