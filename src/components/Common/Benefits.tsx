'use client';

import React, { useState, useEffect, useRef } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';

const Benefits = () => {
  const benefitsData = [
    {
      id: 1,
      title: 'Convenient & Fast',
      description: 'See a doctor within minutes—no waiting rooms.',
    },
    {
      id: 2,
      title: 'Certified Doctors',
      description: 'Licensed professionals in multiple specialties.',
    },
    {
      id: 3,
      title: 'Private & Secure',
      description: 'End-to-end encrypted, HIPAA-compliant platform.',
    },
    {
      id: 4,
      title: 'Affordable Pricing',
      description: 'Transparent pricing, with or without insurance.',
    },
  ];

  const imageNames = ['benefit-1', 'benefit-2', 'benefit-3'] as const;

  const [currentIndex, setCurrentIndex] = useState(0);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  // Slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageNames.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imageNames.length]);

  // Scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftRef.current) setLeftVisible(true);
            if (entry.target === rightRef.current) setRightVisible(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="service-overview-area">
      <div className="container">
        <div className="row justify-content-center align-items-center g-4">
          <div
            className={`col-xl-6 col-md-12 animate-left ${leftVisible ? 'active' : ''}`}
            ref={leftRef}
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'all 0.5s ease-out',
            }}
          >
            <div className="service-overview-content">
              <h2>Bnoon - The Fertility &amp; Women&apos;s Health Network</h2>
              <h4>Fertility Care Made for You</h4>
              <p>
                Bnoon is part of the Saudi-Emirati Global Fertility Network (GFN), one of the Middle
                East&apos;s fastest-growing networks dedicated to fertility, reproductive genetics
                and women&apos;s health.
              </p>
              <p>
                At Bnoon, we&apos;re redefining how fertility care is delivered — making it more
                personal, more human, and built entirely around you. We know this journey can be
                overwhelming — and that&apos;s why we&apos;ve built a place where you&apos;ll feel
                supported, understood, and cared for, every step of the way.
              </p>
              <p>
                Whether you&apos;re just beginning to explore your options or are already on your
                path to parenthood, we meet you where you are — with world-class fertility
                treatments, an elite group of consultants you can trust, and a space that feels like
                home.
              </p>
            </div>
          </div>

          <div
            className={`col-xl-6 col-md-12 animate-right ${rightVisible ? 'active' : ''}`}
            ref={rightRef}
            style={{
              opacity: rightVisible ? 1 : 0,
              transform: rightVisible ? 'translateX(0)' : 'translateX(50px)',
              transition: 'all 0.5s ease-out',
            }}
          >
            <div
              className="service-overview-image mb-md-0 mb-5"
              style={{
                boxShadow: '50px 50px 0px #d7f2fb',
                overflow: 'hidden',
                display: 'inline-block',
              }}
            >
              <div className="image-wrapper">
                {imageNames.map((name, index) => (
                  <OptimizedImage
                    key={name}
                    imageName={name}
                    className={`slide-image ${index === currentIndex ? 'active' : ''} responsive-image`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                ))}
              </div>
            </div>

            {/* ✅ Responsive style only for mobile */}
            <style jsx>{`
              .image-wrapper {
                position: relative;
                width: 100%;
                height: 436px; /* apny hisab se adjust karlena */
                overflow: hidden;
              }

              .slide-image {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                opacity: 0;
                transition: opacity 1s ease-in-out;
              }

              .slide-image.active {
                opacity: 1;
              }

              .slider {
                position: relative;
                width: 100%;
                height: 100%;
                overflow: hidden;
              }

              .slider img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                opacity: 0;
                transition: opacity 1.2s ease-in-out; /* <-- cross fade speed */
              }

              /* Active image will fade in */
              .slider img.active {
                opacity: 1;
              }

              @media (max-width: 768px) {
                .service-overview-image {
                  box-shadow: 20px 20px 0px #d7f2fb; /* smaller shadow for mobile */
                  width: 85%;
                }

                .responsive-image {
                  width: 100% !important;
                  height: auto !important;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
