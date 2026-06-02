'use client';

import React from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import MobileTopTools from '@/components/Common/MobileTopTools'; // ye aapka custom component hoga
import { getBookNowUrl } from '@/utils/booking';
import { GooglePlayBadge, AppStoreBadge } from '@/components/icons';
import 'remixicon/fonts/remixicon.css';
import { useEffect } from 'react';
// Define interfaces for our data structure
interface SocialLink {
  platform: string;
  url: string;
  imageName: string;
}

interface FooterLink {
  text: string;
  url: string;
  isExternal?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface AppButton {
  name: string;
  url: string;
  image: React.ReactNode;
  alt: string;
}

interface FooterData {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  description: string;
  socialLinks: SocialLink[];
  sections: FooterSection[];
  appButtons: AppButton[];
  copyright: {
    text: string;
    owner: string;
    ownerUrl: string;
  };
  complianceBadges: string[];
}

// Dynamic data object
const footerData: FooterData = {
  logo: {
    src: '',
    alt: 'logo',
    width: 134,
    height: 35,
  },
  description:
    'Doutor is a modern telemedicine platform committed to making high-quality healthcare accessible, affordable, and patient-centered.',
  socialLinks: [
    {
      platform: 'facebook',
      url: 'https://www.facebook.com/',
      imageName: 'fb-icon',
    },
    {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/company/bnoon',
      imageName: 'linkedin-icon',
    },
    {
      platform: 'instagram',
      url: 'https://www.instagram.com/bnoonivf/',
      imageName: 'instagram-icon',
    },
    {
      platform: 'x',
      url: 'https://x.com/bnoonivf',
      imageName: 'x-icon',
    },
  ],
  sections: [
    {
      title: 'Contact Us',
      links: [
        {
          text: 'Riyadh : +966 11 444 8080',
          url: 'tel:966 11 444 8080',
          isExternal: true,
        },
        {
          text: 'Jeddah : +966 12 680 0800',
          url: 'tel:+966 12 680 0800',
          isExternal: true,
        },
      ],
    },
    {
      title: '',
      links: [
        { text: 'About Us', url: '/en/about-us' },
        { text: 'Our Experts', url: '/en/our-experts' },
        { text: 'Join Our Team', url: '/en/join-our-team' },
        { text: 'Media Center', url: '/en/https://globalfertilityivf.com/media/' },
        { text: 'Our Locations', url: '/en/our-clinics' },
        { text: 'Bnoon - Riyadh', url: '/en/bnoon-riyadh' },
        { text: 'Bnoon - Jeddah', url: '/en/bnoon-jeddah' },
        { text: 'Bnoon - Al Ahsa', url: '/en/bnoon-alahsa' },
      ],
    },
    {
      title: '',
      links: [
        { text: 'Treatments', url: '/en/treatments' },
        { text: "Wa'ad Bnoon Program", url: '/en/waad-bnoon-program' },
        { text: 'Your First Visit', url: '/en/your-visit' },
        { text: 'Telemedicine', url: '/en/telemedicine' },
        { text: 'Fertility Guide', url: '/en/fertility-guide' },
        { text: "Patients' Rights & Responsibilities", url: '/en/patients-rights' },
        { text: 'Contact Us', url: '/en/contact-us' },
        { text: 'Book an Appointment', url: getBookNowUrl('en') },
        { text: 'Submit Your Feedback', url: '/en/submit-feedback' },
        { text: 'Refer a Patient', url: '/en/refer-a-patient' },
      ],
    },
  ],
  appButtons: [
    {
      name: 'Google Play',
      url: 'https://play.google.com/store/apps',
      image: <GooglePlayBadge width={193} height={56} />,
      alt: 'google-play',
    },
    {
      name: 'App Store',
      url: 'https://www.apple.com/app-store/',
      image: <AppStoreBadge width={193} height={56} />,
      alt: 'app-store',
    },
  ],
  copyright: {
    text: '',
    owner: '',
    ownerUrl: 'https://www.dubaiwebcity.com/',
  },
  complianceBadges: [
    ``,
  ],
};

function Footer() {
 useEffect(() => {
  const handleClick = () => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'click_whatsapp', {
        event_category: 'Engagement',
        event_label: 'WhatsApp Click'
      });
    }
  };

  const links = document.querySelectorAll(
    "a[href*='wa.me'], a[href*='api.whatsapp.com']"
  );

  links.forEach((link) => {
    link.addEventListener("click", handleClick);
  });

  return () => {
    links.forEach((link) => {
      link.removeEventListener("click", handleClick);
    });
  };

}, []);
  return (
    <footer className="footer-area">
      <div className="ptb-50">
        <div className="container">
          <div className="row g-4">
            {/* Left column: Contact Us */}
            <div className="col-lg-4 col-sm-12">
              <div className="single-footer-widget">
                {footerData.sections[0].title && <h3>{footerData.sections[0].title}</h3>}
                <ul className="links">
                  {footerData.sections[0].links.map((link, i) => (
                    <li key={i}>
                      {link.isExternal ? (
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.text}
                        </a>
                      ) : (
                        <Link href={link.url}>{link.text}</Link>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Social icons */}
                <div className="social-icons mt-3 d-flex">
                  {footerData.socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-3" // spacing between icons
                    >
                      <OptimizedImage
                        imageName={social.imageName}
                        alt={social.platform}
                        width={24}
                        height={24}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right columns: last two sections */}
            <div className="col-lg-8">
              <div className="row justify-content-lg-end">
                {footerData.sections.slice(1).map((section, index) => (
                  <div
                    className="single-footer-widget col-6 col-lg-auto mb-3 mb-lg-0"
                    key={index}
                    style={{ minWidth: '170px' }}
                  >
                    {section.title && <h3>{section.title}</h3>}
                    <ul className="links">
                      {section.links.map((link, linkIndex) => {
                        const withIcon =
                          link.text === 'Bnoon - Riyadh' ||
                          link.text === 'Bnoon - Jeddah' ||
                          link.text === 'Bnoon - Al Ahsa';

                        const isPatientsRights =
                          link.text === "Patients' Rights & Responsibilities";

                        return (
                          <li key={linkIndex} className="d-flex align-items-start">
                            <Link
                              href={link.url}
                              className={`d-flex align-items-center ${
                                isPatientsRights ? 'patients-rights-link' : ''
                              }`}
                            >
                              {withIcon && (
                                <i
                                  className="ri-map-pin-line"
                                  style={{ fontSize: '14px', marginRight: '6px' }}
                                ></i>
                              )}
                              {link.text}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright-area">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-6 col-md-12">
              <p className="footer-text">
                © <span>{footerData.copyright.text}</span>2025 All Rights Reserved{' '}
                <a href={footerData.copyright.ownerUrl} target="_blank" rel="noopener noreferrer">
                  {footerData.copyright.owner}
                </a>
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <ul className="lists footer-text">
                {footerData.complianceBadges.map((badge, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: badge }}></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile tools */}
      <div className="d-block d-md-none">
        <MobileTopTools />
      </div>
      <style jsx global>{`
        .copyright-area .lists li a {
          color: #ffffffff !important;
        }
        @media (max-width: 768px) {
          .patients-rights-link {
            line-height: 1.4 !important;
            display: inline-block;
          }
        }
        @media (max-width: 767px) {
          .copyright-area .lists li {
            list-style-type: none;
            font-size: 12px;
            position: relative;
            margin-right: 40px !important;
          }
        }
      `}</style>
    
    </footer>
  );
}

export default Footer;
