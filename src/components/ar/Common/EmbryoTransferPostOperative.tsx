'use client';

import React from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';

const PaitentRights: React.FC = () => {
  const pages = [
    { imageName: 'embryo-transfer-post-pdf-1', alt: 'Embryo Transfer Post Pdf 1' },
    { imageName: 'embryo-transfer-post-pdf-2', alt: 'Embryo Transfer Post Pdf 2' },
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

      <style jsx>{`
      
      `}</style>
    </div>
     </div>
  );
};

export default PaitentRights;
