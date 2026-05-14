import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import SemenCollection from '@/components/Common/SemenCollection';

export const metadata: Metadata = {
  title: "Semen Collection Instructions | Bnoon",
  description:
    "Follow Bnoon’s clear instructions for semen collection. We are committed to providing professional medical care that respects your privacy and patient rights.",
};

export default function ServerPatientsRightsPage() {
  return (
    <div className="">
      <Navbar />
      <SemenCollection />
    </div>
  );
}
