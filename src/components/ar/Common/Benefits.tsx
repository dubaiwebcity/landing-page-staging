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
    <div className="service-overview-area mb-5 ">
      <div className="container">
        <div className="row justify-content-center g-4">
          <div
            className={`col-xl-6 col-md-12 animate-left ${leftVisible ? 'active' : ''}`}
            ref={leftRef}
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? 'translateX(0)' : 'translateX(50px)',
              transition: 'all 0.5s ease-out',
            }}
          >
            <div className="service-overview-content">
              <h2>بنون – الشبكة الرائدة لمراكز الإخصاب وصحة المرأة</h2>
              <h4>هنا من أجلكم... لنحوّل آمالكم إلى بدايات جديدة</h4>
              <p>
                بنون" هي جزء من شبكة جلوبال فيرتيليتي ، شركة سعودية-إماراتية تعد إحدى أكبر شبكات"
                الإخصاب وصحةالمرأة وأسرعها نمواً في الشرق الأوسط۔
              </p>
              <p>
                   في "بنون"، نؤمن أن رعاية الخصوبة يجب أن تكون إنسانية بقدر ما هي طبية. ولهذا صممنا
                تجربة تتمحور حولكم — تقدم لكم الرعاية الطبية والدعم والتفهم، والراحة في كل خطوة۔
              </p>
              <p>
                ​
                <strong>
                  سواء كنتم لا تزالون تحاولون فهم سبب تأخر الحمل، أو تدركون أنكم بحاجة إلى علاج
                  يساعدكم على تحقيق حلم الأبوة والأمومة —
                </strong>{' '}
                نحن إلى جانبك بخيارات تشخيصية وعلاجية متقدمة، واستشاريين تثقون بهم، وبيئة دافئة
                تُشعركم وكأنكم بين أسرتكم۔
              </p>
            </div>
          </div>

          <div
            className={`col-xl-6 col-md-12 animate-right ${rightVisible ? 'active' : ''}`}
            ref={rightRef}
            style={{
              opacity: rightVisible ? 1 : 0,
              transform: rightVisible ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'all 0.5s ease-out',
            }}
          >
            <div
              className="service-overview-image mb-5"
              style={{
                boxShadow: '-50px 50px 0px #d7f2fb',
                overflow: 'hidden',
                display: 'inline-block',
              }}
            >
              <div className="image-wrapper benefit-image">
                {imageNames.map((name, index) => (
                  <OptimizedImage
                    key={name}
                    imageName={name}
                    className={`slide-image ${index === currentIndex ? 'active' : ''} responsive-image`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                ))}
              </div>
              {/* ✅ Responsive style only for mobile */}
              <style jsx global>{`
    .image-wrapper {
  position: relative;
  width: 100%;
  height: 432px; /* apny hisab se adjust karlena */
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
  .service-overview-content h2 {
    font-size: 32px;
    margin-bottom: 80px !important;
    color: #004E78;
  }
    .service-overview-content {
    padding-left: 0;
    margin: 25px 0px 0px 0px !important;
}
  .service-overview-content h4 {
    font-size: 20px !important;
    font-weight: 400 !important;
    color: #004E78;
    margin-bottom: 40px;
  }
  .service-overview-image {
    width: 544px;
    align-items: flex-start;
    margin: 0 40px 0 0px;
  }
  @media (max-width: 768px) {
   .service-overview-content h2 {
    font-size: 18px;
    margin-bottom: 15px !important;
    color: #004E78;
  }
     .service-overview-content h4 {
    font-size: 12px !important;
    font-weight: 400 !important;
    color: #004E78;
    margin-bottom: 15px;
  }
    .service-overview-image {
      box-shadow: 20px 20px 0px #d7f2fb;
      width: 85% !important;
      
    margin: 0 0px 25px 0px !important;
    }
    .service-overview-content {
    padding-left: 0;
    margin: 0px 0px 0px 0px !important;
}
    .responsive-image {
      width: 100% !important;
      height: auto !important;
    }
       .image-wrapper {
  position: relative;
  width: 100%;
  height: 200px; /* apny hisab se adjust karlena */
  overflow: hidden;
}
          .service-overview-image {
        box-shadow: 20px 20px 0px #d7f2fb; /* smaller shadow for mobile */
        width: 85% !important;
      }

      .responsive-image {
        width: 100% !important;
        height: auto !important;
      }
    }
  }
`}</style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
