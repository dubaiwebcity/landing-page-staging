import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import EmbryoTransferPreOperative from '@/components/ar/Common/EmbryoTransferPreOperative';

export const metadata: Metadata = {
  title: "ما قبل عملية إرجاع الأجنة | بنون",
  description:
    "اطلعي على تعليمات ما قبل عملية إرجاع الأجنة في بنون حيث نلتزم بضمان حقوقكم كمرضى وتقديم رعاية طبية مهنية تتسم بالشفافية والخصوصية في جميع مراحل العلاج.",
};

export default function ServerPatientsRightsPage() {
  return (
    <div className="patient-rights-page no-footer">
      <Navbar />
      <EmbryoTransferPreOperative />
    </div>
  );
}
