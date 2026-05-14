import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import PreEggRetrieval from '@/components/Common/PreEggRetrieval';

export const metadata: Metadata = {
  title: "Pre Operative Egg Retrieval | Bnoon",
  description:
    "Prepare for your egg retrieval with Bnoon’s pre-operative instructions. We ensure transparent, fair medical care that respects your privacy and patient rights.",
};

export default function ServerPatientsRightsPage() {
  return (
    <div className="">
      <Navbar />
      <PreEggRetrieval />
    </div>
  );
}
