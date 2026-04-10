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
     
      `}</style>
    </div>
  );
};

export default PaitentRights;
