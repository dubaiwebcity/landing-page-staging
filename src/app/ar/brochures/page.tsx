import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import Brochures from '@/components/ar/Common/Brochures';
import FoundingPageBanner from "@/components/ar/Layout/FoundingPageBanner";
export const metadata: Metadata = {
  title: 'نبذة عنّا – بنون',
  description:
    'تعرّفوا على بنون، شبكة مراكز الإخصاب وصحة المرأة الرائدة في السعودية. نقدم رعاية شاملة بأحدث التقنيات الطبية في الرياض وجدة والأحساء.',
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
<div style={{ position: "relative" }}>

  <FoundingPageBanner bgImage="https://bnoon-website.b-cdn.net/images/banner/ar/brochure-banner.jpg" />

  {/* ✅ FIX: ensure overlay is above image */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      zIndex: 5,
      pointerEvents: "none",
    }}
  />

  <div className="container">
    <div
      className="second-banner-content reveal-text text-banner"
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 20,
      }}
    >
      <h1 style={{ color: "#0c4a5b" }}>
        <span className="rowdies-font text-size">
          الموارد والكتيبات للمرضى
        </span>
      </h1>

      <p style={{ color: "#fff" }} className="special-desc"></p>
      <p style={{ color: "#fff" }} className="terms-text"></p>
    </div>
  </div>

</div>
      <Brochures />
    </>
  );
}
