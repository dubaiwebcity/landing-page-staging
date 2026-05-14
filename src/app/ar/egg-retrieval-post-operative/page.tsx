import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import EggRetrievalPostOperative from '@/components/ar/Common/EggRetrievalPostOperative';

export const metadata: Metadata = {
  title: "ما بعد عملية سحب البويضات | بنون",
  description:
    "تعرفي على تعليمات المرضى بعد عملية سحب البويضات في بنون حيث نلتزم بتقديم رعاية طبية شفافة تحترم خصوصيتكم وفقاً لأعلى المعايير الصحية المعتمدة في المملكة.",
};

export default function ServerPatientsRightsPage() {
  return (
    <div className="patient-rights-page no-footer">
      <Navbar />
      <EggRetrievalPostOperative />
    </div>
  );
}
