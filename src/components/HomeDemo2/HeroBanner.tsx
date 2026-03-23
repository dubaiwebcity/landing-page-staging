'use client';

import React, { useState, useEffect, useRef } from 'react';
import { getBookNowUrl } from '@/utils/booking';

function HeroBanner() {
  const [bgPosition, setBgPosition] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // ✅ Slides (video + text + buttonLink)
  const slides = [

    {
      video: 'https://bnoon-website.b-cdn.net/videos/banner/en/banner3.mp4',
      title: "<span class='rowdies-font'>WA'AD BNOON</span> <span class='oregano-font'>PROGRAM</span>",
      desc: '<strong>Get Pregnant or Your Money Back:</strong><br><em>Peace of Mind. Less Stress</em>',
      titleColor: '#004E78',
      descColor: '#004E78',
      extra: '*Terms & Conditions Apply',
      buttonLink: 'en/waad-bnoon-program',
      buttonText: 'Read More',
      descClass: 'special-desc',
    },
    {
      video: 'https://bnoon-website.b-cdn.net/videos/banner/en/banner4.mp4',
      title: 'THE FUTURE OF<br>FERTILITY IS HERE',
      desc: 'Now in Riyadh, Jeddah and Al Ahsa',
      buttonLink: getBookNowUrl('en'),
      buttonText: 'Book Now',
    },
    {
      video: 'https://bnoon-website.b-cdn.net/videos/banner/en/banner5.mp4',
      title: 'TURNING DREAMS INTO <br>NEW BEGINNINGS ',
      desc: 'Hope begins with Bnoon',
      titleColor: '#004E78',
      descColor: '#004E78',
      buttonLink: getBookNowUrl('en'),
      buttonText: 'Book Now',
    },
    {
      video: 'https://bnoon-website.b-cdn.net/videos/banner/en/banner6.mp4',
      title: 'OVER 5,000 FAMILIES <br>HELPED ANNUALLY',
      desc: 'Compassionate care to achieve <br>their dream of parenthood ',
      titleColor: '#004E78',
      descColor: '#004E78',
      buttonLink: getBookNowUrl('en'),
      buttonText: 'Book Now',
    },
    {
      video: 'https://bnoon-website.b-cdn.net/videos/banner/en/banner7.mp4',
      title: 'THE NEXT-GENERATION <br>OF FERTILITY CARE',
      desc: 'Now in Saudi Arabia',
      buttonLink: getBookNowUrl('en'),
      buttonText: 'Book Now',
    },
    {
      video: 'https://bnoon-website.b-cdn.net/videos/banner/en/banner8.mp4',
      title: 'START YOUR PARENTHOOD <br>JOURNEY WITH BNOON',
      desc: 'Book your appointment today',
      titleColor: '#004E78',
      descColor: '#004E78',
      buttonLink: getBookNowUrl('en'),
      buttonText: 'Book Now',
    },
  ];

  // ✅ Auto slide change (10s)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 13000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // ✅ Control video playback — play active, pause others
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === currentSlide) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });

    // Preload next slide's video
    const nextIndex = (currentSlide + 1) % slides.length;
    const nextVideo = videoRefs.current[nextIndex];
    if (nextVideo && nextVideo.preload === 'none') {
      nextVideo.preload = 'metadata';
    }
  }, [currentSlide, slides.length]);

  // ✅ Throttled parallax scroll
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!bannerRef.current) {
          ticking = false;
          return;
        }
        const speed = 0.5;
        setBgPosition(-(window.scrollY * speed));
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Trigger reveal animation on slide change
  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 500); // wait until video fade-in
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div
      ref={bannerRef}
      className="second-banner-area"
      style={{
        position: 'relative',
        width: '100%',
        height: '525px',
        overflow: 'hidden',
        backgroundPosition: `center ${bgPosition}px`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* 🔹 Video Background Slider — all slides stay in DOM to prevent re-fetch */}
      {slides.map((slide, index) => {
        const isActive = currentSlide === index;
        const isAdjacent =
          (currentSlide + 1) % slides.length === index ||
          (currentSlide - 1 + slides.length) % slides.length === index;
        return (
          <video
            key={index}
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            loop
            muted
            playsInline
            preload={isActive ? 'auto' : isAdjacent ? 'metadata' : 'none'}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: -1,
              opacity: isActive ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              visibility: isActive || isAdjacent ? 'visible' : 'hidden',
            }}
          >
            <source src={slide.video} type="video/mp4" />
          </video>
        );
      })}

      {/* 🔹 Text Content */}
      <div className="container">
        <div
          className={`second-banner-content ${
            animate ? 'reveal-text' : 'hidden-text'
          }`}
        >
          <h1
            style={{ color: slides[currentSlide].titleColor || '#fff' }}
            dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
          />

          <p
            className={slides[currentSlide].descClass || ''}
            dangerouslySetInnerHTML={{ __html: slides[currentSlide].desc }}
            style={{ color: slides[currentSlide].descColor || '#fff' }}
          />

          <div className="banner-btn">
            <a
              href={slides[currentSlide].buttonLink}
              {...(slides[currentSlide].buttonLink.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="btn btn-success btn-appointment explore-appointment btn-banner book-appointment-btn"
            >
              {slides[currentSlide].buttonText}
            </a>
          </div>

          <p
            className="terms-text"
            dangerouslySetInnerHTML={{
              __html: slides[currentSlide].extra || '',
            }}
            style={{
              color: slides[currentSlide].descColor || '#fff',
            }}
          />
        </div>
      </div>

      {/* 🔹 Slider Dots */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
        }}
      >
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: currentSlide === index ? 'white' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
          />
        ))}
      </div>

      {/* 🔹 Reveal Animation CSS */}
      <style jsx>{`
        .hidden-text {
          opacity: 0;
          transform: translateX(-80px);
        }
        .reveal-text {
          opacity: 1;
          transform: translateX(0);
          transition: all 1.5s ease;
        }
        /* Custom style ONLY for Slide 1 Desc */
        .special-desc {
          margin-top: 18px;
          line-height: 1.7;
        }
        @media (max-width: 767px) {
          .explore-appointment {
            width: 100px;
            border-radius: 6px;
          }
          .campagin-banner {
            width: 58%;
          }
        }
      `}</style>
    </div>
  );
}

export default HeroBanner;
