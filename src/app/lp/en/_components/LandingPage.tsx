'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import ServicesSection from './ServicesSection';
import LocationsSection from './LocationsSection';
import SpecialistsSection from './SpecialistsSection';
import ReviewsSection from './ReviewsSection';
import BookSection from './BookSection';
import Footer from './Footer';
import Modal from './Modal';

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden antialiased text-slate-800">
      <Navbar onBookNow={() => setShowModal(true)} />
      <HeroSection />
      <StatsSection />
      <ServicesSection onBookNow={() => setShowModal(true)} />
      <LocationsSection />
      <SpecialistsSection />
      <ReviewsSection />
      <BookSection />
      <Footer />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
