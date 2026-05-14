import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import PostEggRetrieval from '@/components/Common/PostEggRetrieval';

export const metadata: Metadata = {
  title: "Post Operative Egg Retrieval | Bnoon",
  description:
    "Learn about essential post-operative care following egg retrieval at Bnoon. We ensure transparent medical care that respects your privacy and dignity always.",
};

export default function ServerPatientsRightsPage() {
  return (
    <div className="">
      <Navbar />
      <PostEggRetrieval />
    </div>
  );
}
