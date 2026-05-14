import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/Layout/Navbar';
import FertilityTabs from '@/components/Common/FertilityTabs';
import CustomList from '@/components/Common/CustomList';

export const metadata: Metadata = {
  title: "Fertility Guide - All Your Need to Know About Your Fertility | Bnoon",
  description:
    "Access Bnoon’s comprehensive fertility guide for reliable medical info on infertility causes, treatments, and expert tips to improve your conception chances.",
};

export default function FertilityGuidePage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <OptimizedPageBanner imageName="fertility-guide-banner" />
      <FertilityTabs />
    </>
  );
}
