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
    <div className="doctors-overview-area mb-5 mt-3">
      <div className="container">
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/en">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="our-experts">Our Experts</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dr. Dina Alkehaimi
            </li>
          </ol>
        </nav>

        {/* Riyadh Section */}
        <div className="row g-4 mt-lg-5">
          <div className="col-xl-7 col-md-12">
            <div className="doctors-overview-content ">
              <h2
                ref={contentRefRiyadh}
                className={`animate-left ${contentVisibleRiyadh ? 'show' : ''}`}
              >
                Dr. Dina Alkehaimi 
              </h2>
              <p className="profile-text">Senior Registrar, Obstetrics, Gynecology, Reproductive Endorincology & Infertility (IVF) </p>
              <p className="profile-text">Location: Bnoon – Riyadh </p>
              <p className="profile-text-last">
                Languages:
                <span className="lang-box">English</span>
                <span className="lang-box">Arabic</span>
              </p>

              <p>
                Dr. Dina Alkehaimi is a trained specialist in Reproductive Endocrinology and Infertility at Bnoon – Riyadh. She completed her fellowship in Reproductive Endocrinology and Infertility at King Faisal Specialist Hospital & Research Center in Riyadh in 2024, following her residency in Obstetrics and Gynecology in 2021. She is also Saudi Board–certified in Obstetrics and Gynecology since 2022. 
              </p>
              <p>
                Dr. Dina holds a Bachelor of Medicine and Surgery (MBBS) from King Saud University and completed her medical internship at King Khalid University Hospital.  
              </p>
              <p>
               Dr. Dina brings focused expertise in infertility evaluation and individualized treatment planning, with particular interest in assisted reproductive technologies, including IVF and ICSI, as well as preimplantation genetic testing (PGT). Her clinical practice also encompasses the management of complex fertility conditions such as recurrent implantation failure and recurrent pregnancy loss, alongside reproductive endocrinology and hormonal disorders.  {' '}
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
              <a href={getBookNowUrl('en')} className="btn btn-success doctor-profile-btn">
                Request an Appointment
              </a>
            </div>
          </div>
          <div className="col-xl-12 col-md-12">
            <div className="doctor-overview-content ">
              <p>
             In addition to her clinical work, Dr. Dina is actively engaged in research and academic activities, with contributions to studies in reproductive immunology, recurrent pregnancy loss, and preimplantation genetic diagnosis. She regularly participates in scientific meetings and fertility awareness initiatives, reflecting her ongoing commitment to advancing fertility care and supporting patients throughout their journey. 
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrMaramDadoua;
