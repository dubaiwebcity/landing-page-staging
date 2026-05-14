import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/Layout/Navbar';
import Brochures from '@/components/Common/Brochures';
import FoundingPageBanner from "@/components/Layout/FoundingPageBanner";
export const metadata: Metadata = {
  title: "Patient Education | Bnoon",
  description:
    "Explore Bnoon’s informative content to learn more about fertility, IVF and women’s health.",
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
       <div style={{ position: "relative" }}>
       <FoundingPageBanner bgImage="https://bnoon-website.b-cdn.net/images/banner/en/brochure-banner.jpg" />
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
         
Patient Resources & Brochures
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
