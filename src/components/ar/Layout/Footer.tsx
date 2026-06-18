'use client';

import React from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import MobileTopTools from '@/components/ar/Common/MobileTopTools';
import { getBookNowUrl } from '@/utils/booking';
import 'remixicon/fonts/remixicon.css';
import { usePathname } from 'next/navigation';
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
  image: string;
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
      title: 'تواصل معنا ',
      links: [
        {
          text: '  +966 11 444 8080 \u00A0\u00A0\u00A0:الرياض',
          url: 'tel:966 11 444 8080',
          isExternal: true,
        },
        {
          text: '+966 12 680 0800 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0:جدة ',
          url: 'tel:+966 12 680 0800',
          isExternal: true,
        },
      ],
    },
    {
      title: '',
      links: [
        { text: 'نبذة عنّا ', url: '/ar/about-us' },
        { text: 'أطباؤنا ', url: '/ar/our-experts' },
        { text: 'انضم لفريقنا ', url: '/ar/join-our-team' },
        { text: '​المركز الإعلامي ', url: 'https://globalfertilityivf.com/media/' },
        { text: 'مواقعنا', url: '/ar/our-clinics' },
        { text: 'الرياض', url: '/ar/bnoon-riyadh' },
        { text: 'جدة ', url: '/ar/bnoon-jeddah' },
        { text: ' الأحساء ', url: '/ar/bnoon-alahsa' },
      ],
    },
    {
      title: '',
      links: [
        { text: 'العلاجات', url: '/ar/treatments' },
        { text: 'برنامج وعد بنون', url: '/ar/waad-bnoon-program' },
        { text: 'زيارتك لنا', url: '/ar/your-visit' },
        { text: 'الاستشارات عن بُعد', url: '/ar/telemedicine' },
        { text: 'دليل الخصوبة', url: '/ar/fertility-guide' },
        { text: 'حقوق وواجبات المرضى', url: '/ar/patients-rights' },
        { text: 'تواصل معنا', url: '/ar/contact-us' },
        { text: 'طلب موعد', url: getBookNowUrl('ar') },
        { text: 'شاركونا تجربتكم', url: '/ar/submit-feedback' },
        { text: 'طلب تحويل مريض', url: '/ar/refer-a-patient' },
      ],
    },
  ],
  appButtons: [
    {
      name: 'Google Play',
      url: 'https://play.google.com/store/apps',
      image: 'google-play',
      alt: 'google-play',
    },
    {
      name: 'App Store',
      url: 'https://www.apple.com/app-store/',
      image: 'app-store',
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

  const pathname = usePathname();

  const isContactPage =
    pathname === '/en/contact-us' ||
    pathname === '/ar/contact-us';
  return (
    <>
      <footer className="footer-area">
        <div className="mt-5 mb-lg-5 mb-0">
          <div className="container">
            <div className="row g-4">
              {/* Left column: Contact Us */}
              <div className="col-lg-4 col-sm-12">
                <div className="single-footer-widget">
                  {footerData.sections[0].title && <h3>{footerData.sections[0].title}</h3>}
                  <ul className="links ">
                    {footerData.sections[0].links.map((link, i) => (
                      <li className=" number" key={i}>
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
                        className="me-3"
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
              <div className="col-lg-8 col-12 d-flex flex-wrap flex-lg-row justify-content-lg-end align-items-start">
                {footerData.sections.slice(1).map((section, index) => (
                  <div
                    className="single-footer-widget link-itmes col-6 col-lg-auto ms-lg-4 mb-3 "
                    style={{ minWidth: '150px' }}
                    key={index}
                  >
                    {section.title && <h3>{section.title}</h3>}
                    <ul className="links">
                      {section.links.map((link, linkIndex) => {
                        const withIcon =
                          link.text.trim() === 'الرياض' ||
                          link.text.trim() === 'جدة' ||
                          link.text.trim() === 'الأحساء';

                        return (
                          <li key={linkIndex} className="d-flex align-items-start">
                            <Link
                              href={link.url}
                              className="d-flex align-items-center"
                              style={{
                                marginLeft: withIcon ? '18px' : '0px', // ⭐ only icon links move text
                                position: 'relative',
                              }}
                            >
                              {withIcon && (
                                <i
                                  className="ri-map-pin-line"
                                  style={{
                                    fontSize: '14px',
                                    marginLeft: '10px',
                                  }}
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

        <div className="container">
          <div className="copyright-area">
            <div className="row g-4">
              <div className="col-lg-6 col-md-12 ">
                <p className="footer-text" style={{ margin: 0 }}>
                  © <span>{footerData.copyright.text}</span> 2026 جميع الحقوق محفوظة{' '}
                  <a href={footerData.copyright.ownerUrl} target="_blank" rel="noopener noreferrer">
                    {footerData.copyright.owner}
                  </a>
                </p>
              </div>
              <div className="col-lg-6 col-md-12 ">
                <p className="footer-text footer-align lists">

                  {isContactPage && (
                    <>
                      <a href="https://www.dubaiwebcity.com" target="_blank" rel="noopener noreferrer">تم تصميم الموقع بواسطة نت سوفت</a>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile tools */}
        <div className="d-block d-md-none">
          <MobileTopTools />
        </div>
      </footer>

      <style jsx global>{`
         p.footer-text a{
      color: #ffffffff !important;
      }
      
        .arabic h1,
        .arabic p {
          text-align: right;
        }
        .link-itmes li a {
          font-size: 13px !important;
        }
        .mb-lg-5 {
          margin-bottom: 1rem !important;
        }
        li.number {
          direction: ltr;
          margin-right: auto;
          text-align-last: right;
          justify-content: left;
        }
        .number {
          list-style-type: none;
          margin-bottom: 10px;
          line-height: 18px;
          font-size: 14px;
          direction: ltr;
        }

        /* Example extra styles */
        .social-icons a {
          transition: transform 0.2s;
        }

        .social-icons a:hover {
          transform: scale(1.1);
        }
        .copyright-area .lists li a {
          color: #ffffffff !important;
        }
        @media only screen and (max-width: 767px) {
          .footer-text {
            color: #ffffff !important;
            font-size: 11px !important;
            text-align: right !important;
          }
          .copyright-area .lists li {
            list-style-type: none;
            font-size: 11px;
            position: relative;
            margin-right: 40px;
            margin: -18px 0px 0px;
          }
              .lists {
    text-align: right !important;
    width: 100%;
    display: block !important;
  }

  .lists a {
    display: block;
    text-align: right !important;
  }
          .copyright-area .footer-text {
    text-align: right !important;
    width: 100% !important;
  }
        }
      `}</style>
    </>
  );
}

export default Footer;
