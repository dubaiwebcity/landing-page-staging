import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/Layout/Navbar';
import TeamsSection from '@/components/Common/TeamsSection';

export const metadata: Metadata = {
  title: "Join Our Team | Innovation, Education & Research  | Bnoon",
  description:
    "Join Bnoon's medical team to advance your career in reproductive medicine, research and innovation. Explore rewarding opportunities in Riyadh, Jeddah, and Al Ahsa clinics.",
};

export default function JoinOurTeamPage() {
  return (
    <>
      <Navbar />

      <OptimizedPageBanner imageName="join-team-banner" />

      <TeamsSection />
    </>
  );
}
