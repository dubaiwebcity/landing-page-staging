import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/Layout/Navbar';
import ReferaPatient from '@/components/Common/ReferaPatient';

export const metadata: Metadata = {
  title: "Refer a Patient for Expert Fertility Care | Bnoon",
  description:
    "Refer your patients to Bnoon, Saudi Arabia’s premier fertility and women’s health network, for expert care and advanced reproductive medical solutions today.",
};

export default function ReferaPatientPage() {
  return (
    <>
      <Navbar />

      <div style={{ position: 'relative' }}>
        <OptimizedPageBanner imageName="refer-patient-banner" />
 <div className="container">
        <div
         className="second-banner-content reveal-text text-banner"
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
          }}
        >
          
           <h2 style={{ color: '#004E78' }}>
             <span className="rowdies-font text-size">
  REFER A PATIENT</span>
</h2>
         
        </div>
      </div>
</div>
      <ReferaPatient />
    </>
  );
}
