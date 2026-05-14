import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrAbdulAzizAlShahrani from '@/components/Common/DrAbdulAzizAlShahrani';

export const metadata: Metadata = {
  title: "Dr. AbdulAziz AlShahrani, IVF and Infertility Consultant | Bnoon - Riyadh",
  description:
    "Consult with Dr. AbdulAziz AlShahrani, a leading IVF and fertility consultant at Bnoon Riyadh, specializing in advanced reproductive medicine.",
};

export default function ServerDrAbdalazizPage() {
  return (
    <>
      <Navbar />
      <DrAbdulAzizAlShahrani />
    </>
  );
}
