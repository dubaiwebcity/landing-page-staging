import type { Metadata } from "next";
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import ReferaPatient from '@/components/ar/Common/ReferaPatient';

export const metadata: Metadata = {
  title: "طلب تحويل مريض لرعاية متقدمة للخصوبة | بنون",
  description:
    "لرعاية منخصصة في علاج نأخر الحمل والعقم، يمكنكم تحويل مريض إلى بنون، الشبكة الرائدة لمراكز الإخصاب وصحة المرأة في المملكة العربية السعودية حيث نقدم أكثر العلاجات تقدماً والرعاية الشاملة لجميع الحالات المعقدة.",
};

export default function ReferaPatientPage() {
  return (
    <>
      <Navbar />

      <div style={{ position: "relative" }}>
        <OptimizedPageBanner imageName="referpaitent-banner-ar" />

        {/* Overlay Text */}
        <div
          dir="rtl"
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: "100%",
            transform: "translateY(-50%)",
            textAlign: "right",
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <div className="container">
            <h2
              style={{
                fontSize: "clamp(12px, 5vw, 55px)",
                fontWeight: 700,
                margin: 0,
                color: "#004E78",
              }}
            >
              طلب تحويل مريض
            </h2>
          </div>
        </div>
      </div>

      <ReferaPatient />
    </>
  );
}
