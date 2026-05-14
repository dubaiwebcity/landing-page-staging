import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import SemenCollectionInstructions from '@/components/ar/Common/SemenCollectionInstructions';

export const metadata: Metadata = {
  title: "تعليمات جمع السائل المنوي | بنون",
  description:
    "اتبع تعليمات جمع السائل المنوي لضمان دقة الفحوصات. نلتزم في بنون بتقديم رعاية طبية متقدمة وفق أعلى المعايير الصحية في المملكة.",
};

export default function ServerPatientsRightsPage() {
  return (
    <div className="patient-rights-page no-footer">
      <Navbar />
      <SemenCollectionInstructions />
    </div>
  );
}
