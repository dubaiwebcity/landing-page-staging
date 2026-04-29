'use client';
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { getBookNowUrl } from '@/utils/booking';

const DrMaramDadoua = () => {
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
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/ar">الصفحة الرئيسية</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="our-experts">أطباؤنا</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
             الدكتورة دينا الكحيمي 
            </li>
          </ol>
        </nav>

        {/* Riyadh Section */}
        <div className="row g-4 mt-5">
          <div className="col-xl-7 col-md-12">
            <div className="service-overview-content doctor-content">
              <h2
                ref={contentRefRiyadh}
                className={`animate-left ${contentVisibleRiyadh ? 'show' : ''}`}
              >
               الدكتورة دينا الكحيمي 
              </h2>
              <p className="profile-text">أخصائية أمراض النساء والولادة والعقم وأطفال الأنابيب</p>
              <p className="profile-text">الموقع: بنون - الرياض</p>
              <p className="profile-text-last">
                اللغات:
                <span className="lang-box">الإنجليزية</span>
                <span className="lang-box">العربية</span>
              </p>

              <p>الدكتورة دينا الكحيمي هي طبيبة متخصصة في الغدد الصماء التناسلية والعقم وتأخر الحمل في بنـــــون – الرياض. أنهت زمالتها في طب العقم وجراحة الإخصاب في مستشفى الملك فيصل التخصصي ومركز الأبحاث بالرياض عام 2024، وذلك بعد إكمالها برنامج الإقامة في أمراض النساء والولادة عام 2021. كما حصلت على البورد السعودي في أمراض النساء والولادة عام 2022.   </p>
              <p>تحمل الدكتورة دينا درجة البكالوريوس في الطب والجراحة من جامعة الملك سعود، وأتمّت سنة الامتياز في مستشفى الملك خالد الجامعي.   </p>
              <p>تتمتع الدكتورة دينا بخبرة متخصصة في تقييم حالات تأخر الحمل ووضع الخطط العلاجية الفردية، مع تركيز خاص على تقنيات الإخصاب المساعد، بما في ذلك أطفال الأنابيب والحقن المجهري، إضافة إلى الفحوصات الوراثية للأجنة قبل الإرجاع. كما تشمل ممارستها السريرية التعامل مع الحالات المعقدة مثل فشل الانغراس المتكرر والإجهاض المتكرر، إلى جانب اضطرابات الغدد الصماء التناسلية والاختلالات الهرمونية.  </p>
              <p>وإلى جانب عملها السريري، تشارك الدكتورة دينا بشكل فعّال في الأنشطة البحثية والأكاديمية، ولها إسهامات في مجالات المناعة التناسلية والإجهاض المتكرر والتشخيص الوراثي للأجنة قبل الإرجاع. كما تشارك بشكل مستمر في المؤتمرات العلمية ومبادرات التوعية بصحة الخصوبة، تأكيداً لالتزامها المستمر بتطوير خدمات علاج الخصوبة ودعم الأزواج خلال رحلتهم العلاجية. 

 {' '}
              </p>
            </div>
          </div>

          <div className="col-xl-5 col-md-12 image-column">
            <div>
              <OptimizedImage
                imageName="dr-dina"
                className="doctors-overview-image"
                alt="Bnoon Riyadh"
              />
            </div>
            <div className="text-center mt-3">
              <a href={getBookNowUrl('ar')} className="btn btn-success doctor-profile-btn">
                طلب موعد
              </a>
            </div>
          </div>
          <div className="col-xl-12 col-md-12">
            <div className="service-overview-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrMaramDadoua;
