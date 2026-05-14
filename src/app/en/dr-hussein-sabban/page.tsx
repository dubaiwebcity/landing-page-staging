import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrHusseinSabban from '@/components/Common/DrHusseinSabban';

export const metadata: Metadata = {
  title: "Dr. Hussein Sabban, IVF and Infertility Consultant - Jeddah | Bnoon",
  description:
    "Meet Dr. Hussein Sabban, an IVF and infertility expert at Bnoon Jeddah, specializing in advanced assisted reproductive treatments and expert fertility care.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ServerDrHusseinSabbanPage() {
  return (
    <>
      <Navbar />
      <DrHusseinSabban />
    </>
  );
}
