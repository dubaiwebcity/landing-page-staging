import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import EggRetrievalPreOperative from '@/components/ar/Common/EggRetrievalPreOperative';

export const metadata: Metadata = {
  title: "ما قبل عملية سحب البويضات | بنون",
  description:
    "اتبعي تعليمات ما قبل عملية سحب البويضات في بنون لضمان أفضل النتائج. نلتزم بتقديم رعاية طبية شفافة تحترم خصوصيتكم وفق المعايير الصحية االمعتمدة.",
};

export default function ServerPatientsRightsPage() {
  return (
    <div className="patient-rights-page no-footer">
      <Navbar />
      <EggRetrievalPreOperative />
    </div>
  );
}
