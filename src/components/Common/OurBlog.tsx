'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import 'remixicon/fonts/remixicon.css';

const OurBlog = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const blogData = [
    {
      id: 1,
      imageName: 'blog-riyadh' as const,
      title: 'Bnoon - Riyadh',
      slug: 'https://maps.app.goo.gl/Uwu7B8FT8n7bYNid6',
      embedMap:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.1839039641172!2d46.7350649!3d24.789155499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efddca951caad%3A0xff57eb5bc69f10ea!2zQm5vb24gLSBSaXlhZGgg2KjZhtmI2YYgLSDYp9mE2LHZitin2LY!5e0!3m2!1sen!2s!4v1762873112473!5m2!1sen!2s',
      buttonLink: 'en/bnoon-riyadh',
      description:
        'With a legacy of excellence in fertility and women’s health, Bnoon has been proudly serving families for over 12 years in Riyadh. Renowned for its patient-first philosophy, the center combines compassionate care with advanced technology and a team of highly...',
    },
    {
      id: 2,
      imageName: 'blog-jeddah' as const,
      title: 'Bnoon – Jeddah',
      slug: "https://www.google.com/maps/place/HealthPlus+Fertility+%26+Women's+Health+Center+-+Jeddah/data=!4m2!3m1!1s0x0:0x403eb3afa0ca3bd7?sa=X&amp;ved=1t:2428&amp;ictx=111",
      embedMap:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.6924446189687!2d39.1215956!3d21.558878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3dbc1b47a93e5%3A0x403eb3afa0ca3bd7!2zQm5vb24gLSBKZWRkYWgg2KjZhtmI2YYgLSDYrNiv2KkgKGZvcm1lcmx5IGtub3duIGFzIEhlYWx0aFBsdXMgRmVydGlsaXR5IEplZGRhaCk!5e0!3m2!1sen!2s!4v1762873494627!5m2!1sen!2s',
      buttonLink: 'en/bnoon-jeddah',
      description:
        'Acquired in June 2025, Bnoon Jeddah — formerly known as HealthPlus Fertility Center Jeddah — has long been recognized for its medical excellence and the trust it has built within the local community. Now as part of a leading network of fertility centers...',
    },
    {
      id: 3,
      imageName: 'blog-king-salman' as const,
      title: 'Bnoon – King Salman Road, Riyadh ',
      note: '(Opening Early 2026)',
      slug: 'https://maps.app.goo.gl/F9Qu7tQQp74TTyNv9?g_st=iwb',
      embedMap:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.3583391235643!2d46.59119140000001!3d24.8174163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee69d1c7fb897%3A0x46a86841c1f1d0e8!2zUlJRQTQxNTAsIDQxNTAgS2luZyBTYWxtYW4gQmluIEFiZHVsYXppeiBSZCwgNjkzMtiMINit2Yog2KfZhNmC2YrYsdmI2KfZhtiMIFJpeWFkaCAxMzUzMiwgU2F1ZGkgQXJhYmlh!5e0!3m2!1sen!2s!4v1762873544370!5m2!1sen!2s',
      buttonLink: 'en/bnoon-riyadh#king-salman-section',
      description:
        'To further expand access and redefine the standard of fertility care in the Kingdom, Bnoon is developing a state-of-the-art 3,800 sqm flagship facility on King Salman Road in North Riyadh, scheduled to open...',
    },
    {
      id: 4,
      imageName: 'blog-alahsa' as const,
      title: 'Bnoon – Al Ahsa ',
      slug: 'https://maps.app.goo.gl/56bbzJYjX8xsm5tJ6',
      embedMap:
        'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3603.0477616735334!2d49.572361099999995!3d25.4366667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDI2JzEyLjAiTiA0OcKwMzQnMjAuNSJF!5e0!3m2!1sen!2s!4v1765622876993!5m2!1sen!2s',
      buttonLink: 'en//bnoon-alahsa',
      description: `
  Situated within <strong><a href="https://almoosahealthgroup.org/en/hospital-services/bnoon-fertility-center/" target="_blank" rel="noopener noreferrer" class="hospital-link">
  Almoosa Specialist Hospital</a></strong>, Bnoon – Al Ahsa brings world-class fertility and women’s health services to the heart of Saudi Arabia’s Eastern Province. The center is designed to the heart of Saudi Arabia’s Eastern Province. The center is designed...
`,
    },
  ];

  return (
    <div className="blog-area ptb-140 mt-4 mb-5">
      <div className="container">
        <div className="section-title">
          <div className="row g-4">
            <div className="col-lg-7 col-md-12">
              <div className="left">
                <h2>Our Clinics</h2>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row justify-content-center
"
        >
          {blogData.map((post, index) => (
            <div key={post.id} className="col-lg-5 col-md-6 pb-3">
              <div
                className={`blog-card mx-md-2 ${
                  index % 2 === 0 ? 'blog-left-card' : 'blog-right-card'
                }`}
                onMouseEnter={() => setHoveredId(post.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="image">
                  <OptimizedImage
                    imageName={post.imageName}
                    alt={post.title}
                    className={hoveredId === post.id ? 'fade-out' : 'fade-in'}
                    width={378}
                    height={205}
                    loading="lazy"
                  />
                  <iframe
                    src={post.embedMap}
                    width="100%"
                    height="201"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={hoveredId === post.id ? 'fade-in' : 'fade-out'}
                  ></iframe>
                </div>

                <div className="content">
                  <h3>
                    <i
                      className="ri-map-pin-line"
                      style={{ color: '#004E78', marginRight: '6px' }}
                    ></i>
                    <a href={post.slug} target="_blank" rel="noopener noreferrer">
                      {post.title}
                      {post.note && <span className="small-note">{post.note}</span>}
                    </a>
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.description,
                    }}
                  ></p>

                  <Link href={post.buttonLink} className="btn btn-success btn-blog">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ✅ Responsive style only for mobile */}
      <style jsx global>{`
        .hospital-link {
          color: #404040; /* apna desired color */
        }

        .blog-card .content p {
          font-size: 16px !important; /* font size kam */
          line-height: 1.5; /* line height kam */
        }
        .blog-card {
          width: 450px;
        }
        .blog-right-card {
          margin-left: 40px !important;
        }
        .blog-left-card {
          margin-left: 40px !important;
        }
        .small-note {
          font-size: 16px; /* smaller size for note */
          color: #004e78;
          margin-left: 26px;
          display: block;
          margin-top: 8px;
        }

        .blog-card .content h3,
        .blog-card .content .h3 {
          font-size: 22px;
          line-height: 1;
          transition: none;
          color: #004e78;
          margin-top: 8px;
        }
        .blog-card .content h3:hover,
        .blog-card .content .h3:hover {
          transform: none;
        }
        .blog-card .image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .blog-card .image img,
        .blog-card .image iframe {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          transition: opacity 0.5s ease-in-out;
        }

        .fade-in {
          opacity: 1;
          z-index: 2;
        }

        .fade-out {
          opacity: 0;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .blog-card .content h3,
          .blog-card .content .h3 {
            font-size: 18px;
            line-height: 1;
            transition: none;
            color: #004e78;
            margin-top: 8px;
          }
          .blog-card {
            width: 330px;
          }
          .blog-card .image {
            position: relative;
            height: 200px;
            overflow: hidden;
          }
          .blog-right-card {
            margin-left: 0px !important;
          }
          .blog-left-card {
            margin-left: 0px !important;
          }
          .blog-card .content p {
            font-size: 14px !important; /* font size kam */
            line-height: 1.5; /* line height kam */
          }
          .small-note {
            font-size: 13px; /* smaller size for note */
            color: #004e78;
            margin: 6px 0px 0px;
            display: block; /* moves to next line */
          }
        }
      `}</style>
    </div>
  );
};

export default OurBlog;
