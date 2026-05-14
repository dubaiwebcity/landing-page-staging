import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import EmbryoTransferPostOperative from '@/components/ar/Common/EmbryoTransferPostOperative';

export const metadata: Metadata = {
  title: "ما بعد عملية إرجاع الأجنة | بنون",
  description:
    "احصلي على إرشادات الرعاية اللازمة بعد عملية إرجاع الأجنة. نلتزم في بنون بتقديم الدعم الطبي والشفافية الكاملة لضمان راحتكم وسلامتكم في كل خطوة من رحلتكم.",
};

export default function ServerPatientsRightsPage() {
  return (
    <div className="patient-rights-page no-footer">
      <Navbar />
      <EmbryoTransferPostOperative />
    </div>
  );
}
