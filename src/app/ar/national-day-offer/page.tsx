import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import NationalDayOffer from '@/components/ar/Common/NationalDayOffer';

export const metadata: Metadata = {
  title: 'عروض اليوم الوطني للإخصاب | بنون',
  description:
    'احتفل باليوم الوطني مع عروض بنون الحصرية لعمليات الإخصاب. استفد من خصومات مميزة على أحدث علاجات الخصوبة وخدمات الصحة الإنجابية لتحقيق حلمك في الإنجاب.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="national-day-banner-ar" />
      <NationalDayOffer />
    </>
  );
}
