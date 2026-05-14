import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/Layout/Navbar';
import FeedbackSection from '@/components/Common/FeedbackSection';

export const metadata: Metadata = {
  title: "Submit Your Feedback | Bnoon",
  description:
    "Share your experience with Bnoon. Your valuable feedback and suggestions help us enhance our services to provide the best possible healthcare for every patient.",
};

export default function SubmitFeedbackServer() {
  return (
    <>
      <Navbar />

      <OptimizedPageBanner imageName="feedback-banner" />

      <FeedbackSection />
    </>
  );
}
