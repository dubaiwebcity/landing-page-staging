import type { Metadata } from 'next';
import Feedbacks from '@/components/Common/Feedbacks';
import HowItWorks from '@/components/Common/HowItWorks';
import OurDoctors from '@/components/Common/OurDoctors';
import Benefits from '@/components/Common/Benefits';
import OurServices from '@/components/HomeDemo2/OurServices';
import HeroBanner from '@/components/HomeDemo2/HeroBanner';
import FrequentlyAskedQuestions from '@/components/HomeDemo1/FrequentlyAskedQuestions';
import OurBlog from '@/components/Common/OurBlog';
import Navbar from '@/components/Layout/Navbar';
import HowItWorksStyle2 from '@/components/Common/HowItWorksStyle2';
import AboutUs from '@/components/HomeDemo2/AboutUs';
import StayConnected from '@/components/Common/StayConnected';
import FertilityTeam from '@/components/Common/FertilityTeam';
import SearchBar from '@/components/Common/SearchBar';
import Popup from '@/components/Common/Popup';

export const metadata: Metadata = {
  title: "Saudi Arabia's Best Fertility & Women's Health Network  | Bnoon",
  description:
    "Choose Bnoon, Saudi Arabia’s leading fertility & women's health network. We provide the full spectrum of advanced fertility treatments for couples on their parenthood journey.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Popup />

      <HeroBanner />

      <SearchBar />

      <Benefits />

      <OurServices />

      <OurBlog />

      <HowItWorksStyle2 />

      <OurDoctors />

      <FertilityTeam />

      <AboutUs />

      <Feedbacks />

      <FrequentlyAskedQuestions />

      <HowItWorks />

      <StayConnected />
    </>
  );
}
