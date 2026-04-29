'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OptimizedImage from '@/components/ui/OptimizedImage';
type LocationType = 'الرياض' | 'جدة' | 'الأحساء' | '';

const SearchBar = () => {
  const [doctor, setDoctor] = useState('');
  const [location, setLocation] = useState<LocationType>('');
  const router = useRouter();

  const headerRef = useRef<HTMLHeadingElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const doctorMenu = document.querySelector('.doctor-menu');
      const locationMenu = document.querySelector('.location-menu');

      // Close doctor menu if click is outside
      if (
        doctorMenu &&
        !doctorMenu.contains(target) &&
        !target.classList.contains('doctor-select') &&
        doctorMenu.classList.contains('open')
      ) {
        doctorMenu.classList.remove('open');
      }

      // Close location menu if click is outside
      if (
        locationMenu &&
        !locationMenu.contains(target) &&
        !target.classList.contains('location-select') &&
        locationMenu.classList.contains('open')
      ) {
        locationMenu.classList.remove('open');
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // ✅ Intersection Observer for heading animation
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

  // ✅ Doctors data (Arabic keys match type)
  const doctorsByLocation: Record<Exclude<LocationType, ''>, string[]> = {
    الرياض: [
      'الدكتور عبد العزيز  الشهراني',
      'الدكتور عاصم الوهيبي',
      'الدكتور وجدي  العمري',
      'الدكتورة داليا  نور',
      'الدكتورة دينا الكحيمي',
      'الدكتور موسى  النعمي',
    ],
    جدة: [
      'الدكتور فواز  إدريس',
      'الدكتور مازن بشارة',
      'الدكتور أحمد الشيخ',
      'الدكتورة مايا البزرة',
      'الدكتور أحمد هارون',
      'الدكتورة رزان غيث',
      'الدكتورة مرام دعدوع',
    ],
    الأحساء: [
      'الدكتور بسام نصير',
      'الدكتور أحمد النويصر',
      'الدكتور مدين الخلف ',
      'الدكتورة رانيا الشريفي',
    ],
  };

  const allDoctors = [
    ...doctorsByLocation.الرياض,
    ...doctorsByLocation.جدة,
    ...doctorsByLocation.الأحساء,
  ];

  // ✅ Doctor profile links (Arabic names mapped to URLs)
  const doctorProfileLinks: Record<string, string> = {
    'الدكتور عبد العزيز  الشهراني': '/ar/dr-abdalaziz-alshahrani',
    'الدكتور فواز  إدريس': '/ar/dr-fawaz-edris',
    'الدكتور مازن بشارة': '/ar/dr-mazin-bishara',
    'الدكتور بسام نصير': '/ar/dr-bassamnusair',
    'الدكتور عاصم الوهيبي': '/ar/dr-asim-alwohaibi',
    'الدكتور أحمد الشيخ': '/ar/dr-ahmed-alshaikh',
    'الدكتور وجدي  العمري': '/ar/dr-wajdi-alomari',
    'الدكتور أحمد النويصر': '/ar/dr-ahmedal-nowasser',
    'الدكتورة مايا البزرة': '/ar/dr-maya-albezreh',
    'الدكتورة داليا  نور': '/ar/dr-dalia-nour',
    'الدكتور أحمد هارون': '/ar/dr-ahmad-haroun',
    'الدكتور موسى  النعمي': '/ar/dr-moussa-el-naiemy',
    'الدكتورة رزان غيث': '/ar/dr-razan-ghaith',
    'الدكتور مدين الخلف ': '/ar/dr-median-alkhalaf',
    'الدكتورة دينا الكحيمي': '/ar/dr-dina-alkehaimi',
    'الدكتورة مرام دعدوع': '/ar/dr-maram-dadoua',
    'الدكتورة رانيا الشريفي': '/ar/dr-rania-elsherify',
  };
  const orderedDoctors = Object.keys(doctorProfileLinks);
const doctorsToShow = location
  ? doctorsByLocation[location as Exclude<LocationType, ''>]
  : orderedDoctors;

  // ✅ Handle search
  const handleSearch = () => {
    if (!location && !doctor) {
      alert('الرجاء اختيار الطبيب أو الموقع');
      return;
    }

    // ✅ If doctor is selected, go to their profile page directly
    if (doctor) {
      const profileUrl = doctorProfileLinks[doctor];
      if (profileUrl) {
        router.push(profileUrl);
        return;
      }
    }

    // ✅ If only location is selected, go to /ar/our-experts and filter
    if (location) {
      router.push(`/ar/our-experts?location=${encodeURIComponent(location)}`);
    }
  };

  return (
    <div className="partner-area ptb-140">
      <div className="container">
        <div className="search-overview-content">
          <h2 ref={headerRef} className={`animate-right ${headerVisible ? 'show' : ''}`}>
            ابحث عن طبيب
          </h2>
          <p>
            من خلال الموقع الإلكتروني لدينا، نساعدك على التواصل مع نخبة من أطبائنا الرائدين المختصين
            بعلاجات الإخصاب۔
          </p>
        </div>

        {/* ✅ Search Bar */}
        <div className="search-bar doctor-bar">
          <div className="custom-dropdown">
            <button
              className="dropdown-btn doctor-select"
              style={{ color: doctor === '' ? '#757575ff' : '#000' }}
              onClick={() => {
                const doctorMenu = document.querySelector('.doctor-menu');
                const locationMenu = document.querySelector('.location-menu');

                doctorMenu?.classList.toggle('open');
                locationMenu?.classList.remove('open');
              }}
            >
              <span>{doctor || 'حسب اسم الطبيب'}</span>
              <OptimizedImage imageName="arrow" className="arrow-icon" alt="" />
            </button>

            <ul className="dropdown-menu doctor-menu">
              {doctorsToShow.map((doc, i) => (
                <li
                  key={i}
                  className="search-dropdown-item dropdown-item"
                  onClick={() => {
                    setDoctor(doc);
                    document.querySelector('.doctor-menu')?.classList.remove('open');
                  }}
                >
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          <div className="custom-dropdown">
            <button
              className="dropdown-btn location-select"
              style={{ color: doctor === '' ? '#757575ff' : '#000' }}
              onClick={() => {
                const locationMenu = document.querySelector('.location-menu');
                const doctorMenu = document.querySelector('.doctor-menu');

                locationMenu?.classList.toggle('open');
                doctorMenu?.classList.remove('open');
              }}
            >
              <span>{location || 'حسب الموقع'}</span>
              <OptimizedImage imageName="arrow" className="arrow-icon" alt="" />
            </button>

            <ul className="dropdown-menu location-menu">
              <li
                className="search-dropdown-item dropdown-item"
                onClick={() => {
                  setLocation('الرياض');
                  setDoctor('');
                  document.querySelector('.location-menu')?.classList.remove('open'); // 💥 FIX
                }}
              >
                الرياض
              </li>

              <li
                className="search-dropdown-item dropdown-item"
                onClick={() => {
                  setLocation('جدة');
                  setDoctor('');
                  document.querySelector('.location-menu')?.classList.remove('open'); // 💥 FIX
                }}
              >
                جدة
              </li>

              <li
                className="search-dropdown-item dropdown-item"
                onClick={() => {
                  setLocation('الأحساء');
                  setDoctor('');
                  document.querySelector('.location-menu')?.classList.remove('open'); // 💥 FIX
                }}
              >
                الأحساء
              </li>
            </ul>
          </div>

          <button onClick={handleSearch} className="search-button">
            ابحث
          </button>
        </div>
      </div>

      {/* ✅ Animation CSS */}
      <style jsx global>{`
    
      `}</style>
    </div>
  );
};

export default SearchBar;
