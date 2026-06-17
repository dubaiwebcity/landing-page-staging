'use client';

import React, { useEffect, useRef, useState } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { LocationIcon, MailIcon } from '@/components/icons';

const Alahsaharea = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [imgVisible, setImgVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  // Intersection Observer for animation
  useEffect(() => {
    const observerImg = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImgVisible(true);
          observerImg.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    const observerText = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible(true);
          observerText.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (imgRef.current) observerImg.observe(imgRef.current);
    if (textRef.current) observerText.observe(textRef.current);

    return () => {
      observerImg.disconnect();
      observerText.disconnect();
    };
  }, []);

  return (
    <div className="service-overview-area mb-5 mt-3 mt-lg-5">
      <div className="container">
        {/* Jeddah Section */}
        <div className="row justify-content-center align-items-center g-4 flex-column-reverse flex-md-row mt-lg-5">
          <div className="col-xl-6 col-md-12 image-loc">
            <div
              ref={imgRef}
              className={`mb-3 service-overview-image ${imgVisible ? 'animate-left show' : 'animate-left'}`}
              style={{
                boxShadow: '50px 50px 0px #d7f2fb',
                overflow: 'hidden',
                display: 'inline-block',
              }}
            >
              <OptimizedImage
                imageName="location-alahsa"
                alt="Bnoon Al Ahsa"
                width={580}
                height={450}
              />
            </div>
          </div>

          <div className="col-xl-6 col-md-12">
            <div
              ref={textRef}
              className={`service-overview-content ${textVisible ? 'animate-right show' : 'animate-right'}`}
            >
              <h2>بنون – الأحساء</h2>
              <p>
                يقدّم مركز بنون – الأحساء الواقع داخل{' '}
                <strong>
                  <a
                    href="https://almoosahealthgroup.org/ar/hospital-services/%d9%85%d8%b1%d9%83%d8%b2-%d8%a8%d9%86%d9%88%d9%86-%d9%84%d9%84%d8%a5%d8%ae%d8%b5%d8%a7%d8%a8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hospital-link"
                  >
                    مستشفى الموسى التخصصي
                  </a>
                </strong>{' '}
                خدمات رعاية الخصوبة وصحة المرأة بمعايير عالمية، ليكون الوجهة الأولى للعائلات في
                المنطقة الشرقية في السعودية. وقد صُمّم المركز ليمنح المرضى تجربة علاجية متميّزة تجمع
                بين أحدث التقنيات في الطب الإنجابي ورعاية متكاملة تُعنى بكل تفاصيل رحلة الزوجين.
              </p>{' '}
              <p>
                ويمثّل هذا المركز جزءاً من شبكة بنون المتنامية، والتي تهدف إلى توفير خدمات الخصوبة
                المتقدمة لكافة أنحاء المملكة، من خلال فريق من استشاريي أطفال الأنابيب ذوي الخبرة،
                وبيئة طبية متطورة تُطبق أفضل الممارسات العالمية.{' '}
              </p>
              <p>
                يضم بنون – الأحساء مختبرات أجنة حديثة تعتمد تقنيات دقيقة في مراقبة الأجنة واختيارها،
                كما يقدّم مجموعة شاملة من الخدمات تشمل: التلقيح الصناعي والحقن المجهري والتلقيح داخل
                الرحم وحفظ وتجميد البويضات والحيوانات المنوية، والفحوصات الجينية قبل الزرع (PGT-AI)
                واضطرابات الغدد التناسلية وتشخيصات دقيقة لحالات العقم لدى النساء والرجال.{' '}
              </p>
              <p>
                ويتميّز مركز بنون – الأحساء بتعاونه مع مختلف الأقسام في مستشفى الموسى التخصصي، مما
                يضمن رحلة علاجية سلسة ضمن بيئة علاجية تدعم المريض في كل خطوة نحو تحقيق النتائج
                المنشودة.{' '}
              </p>
              <p>
                يمثّل بنون – الأحساء نقلة نوعية في تطوير خدمات الخصوبة بالمنطقة الشرقية، إذ يجمع بين
                الابتكار الطبي، والتميّز الطبي، والالتزام بدعم كل أسرة في رحلتها نحو الأمومة
                والأبوة.{' '}
              </p>
              <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center mt-3 gap-3 gap-md-4">
                <div className="d-flex align-items-center">
                  <LocationIcon
                    width={24}
                    height={24}
                    className="me-2"
                    style={{ color: 'rgb(0,78,120)' }}
                  />
                  <a
                    href="https://maps.app.goo.gl/HJVWsJkXzVNvk4bn7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-color text-decoration-none"
                  >
                    بنون – الأحساء{' '}
                  </a>
                </div>

                <div className="d-flex align-items-center">
                  <MailIcon
                    width={24}
                    height={24}
                    className="me-2"
                    style={{ color: 'rgb(0,78,120)' }}
                  />
                  <a href="mailto:info@bnoon.sa" className="text-color">
                    info@bnoon.sa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hospital-link {
          color: #404040;
        }
        a.text-color {
          color: #004e78 !important;
          margin-right: 10px;
          direction: ltr;
        }
        span.text-color {
          color: #004e78 !important;
          font-size: 16px !important;
          margin-right: 10px;
        }
        .location-text h2 {
          margin-bottom: 10px;
        }
        .image-loc {
          text-align: left;
        }
        @media (max-width: 767px) {
          span.text-color {
            color: #004e78 !important;
            font-size: 14px !important;
            margin-right: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Alahsaharea;
