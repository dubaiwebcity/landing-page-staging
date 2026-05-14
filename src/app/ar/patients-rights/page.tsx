import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import PaitentRights from '@/components/Common/PaitentRights';

export const metadata: Metadata = {
  title: "اعرف حقوق المرضى | بنون",
  description:
    "تعرف على حقوقك كأحد مراجعي مراكز بنون. نحن نلتزم بتقديم رعاية طبية شفافة وعادلة تحترم خصوصيتك وتضمن لك أفضل تجربة علاجية في مجال طب الخصوبة دائماً.",
};

export default function ServerPatientsRightsPage() {
  return (
    <div className="patient-rights-page no-footer">
      <Navbar />
      <PaitentRights />
    </div>
  );
}
