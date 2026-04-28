'use client';

import { useState } from 'react';

import Navbar from './Navbar';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import ServicesSection from './ServicesSection';
import LocationsSection from './LocationsSection';
import DoctorCarousel from './Doctors';
import SpecialistsSection from './SpecialistsSection';
import ReviewsSection from './ReviewsSection';
import BookSection from './BookSection';
import Footer from './Footer';
import Modal from './Modal';

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div dir="rtl" lang="ar" className="rtl relative min-h-screen overflow-hidden antialiased text-zinc-800">
      <Navbar onBookNow={() => setShowModal(true)} />
      <HeroSection />
      <StatsSection />
      <ServicesSection onBookNow={() => setShowModal(true)} />
      <LocationsSection />
      <DoctorCarousel />
      <SpecialistsSection />
      <ReviewsSection />
      <BookSection />
      <Footer />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
