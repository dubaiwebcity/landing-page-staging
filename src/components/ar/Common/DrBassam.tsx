'use client';
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';

import { getBookNowUrl } from '@/utils/booking';

const DrFawazEdris = () => {
  const contentRefRiyadh = useRef<HTMLDivElement>(null);
  const imageRefRiyadh = useRef<HTMLDivElement>(null);
  const contentRefKing = useRef<HTMLDivElement>(null);
  const imageRefKing = useRef<HTMLDivElement>(null);

  const [contentVisibleRiyadh, setContentVisibleRiyadh] = useState(false);
  const [imageVisibleRiyadh, setImageVisibleRiyadh] = useState(false);
  const [contentVisibleKing, setContentVisibleKing] = useState(false);
  const [imageVisibleKing, setImageVisibleKing] = useState(false);

  useEffect(() => {
    const observerContentRiyadh = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentVisibleRiyadh(true);
          observerContentRiyadh.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (contentRefRiyadh.current) observerContentRiyadh.observe(contentRefRiyadh.current);

    const observerImageRiyadh = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageVisibleRiyadh(true);
          observerImageRiyadh.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (imageRefRiyadh.current) observerImageRiyadh.observe(imageRefRiyadh.current);

    const observerContentKing = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentVisibleKing(true);
          observerContentKing.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (contentRefKing.current) observerContentKing.observe(contentRefKing.current);

    const observerImageKing = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageVisibleKing(true);
          observerImageKing.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (imageRefKing.current) observerImageKing.observe(imageRefKing.current);

    return () => {
      observerContentRiyadh.disconnect();
      observerImageRiyadh.disconnect();
      observerContentKing.disconnect();
      observerImageKing.disconnect();
    };
  }, []);

  return (
    <div className="service-overview-area mb-5 mt-3">
      <div className="container">
        {/* Breadcrumbs */}
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" className="mt-lg-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/ar/">الصفحة الرئيسية</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="our-experts">أطباؤنا</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              الدكتور بسام نصير
            </li>
          </ol>
        </nav>

        {/* Riyadh Section */}
        <div className="row g-4 mt-lg-5">
          <div className="col-xl-7 col-md-12">
            <div className="service-overview-content doctor-content">
              <h2
                ref={contentRefRiyadh}
                className={`animate-left ${contentVisibleRiyadh ? 'show' : ''}`}
              >
                الدكتور بسام نصير
              </h2>
              <p className="profile-text">
                استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب والمناظير
              </p>
              <p className="profile-text">الموقع: بنون - الأحساء</p>

              <p className="profile-text-last">
                اللغات:
                <span className="lang-box">الإنجليزية</span>
                <span className="lang-box">العربية</span>
              </p>

              <p>
                يعمل
                الدكتور بسام نصيركاستشاري أمراض النساء والولادة والعقم وأطفال الأنابيب والمناظير في
                بنون – الأحساء (الواقع داخل مستشفى الموسى التخصصي) ويتمتع بخبرة تمتد لقرابة الثلاث
                عقود في مجال طب الإنجاب، من خلال عمله في أبرز المؤسسات الطبية في الشرق الأوسط
                والمملكة المتحدة. حصل على بكالوريوس الطب والجراحة من جامعة العلوم والتكنولوجيا
                الأردنية، كما نال البورد الأردني في أمراض النساء والتوليد، وأكمل زمالات متقدمة في
                الطب والجراحة الإنجابية ضمن الخدمات الطبية الملكية الأردنية، وكذلك في مستشفى كلية
                الملك بلندن التابع لهيئة الخدمات الصحية الوطنية NHS، أحد أهم المراكز العالمية في طب
                الإنجاب.{' '}
              </p>

              <p>
                وشغل الدكتور بسام مناصب عليا كاستشاري في العقم وأطفال الأنابيب وعلاج الغدد الصماء
                التناسلية في مستشفيات رائدة ومنها مستشفى الموسى التخصصي في السعودية ومستشفى فرح
                للنساء والأطفال ومدينة الحسين الطبية في الأردن، كما تولّى رئاسة أقسام أمراض النساء
                والتوليد والعقم والجراحة التناسلية في عدد من مستشفيات الخدمات الطبية الملكية، حيث
                قاد برامج علاجية وجراحية متقدمة وأسهم في تطوير خدمات الإخصاب.{' '}
              </p>
              <p>
                ويتمتّع الدكتور بسّام بسجلّ علمي واسع يشمل عشرات الأبحاث المنشورة في مجلات علمية
                عالمية في مجال طب الإنجاب وأمراض النساء والولادة كما شارك في تعليم طلبة الطب بصفته
                أستاذ في الجامعة الأردنية وجامعة مؤتة، مساهماً في تدريب وتأهيل الجيل القادم من
                الأطباء في طب النساء والإنجاب.
              </p>
              <p>
                يعزّز الدكتور بسام نصير التزام بنون بتقديم رعاية متخصصة في العقم وأطفال الأنابيب،
                والارتقاء بخدمات صحة المرأة في المنطقة الشرقية في السعودية.{' '}
              </p>
            </div>
          </div>

          <div className="col-xl-5 col-md-12 d-flex flex-column justify-content-center text-center image-column">
            <OptimizedImage
              imageName="dr-bassam"
              className="doctors-overview-image"
              alt="Bnoon Riyadh"
            />
            <div className="mt-3">
              <a href={getBookNowUrl('ar')} className="btn btn-success doctor-profile-btn">
                طلب موعد
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        /* Mobile Responsive */
      `}</style>
    </div>
  );
};

export default DrFawazEdris;
