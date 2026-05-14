import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import PaitentRights from '@/components/Common/PaitentRights';

export const metadata: Metadata = {
  title: "Know Your Patient Rights | Bnoon",
  description:
    "Understand your patient rights at Bnoon. We are dedicated to providing transparent, fair medical care that prioritizes your privacy, dignity, and well-being.",
};

export default function ServerPatientsRightsPage() {
  return (
    <div className="">
      <Navbar />
      <PaitentRights />
    </div>
  );
}
