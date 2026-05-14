import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import PostEmbryoTransfer from '@/components/Common/PostEmbryoTransfer';

export const metadata: Metadata = {
  title: "Post Operative Embryo Transfer | Bnoon",
  description:
    "Receive expert post-operative guidance after your embryo transfer at Bnoon. We are committed to your health and providing transparent care on your journey.",
};

export default function ServerPatientsRightsPage() {
  return (
    <div className="">
      <Navbar />
      <PostEmbryoTransfer />
    </div>
  );
}
