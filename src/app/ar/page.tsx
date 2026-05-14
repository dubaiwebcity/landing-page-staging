import type { Metadata } from 'next';
import ArabicHomeClient from '@/components/ar/ArabicMeta/HomePage';

export const metadata: Metadata = {
  title: "أفضل شبكة لمراكز الإخصاب وصحة المرأة في السعودية | بنون",
  description:
    "من خلال شبكة تضم أكثر من 5 مراكز متطورة في السعودية، تقدّم بنـــــون الجيل القادم من رعاية الخصوبة وصحة المرأة عبر أحدث التقنيات والمختبرات المتقدمة المدعومة بالذكاء الاصطناعي والخبرة الطبية المتخصصة على يد نخبة من استشاريو الإخصاب وعلاج العقم. لتحقيق أفضل النتائج الممكنة.",
};

export default function ArabicHomePage() {
  return <ArabicHomeClient />;
}
