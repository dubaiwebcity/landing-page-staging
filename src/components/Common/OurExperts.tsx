'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import OptimizedImage from '@/components/ui/OptimizedImage';
import 'remixicon/fonts/remixicon.css';
import { getBookingUrl } from '@/utils/booking';
// ✅ Doctor data structure
interface OurExperts {
  id: number;
  name: string;
  qualification: string;
  imageName: string;
  profileLink: string;
  location: 'Riyadh' | 'Jeddah' | 'Al Ahsa';
}

const OurExperts = () => {
  const [filter, setFilter] = useState<'ALL' | 'Riyadh' | 'Jeddah' | 'Al Ahsa'>('ALL');
  // ✅ Add this here, after filter state
  const searchParams = useSearchParams();
  const locationParam = searchParams.get('location') as 'Riyadh' | 'Jeddah' | 'Al Ahsa' | null;

  useEffect(() => {
    if (locationParam === 'Riyadh' || locationParam === 'Jeddah' || locationParam === 'Al Ahsa') {
      setFilter(locationParam);
    }
  }, [locationParam]);

  // Your doctorsData array comes here
  const doctorsData: OurExperts[] = [
    {
      id: 1,
      name: 'Dr. Abdalaziz Al-Shahrani',
      qualification:
        'Group Medical Director Consultant, Obstetrics, Gynecology, Reproductive Endorinology, Infertility (IVF) & Minimally Invasive Surgery',
      imageName: 'doctor-grid-1',
      profileLink: 'dr-abdalaziz-alshahrani',
      location: 'Riyadh',
    },
    {
      id: 2,
      name: 'Dr. Fawaz Edris',
      qualification:
        'Executive Director, Bnoon - Jeddah Consultant, Obstetrics, Gynecology, Reproductive Endocrinology, Infertility (IVF), Minimally Invasive Surgery & Maternal Fetal Medicine',
      imageName: 'doctor-grid-2',
      profileLink: 'dr-fawaz-edris',
      location: 'Jeddah',
    },
    {
      id: 3,
      name: 'Dr. Mazin Bishara',
      qualification:
        'Medical Director, Bnoon - Jeddah Consultant, Obstetrics, Gynecology,  Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery',
      imageName: 'doctor-grid-3',
      profileLink: 'dr-mazin-bishara',
      location: 'Jeddah',
    },

    {
      id: 4,
      name: 'Dr. Bassam Nusair ',
      qualification:
        'Consultant, Obstetrics, Gynecology, Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery',
      imageName: 'doctor-grid-15',
      profileLink: 'dr-bassamnusair',
      location: 'Al Ahsa',
    },
    {
      id: 5,
      name: 'Dr. Asim Al Wohaibi',
      qualification:
        'Consultant, Obstetrics, Gynecology,  Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery',
      imageName: 'doctor-grid-4',
      profileLink: 'dr-asim-alwohaibi',
      location: 'Riyadh',
    },

    {
      id: 6,
      name: 'Dr. Ahmed Alshaikh',
      qualification:
        'Consultant, Obstetrics, Gynecology,  Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery',
      imageName: 'doctor-grid-6',
      profileLink: 'dr-ahmed-alshaikh',
      location: 'Jeddah',
    },
    {
      id: 7,
      name: 'Dr. Wajdi Al Omari',
      qualification:
        'Consultant, Obstetrics, Gynecology,  Reproductive Endocrinology & Infertility (IVF), Minimally Invasive Surgery',
      imageName: 'doctor-grid-7',
      profileLink: 'dr-wajdi-alomari',
      location: 'Riyadh',
    },

    {
      id: 8,
      name: 'Dr. Ahmed Al-Nowasser',
      qualification:
        'Consultant, Obstetrics, Gynecology, Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery  ',
      imageName: 'doctor-grid-16',
      profileLink: 'dr-ahmedal-nowasser',
      location: 'Al Ahsa',
    },
    {
      id: 9,
      name: 'Dr. Maya Albezreh',
      qualification:
        'Consultant, Obstetrics, Gynecology,  Reproductive Endocrinology & Infertility (IVF)',
      imageName: 'doctor-grid-11',
      profileLink: 'dr-maya-albezreh',
      location: 'Jeddah',
    },
    {
      id: 10,
      name: 'Dr. Dalia Nour',
      qualification: 'Consultant, Obstetrics, Gynecology & Infertility',
      imageName: 'doctor-grid-8',
      profileLink: 'dr-dalia-nour',
      location: 'Riyadh',
    },
    {
      id: 11,
      name: 'Dr. Ahmad Haroun',
      qualification: 'Consultant, Urology, Andrology & Male Infertility',
      imageName: 'doctor-grid-9',
      profileLink: 'dr-ahmad-haroun',
      location: 'Jeddah',
    },
    {
      id: 12,
      name: 'Dr. Mussa AlNumi',
      qualification: 'Consultant, Urology, Andrology & Male Infertility',
      imageName: 'doctor-grid-10',
      profileLink: 'dr-moussa-el-naiemy',
      location: 'Riyadh',
    },

    {
      id: 13,
      name: 'Dr. Razan Ghaith',
      qualification: 'Consultant, Obstetrics, Gynecology & Delayed Pregnancy',
      imageName: 'doctor-grid-12',
      profileLink: 'dr-razan-ghaith',
      location: 'Jeddah',
    },

    {
      id: 14,
      name: 'Dr. Median Alkhalaf ',
      qualification: 'Consultant, Obstetrics & Gynecology ',
      imageName: 'doctor-grid-17',
      profileLink: 'dr-median-alkhalaf',
      location: 'Al Ahsa',
    },
     {
      id: 17,
      name: 'Dr. Dina Alkehaimi',
      qualification: 'Senior Registrar, Obstetrics, Gynecology, Reproductive Endorincology & Infertility (IVF)',
      imageName: 'doctor-grid-18',
      profileLink: 'dr-dina-alkehaimi',
      location: 'Riyadh',
    },
    {
      id: 15,
      name: 'Dr. Maram Dadoua',
      qualification: 'Senior Registrar, Obstetrics & Gynecology ',
      imageName: 'doctor-grid-13',
      profileLink: 'dr-maram-dadoua',
      location: 'Jeddah',
    },

    {
      id: 16,
      name: 'Dr. Rania Elsherify ',
      qualification: 'Obstetrics & Gynecology Registrar ',
      imageName: 'doctor-grid-14',
      profileLink: 'dr-rania-elsherify',
      location: 'Al Ahsa',
    },
  ];
  return (
    <div>
      <div className="container ptb-140 doctors-container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-10 col-md-12">
              <div className="left">
                <h2>Our Physicians</h2>
              </div>
            </div>
            <div className="col-lg-2 col-md-12"></div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="mb-4 d-flex  gap-2 gap-lg-5">
          <button
            className={`physicians-btn btn ${filter === 'ALL' ? 'active' : ''}`}
            onClick={() => setFilter('ALL')}
          >
            ALL
          </button>
          <button
            className={`physicians-btn btn ${filter === 'Riyadh' ? 'active' : ''}`}
            onClick={() => setFilter('Riyadh')}
          >
            RIYADH
          </button>
          <button
            className={`physicians-btn btn ${filter === 'Jeddah' ? 'active' : ''}`}
            onClick={() => setFilter('Jeddah')}
          >
            JEDDAH
          </button>
          <button
            className={`physicians-btn btn ${filter === 'Al Ahsa' ? 'active' : ''}`}
            onClick={() => setFilter('Al Ahsa')}
          >
            AL AHSA
          </button>
        </div>

        <div className="doctors-scroll-container">
          <div className="row g-4">
            {doctorsData
  .filter((doctor) => filter === 'ALL' || doctor.location === filter)
.sort((a, b) => {
  // Sirf Riyadh filter pe apply karo
  if (filter === 'Riyadh') {
    // Dono Riyadh ke hi hone chahiye
    if (a.location === 'Riyadh' && b.location === 'Riyadh') {
      if (a.name === 'Dr. Dina Alkehaimi' && b.name === 'Dr. Mussa AlNumi') return -1;
      if (a.name === 'Dr. Mussa AlNumi' && b.name === 'Dr. Dina Alkehaimi') return 1;
    }
  }
  return 0;
})
  .map((doctor) => {
              const isVisible = filter === 'ALL' || doctor.location === filter;
              return (
              <div key={doctor.id} className="col-xl-3 col-md-6" style={{ display: isVisible ? '' : 'none' }}>
                <div className="doctor-card">
                  <div className="image-wrapper" style={{ position: 'relative' }}>
                    <OptimizedImage
                      imageName={doctor.imageName}
                      alt={doctor.name}
                      style={{ borderRadius: '10px' }}
                    />
                    {/* Overlay */}
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <Link
                          href={doctor.profileLink}
                          className="btn btn-success doctor-btn doctor-hover-btn"
                        >
                          View Profile
                        </Link>
                        {doctor.location && (
                          <div className="doctor-location docotr">
                            <i className="ri-map-pin-line"></i> {doctor.location}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="content">
                    <h3>
                      <Link className=" doctor-link" href={doctor.profileLink}>
                        {doctor.name}
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

                {/* Same styles from OurDoctors */}
                <style jsx global>{`
                  .doctor-card {
                    position: relative;
                    overflow: hidden;
                    border-radius: 16px;
                  }
                  .doctor-link {
                    color: #000000 !important;
                    font-size: 18px;
                    text-decoration: none !important;
                  }
                  .doctor-card .content .sub {
                    font-size: 16px;
                    display: block;
                    margin-bottom: 20px;
                  }
                  .service-overview-content h3,
                  .service-overview-content .h3 {
                    font-size: 30px;
                    font-weight: normal;
                    color: #004e78;
                  }
                  .doctor-location {
                    color: #fff;
                    font-size: 12px !important;
                  }
                  .image-wrapper {
                    position: relative;
                  }

                  .doctor-card:hover .image-overlay {
                    opacity: 1;
                  }
                  .location-color {
                    color: #000;
                    text-align: center;
                    justify-content: center;
                    font-size: 14px;
                    font-weight: 600;
                    margin: -10px 0px 10px 10px;
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
                    transition: opacity 0.3s ease;
                    border-radius: 10px;
                    text-align: center;
                  }

                  .image-overlay .doctor-btn {
                    padding: 10px 20px;
                    color: #fff;
                    border-radius: 5px;
                    margin-bottom: 10px;
                  }
                  .location-color {
                    display: none;
                  }

                  .doctor-location {
                    color: #fff;
                    font-size: 14px;
                  }
                  @media only screen and (max-width: 767px) {
                    .doctor-location {
                      display: none !important;
                    }
                    .service-overview-content h3,
                    .service-overview-content .h3 {
                      font-size: 20px;
                      font-weight: normal;
                      color: #004e78;
                    }
                    .doctor-card {
                      padding: 15px 10px !important;
                      margin: 0px 17px !important;
                    }
                    .location-color {
                      display: block;
                    }
                    .doctor-card {
                      padding: 25px;
                      margin: 0px 10px !important;
                    }
                    .physicians-btn {
                      width: 90px !important;
                      height: 40px !important;
                      -webkit-border-radius: 0px !important;
                      -moz-border-radius: 0px !important;
                      border-radius: 0px !important;
                      font-size: 12px !important;
                    }
                  }
                `}</style>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExperts;
