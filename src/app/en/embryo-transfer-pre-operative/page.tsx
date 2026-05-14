import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import PreEmbryoTransfer from '@/components/Common/PreEmbryoTransfer';

export const metadata: Metadata = {
  title: "Pre Operative Embryo Transfer | Bnoon",
  description:
    "Prepare for your embryo transfer with Bnoon’s pre-operative guidance. We are committed to providing transparent medical care that respects your privacy.",
};

export default function ServerPatientsRightsPage() {
  return (
    <div className="">
      <Navbar />
      <PreEmbryoTransfer />
    </div>
  );
}
