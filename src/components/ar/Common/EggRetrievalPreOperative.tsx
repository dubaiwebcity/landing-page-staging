'use client';

import React from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';

const PaitentRights: React.FC = () => {
  const pages = [
    { imageName: 'pre-eeg-retrieval-pdf-1', alt: 'Pre EEg Retrieval Page 1' },
    { imageName: 'pre-eeg-retrieval-pdf-2', alt: 'Pre EEg Retrieval Page 2' },
  ];

  return (
<div className="pdf-container">

  {/* 🔽 Download Button (logo ke niche, right aligned) */}
  <div className="download-wrapper">
    <a
      href="/pdf/pre-operative-instructions-egg-retrieval.pdf"
      target="_blank"
      className="download-icon-img"
    >
      <img
        src="https://bnoon-website.b-cdn.net/images/icons/download-file-icon.svg"
        alt="download"
      />
    </a>
  </div>

  <div className="pdf-pages-wrapper">
    {pages.map((page, index) => (
      <OptimizedImage
        key={index}
        imageName={page.imageName}
        alt={page.alt}
        className="pdf-page"
      />
    ))}
  </div>
      <style jsx>{`
      .download-wrapper {
  width: 100%;
  padding: 20px 320px 0;
}

.download-icon-img img {
  transition: 0.3s;
  width: 25px;
}


        .pdf-pages-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          padding: 40px 0;
        }

        .pdf-page {
          width: 60%;
          max-width: 900px;
          height: auto;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .pdf-page {
            width: 95%;
          }
        }
      `}</style>
    </div>
  );
};

export default PaitentRights;
