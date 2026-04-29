'use client';

import React from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';
import { getBookingUrl } from '@/utils/booking';

interface Doctor {
  id: number;
  name: string;
  qualification: string;
  imageName: string;
  profileLink: string;
  location?: string;
}

const OurDoctors = () => {
  // ✅ Sample doctor data
  // ✅ FIX: Hooks must be inside the component
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);
  const doctorsData: Doctor[] = [
    {
      id: 1,
      name: 'Dr. Abdalaziz Al-Shahrani',
      qualification:
        'Group Medical Director Consultant, Obstetrics, Gynecology, Reproductive Endorinology, Infertility (IVF) & Minimally Invasive Surgery',
      imageName: 'doctor-grid-1',
      profileLink: 'en/dr-abdalaziz-alshahrani',
      location: 'Riyadh',
    },
    {
      id: 2,
      name: 'Dr. Fawaz Edris',
      qualification:
        'Executive Director, Bnoon - Jeddah Consultant, Obstetrics, Gynecology, Reproductive Endocrinology, Infertility (IVF), Minimally Invasive Surgery & Maternal Fetal Medicine',
      imageName: 'doctor-grid-2',
      profileLink: 'en/dr-fawaz-edris',
      location: 'Jeddah',
    },
    {
      id: 3,
      name: 'Dr. Mazin Bishara',
      qualification:
        'Medical Director, Bnoon - Jeddah Consultant, Obstetrics, Gynecology,  Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery',
      imageName: 'doctor-grid-3',
      profileLink: 'en/dr-mazin-bishara',
      location: 'Jeddah',
    },
    {
      id: 4,
      name: 'Dr. Bassam Nusair ',
      qualification:
        'Consultant, Obstetrics, Gynecology, Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery',
      imageName: 'doctor-grid-15',
      profileLink: 'en/dr-bassamnusair',
      location: 'Al Ahsa ',
    },
    {
      id: 5,
      name: 'Dr. Asim Al Wohaibi',
      qualification:
        'Consultant, Obstetrics, Gynecology,  Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery',
      imageName: 'doctor-grid-4',
      profileLink: 'en/dr-asim-alwohaibi',
      location: 'Riyadh',
    },

    {
      id: 6,
      name: 'Dr. Ahmed Alshaikh',
      qualification:
        'Consultant, Obstetrics, Gynecology,  Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery',
      imageName: 'doctor-grid-6',
      profileLink: 'en/dr-ahmed-alshaikh',
      location: 'Jeddah',
    },
    {
      id: 7,
      name: 'Dr. Wajdi Al Omari',
      qualification:
        'Consultant, Obstetrics, Gynecology,  Reproductive Endocrinology & Infertility (IVF), Minimally Invasive Surgery',
      imageName: 'doctor-grid-7',
      profileLink: 'en/dr-wajdi-alomari',
      location: 'Riyadh',
    },
    {
      id: 8,
      name: 'Dr. Ahmed Al-Nowasser',
      qualification:
        'Consultant, Obstetrics, Gynecology, Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery',
      imageName: 'doctor-grid-16',
      profileLink: 'en/dr-ahmedal-nowasser',
      location: 'Al Ahsa ',
    },
    {
      id: 9,
      name: 'Dr. Maya Albezreh',
      qualification:
        'Consultant, Obstetrics, Gynecology,  Reproductive Endocrinology & Infertility (IVF)',
      imageName: 'doctor-grid-11',
      profileLink: 'en/dr-maya-albezreh',
      location: 'Jeddah',
    },
    {
      id: 10,
      name: 'Dr. Dalia Adel',
      qualification: 'Consultant, Obstetrics, Gynecology & Infertility',
      imageName: 'doctor-grid-8',
      profileLink: 'en/dr-dalia-nour',
      location: 'Riyadh',
    },
    {
      id: 11,
      name: 'Dr. Ahmad Haroun',
      qualification: 'Consultant, Urology, Andrology & Male Infertility',
      imageName: 'doctor-grid-9',
      profileLink: 'en/dr-ahmad-haroun',
      location: 'Jeddah',
    },
    {
      id: 12,
      name: 'Dr. Mussa AlNumi',
      qualification: 'Consultant, Urology, Andrology & Male Infertility',
      imageName: 'doctor-grid-10',
      profileLink: 'en/dr-moussa-el-naiemy',
      location: 'Riyadh',
    },

    {
      id: 13,
      name: 'Dr. Razan Ghaith',
      qualification: 'Consultant, Obstetrics, Gynecology & Delayed Pregnancy',
      imageName: 'doctor-grid-12',
      profileLink: 'en/dr-razan-ghaith',
      location: 'Jeddah',
    },

    {
      id: 14,
      name: 'Dr. Median Alkhalaf ',
      qualification: 'Consultant, Obstetrics & Gynecology',
      imageName: 'doctor-grid-17',
      profileLink: 'en/dr-median-alkhalaf',
      location: 'Al Ahsa ',
    },
     {
      id: 17,
      name: 'Dr. Dina Alkehaimi',
      qualification: 'Senior Registrar, Obstetrics, Gynecology, Reproductive Endorincology & Infertility (IVF)',
      imageName: 'doctor-grid-18',
      profileLink: 'en/dr-dina-alkehaimi',
      location: 'Riyadh',
    },
    {
      id: 15,
      name: 'Dr. Maram Dadoua',
      qualification: 'Senior Registrar, Obstetrics & Gynecology ',
      imageName: 'doctor-grid-13',
      profileLink: 'en/dr-maram-dadoua',
      location: 'Jeddah',
    },

    {
      id: 16,
      name: 'Dr. Rania Elsherify ',
      qualification: 'Obstetrics & Gynecology Registrar ',
      imageName: 'doctor-grid-14',
      profileLink: 'en/dr-rania-elsherify',
      location: 'Al Ahsa ',
    },
  ];

  return (
    <div className="container mt-5 doctor-section">
      <div className="section-title">
        <div className="row justify-content-center align-items-center g-4">
          <div className="col-lg-10 col-md-12">
            <div className="left">
              <h2 className="heading">Our Physicians</h2>
            </div>
          </div>
          <div className="col-lg-2 col-md-12"></div>
        </div>
      </div>

      {/* Motion animation for the doctors container */}
      <motion.div
        initial={{ opacity: 0, x: isMobile ? 0 : -100 }}
        animate={isMobile ? { opacity: 1, x: 0 } : undefined}
        whileInView={isMobile ? undefined : { opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <div className="row g-4">
          {doctorsData.map((doctor) => (
            <motion.div key={doctor.id} className="col-xl-3 col-md-6">
              <div className="doctor-card">
                <div className="image-wrapper">
                  <OptimizedImage
                    imageName={doctor.imageName}
                    alt={doctor.name}
                    width={340}
                    height={340}
                    loading="lazy"
                    style={{ width: '100%', height: 'auto', borderRadius: 10 }}
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <Link
                        href={doctor.profileLink}
                        className="btn btn-success doctor-btn doctor-hover-btn"
                      >
                        View Profile
                      </Link>
                      {doctor.location && (
                        <div className="doctor-location docotrs">
                          <i className="ri-map-pin-line"></i> {doctor.location}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="content">
                  <h3 className="doctor-heading">
                    <Link href={doctor.profileLink} legacyBehavior>
                      <a className="doctor-link">{doctor.name}</a>
                    </Link>
                  </h3>

                  <span className="sub">{doctor.qualification}</span>
                  {doctor.location && (
                    <div className="location-color">
                      <i className="ri-map-pin-line"></i> {doctor.location}
                    </div>
                  )}
                  <div>
                    <Link
                      href={getBookingUrl(doctor.location, 'en')}
                      className="btn btn-success doctor-btn"
                    >
                      Request an Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        h3 a {
          color: #404040 !important;
          text-decoration: none;
        }
        .doctor-heading Link {
          color: #404040 !important;
        }
        .doctor-card .content h3 {
          font-size: 18px;
          color: #000 !important;
        }
        .doctor-card .content .sub {
          font-size: 16px !important;
          display: block;
          margin-bottom: 10px;
        }
        .doctor-card {
          position: relative;
          overflow: hidden;
        }
        .image-wrapper {
          position: relative;
        }
        .doctor-card:hover .image-overlay {
          opacity: 1;
        }
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          border-radius: 10px;
        }
        .image-overlay .doctor-btn {
          padding: 10px 20px;
          color: #fff;
          border-radius: 5px;
        }
        /* 📱 MOBILE — Always show AND appear right below qualification */
        @media (max-width: 991px) {
          .doctor-location {
            display: flex !important;
            align-items: center;
            gap: 6px;
            margin-top: 10px;
            font-size: 14px;
            opacity: 1 !important;
            visibility: visible !important;
            position: static !important; /* ensures it sits under qualification */
          }
          .location-color {
            color: #000;
            text-align: center;
            justify-content: center;
            font-size: 14px;
            font-weight: 600;
          }
        }
        .doctor-section {
          padding: 0px 25px;
        }
        .heading {
          margin: -20px 0px;
        }
        /* 🖥 DESKTOP — Keep original hover behavior, NO UI CHANGE */
        @media (min-width: 992px) {
          .doctor-location {
            opacity: 0;
            visibility: hidden;
            position: absolute; /* your existing layout remains untouched */
            color: #fff;
            margin: 10px 0px 0px 35px;
            display: block; /* or flex depending on your layout */
            font-size: 12px;
          }
          .location-color {
            display: none;
          }
          .doctor-card:hover .doctor-location {
            opacity: 1;
            visibility: visible;
          }
        }

        @media only screen and (max-width: 767px) {
          .doctor-location {
            display: none !important;
          }
          .location-color {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default OurDoctors;
