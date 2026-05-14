import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import FeedbackSection from '@/components/ar/Common/FeedbackSection';

export const metadata: Metadata = {
  title: "شاركونا تجربتكم | بنون",
  description:
    "شاركونا تجربتكم في مراكز بنون، حيث تساعدنا ملاحظاتكم واقتراحاتكم القيمة في تحسين جودة خدماتنا وتقديم أفضل رعاية صحية ممكنة لكل زوجين يسعيان لتحقيق حلم الإنجاب.",
};

export default function SubmitFeedbackPage() {
  return (
    <>
      <Navbar />

      <OptimizedPageBanner imageName="feedback-banner-ar" />

      <FeedbackSection />
    </>
  );
}
