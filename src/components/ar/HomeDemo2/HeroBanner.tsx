'use client';

import React, { useState, useEffect, useRef } from 'react';
import { getBookNowUrl } from '@/utils/booking';

function HeroBannerAr() {
  const [bgPosition, setBgPosition] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // ✅ Slides (video + text + buttonLink)
  const slides = [

    {
      video: 'https://bnoon-website.b-cdn.net/videos/banner/ar/banner3.mp4',
      title: '<span class="font-program">برنامج</span> وعد بنون',

      desc: 'الحمل أو استرداد الرسوم:<br>راحة بال. توتر أقل.',
      titleColor: '#004E78',
      descColor: '#004E78',
      extra: 'تطبق الشروط والأحكام',
      buttonLink: 'ar/waad-bnoon-program',
      buttonText: 'استكشفوا المزيد',
    },
    {
      video: 'https://bnoon-website.b-cdn.net/videos/banner/ar/banner4.mp4',
      title: 'المستقبل الواعد في <br>مجال علاجات الإخصاب',
      desc: 'الآن في الرياض وجدة والأحساء  ',
      buttonLink: getBookNowUrl('ar'),
      buttonText: 'احجز الآن',
    },
    {
      video: 'https://bnoon-website.b-cdn.net/videos/banner/ar/banner5.mp4',
      title: 'من الحلم إلى <br>البدايات الجديدة',
      desc: 'الأمل يبدأ مع بنون',
      titleColor: '#004E78',
      descColor: '#004E78',
      buttonLink: getBookNowUrl('ar'),
      buttonText: 'احجز الآن',
    },
    {
      video: 'https://bnoon-website.b-cdn.net/videos/banner/ar/banner6.mp4',
      title:
        'تقديم الرعاية لأكثر من <br><span class="highlight-number">5000</span> من الأزواج سنويًا',
      desc: 'لتحقيق حلمهم في الأمومة والأبوة',
      titleColor: '#004E78',
      descColor: '#004E78',
      buttonLink: getBookNowUrl('ar'),
      buttonText: 'احجز الآن',
    },
    {
      video: 'https://bnoon-website.b-cdn.net/videos/banner/ar/banner7.mp4',
      title: 'الجيل القادم من <br>علاجات الإخصاب',
      desc: 'الآن في السعودية',
      buttonLink: getBookNowUrl('ar'),
      buttonText: 'احجز الآن',
    },
    {
      video: 'https://bnoon-website.b-cdn.net/videos/banner/ar/banner8.mp4',
      title: 'ابدأوا رحلتكم نحو الأمومة <br>والأبوة مع بنون',
      desc: 'احجزوا موعدكم معنا اليوم',
      titleColor: '#004E78',
      descColor: '#004E78',
      buttonLink: getBookNowUrl('ar'),
      buttonText: 'احجز الآن',
    },
  ];

  // ✅ Auto slide change (10s)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
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
        const speed = 0.2;
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
    const timer = setTimeout(() => setAnimate(true), 900);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div
      ref={bannerRef}
      className="second-banner-area"
      dir="rtl"
      style={{
        position: 'relative',
        width: '100%',
        height: '521px',
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
        <div className={`second-banner-content ${animate ? 'reveal-text' : 'hidden-text'}`}>
          <h1
            style={{ color: slides[currentSlide].titleColor || '#fff' }}
            dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
            className="animated-heading"
          />

          <p
            className="animated-desc"
            dangerouslySetInnerHTML={{
              __html: slides[currentSlide].desc,
            }}
            style={{ color: slides[currentSlide].descColor || '#fff' }}
          />

          <div className="banner-btn">
            <a
              href={slides[currentSlide].buttonLink}
              {...(slides[currentSlide].buttonLink.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="btn btn-success btn-appointment explore-btn btn-banner"
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

      {/* 🔹 Dots */}
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
      <style jsx global>{`
        .font-program {
          color: #808080 !important;
          font-size: 50px !important;
        }
        .hidden-text {
          opacity: 0;
          transform: translateX(80px);
        }
        .reveal-text {
          opacity: 1;
          transform: translateX(0);
          transition: all 1.5s ease;
        }
        @media (max-width: 768px) {
          .font-program {
            font-size: 13px !important;
          }
          .explore-btn {
            width: 100px;
            border-radius: 6px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default HeroBannerAr;
