'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OptimizedImage from '@/components/ui/OptimizedImage';

type LocationType = 'Riyadh' | 'Jeddah' | 'Al Ahsa' | '';

const SearchBar = () => {
  const [doctor, setDoctor] = useState('');
  const [location, setLocation] = useState<LocationType>('');
  const router = useRouter();

  const doctorDropdownRef = useRef<HTMLDivElement>(null);
  const locationDropdownRef = useRef<HTMLDivElement>(null);
  const doctorProfileLinks: Record<string, string> = {
    'Dr. Abdalaziz Al-Shahrani': '/en/dr-abdalaziz-alshahrani',
    'Dr. Fawaz Edris': '/en/dr-fawaz-edris',
    'Dr. Mazin Bishara': '/en/dr-mazin-bishara',
    'Dr. Bassam Nusair': '/en/dr-bassamnusair',
    'Dr. Asim Al Wohaibi': '/en/dr-asim-alwohaibi',
    'Dr. Ahmed Alshaikh': '/en/our-ex/en/dr-ahmed-alshaikh',
    'Dr. Wajdi Al Omari': '/en/dr-wajdi-alomari',
    'Dr. Ahmed Al-Nowasser': '/en/dr-ahmedal-nowasser',
    'Dr. Maya Albezreh': '/en/dr-maya-albezreh',
    'Dr. Dalia Nour': '/en/dr-dalia-nour',
    'Dr. Ahmad Haroun': '/en/dr-ahmad-haroun',
    'Dr. Mussa AlNumi': '/en/dr-moussa-el-naiemy',
    'Dr. Razan Ghaith': '/en/dr-razan-ghaith',
    'Dr. Median Alkhalaf': '/en/dr-median-alkhalaf',
    'Dr. Maram Dadoua': '/en/dr-maram-dadoua',

    'Dr. Rania Elsherify': '/en/dr-rania-elsherify',
  };
  const orderedDoctors = Object.keys(doctorProfileLinks);

  const handleSearch = () => {
    if (!doctor && !location) {
      alert('Please select a doctor or location');
      return;
    }

    if (doctor) {
      const profileUrl = doctorProfileLinks[doctor];
      if (profileUrl) {
        router.push(profileUrl);
        return;
      }
    }

    const params = new URLSearchParams();
    if (location) params.append('location', location);

    router.push(`/en/our-experts?${params.toString()}`);
  };

  const headerRef = useRef<HTMLHeadingElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (doctorDropdownRef.current && !doctorDropdownRef.current.contains(event.target as Node)) {
        document.querySelector('.doctor-menu')?.classList.remove('open');
      }

      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(event.target as Node)
      ) {
        document.querySelector('.location-menu')?.classList.remove('open');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const doctorsByLocation: Record<Exclude<LocationType, ''>, string[]> = {
    Riyadh: [
      'Dr. Abdalaziz Al-Shahrani',
      'Dr. Asim Al Wohaibi',
      'Dr. Wajdi Al Omari',
      'Dr. Dalia Nour',
      'Dr. Mussa AlNumi',
    ],
    Jeddah: [
      'Dr. Fawaz Edris',
      'Dr. Mazin Bishara',
      'Dr. Ahmed Alshaikh',
      'Dr. Maya Albezreh',
      'Dr. Ahmad Haroun',
      'Dr. Razan Ghaith',
      'Dr. Maram Dadoua',
    ],
    'Al Ahsa': [
      'Dr. Bassam Nusair',
      'Dr. Ahmed Al-Nowasser',
      'Dr. Median Alkhalaf',
      'Dr. Rania Elsherify',
    ],
  };

  const allDoctors = [
    ...doctorsByLocation.Riyadh,
    ...doctorsByLocation.Jeddah,
    ...doctorsByLocation['Al Ahsa'],
  ];
  const doctorsToShow = location
    ? orderedDoctors.filter((doc) =>
        doctorsByLocation[location as Exclude<LocationType, ''>].includes(doc),
      )
    : orderedDoctors;

  return (
    <div className="partner-area ptb-140">
      <div className="container">
        <div className="search-overview-content">
          <h2 ref={headerRef} className={`animate-left ${headerVisible ? 'show' : ''}`}>
            Find a Doctor
          </h2>
          <p>
            Let us help you connect with one of our leading doctors or healthcare professionals.
          </p>
        </div>

        {/* Search Bar */}
        <div className="search-bar doctor-bar">
          {/* Doctor Dropdown */}
          <div className="custom-dropdown" ref={doctorDropdownRef}>
            <button
              className="dropdown-btn doctor-select"
              onClick={() => {
                const doctorMenu = document.querySelector('.doctor-menu');
                const locationMenu = document.querySelector('.location-menu');
                // Toggle doctor menu
                doctorMenu?.classList.toggle('open');
                // Close location menu if open
                locationMenu?.classList.remove('open');
              }}
            >
              <span className={doctor ? 'selected-text' : 'placeholder-text'}>
                {doctor || 'Select Doctor'}
              </span>

              <OptimizedImage imageName="arrow" className="arrow-icon" alt="" />
            </button>
            <div className="dropdown-menu doctor-menu">
              {doctorsToShow.map((doc, i) => (
                <div
                  key={i}
                  className="search-dropdown-item dropdown-item"
                  onClick={() => {
                    setDoctor(doc);
                    document.querySelector('.doctor-menu')?.classList.remove('open');
                  }}
                >
                  {doc}
                </div>
              ))}
            </div>
          </div>

          {/* Location Dropdown */}
          <div className="custom-dropdown" ref={locationDropdownRef}>
            <button
              className="dropdown-btn location-select"
              onClick={() => {
                const locationMenu = document.querySelector('.location-menu');
                const doctorMenu = document.querySelector('.doctor-menu');
                // Toggle location menu
                locationMenu?.classList.toggle('open');
                // Close doctor menu if open
                doctorMenu?.classList.remove('open');
              }}
            >
              <span className={location ? 'selected-text' : 'placeholder-text'}>
                {location || 'By Location'}
              </span>

              <OptimizedImage imageName="arrow" className="arrow-icon" alt="" />
            </button>
            <div className="dropdown-menu location-menu">
              {['Riyadh', 'Jeddah', 'Al Ahsa'].map((loc, i) => (
                <div
                  key={i}
                  className="search-dropdown-item dropdown-item"
                  onClick={() => {
                    setLocation(loc as LocationType);
                    setDoctor('');
                    document.querySelector('.location-menu')?.classList.remove('open');
                  }}
                >
                  {loc}
                </div>
              ))}
            </div>
          </div>

          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
      </div>

      {/* CSS for animation and dropdowns */}
      <style jsx>{`
      
      `}</style>
    </div>
  );
};

export default SearchBar;
