import type { Metadata } from 'next';
import Blogs from '@/components/Common/Blogs';
import Navbar from '@/components/Layout/Navbar';

export const metadata: Metadata = {
   robots: {
    index: false,
    follow: false,
  },
  title: 'Bnoon | Saudi Arabia’s Best Fertility & Women’s Network ',
  description:
    'Bnoon Medical Center specializes in fertility, we provide the necessary examinations and treatments for the couple. We realize that every man and woman is unique, according their individual health problems. Depending on the individual circumstances of each case, we develop a specialized treatment plan as well as the emotional, physical and financial needs.',
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Blogs />
    </>
  );
}
