'use client';

import React from 'react';
import { motion } from 'framer-motion';

const brochures = [
  {
    section_en: "Egg Retrieval",
    section_ar: "سحب البويضات",
    items: [

      {
        title_en: "POST-OPERATIVE INSTRUCTIONS: EGG RETRIEVAL",
        title_ar: "تـعـلـيـمات ما بعد سحـب البـويـضـات",
        size: "2.8 MB",
        updated: "Oct 2026",
        image: "https://bnoon-website.b-cdn.net/images/brochures/post-egg-retrieval.jpg",
        pdf: "/en/egg-retrieval-post-operative",
        downloadpdf: "/pdf/post-operative-instructions-egg-retrieval.pdf",
      },
      {
        title_en: "PRE-OPERATIVE INSTRUCTIONS: EGG RETRIEVAL",
        title_ar: "تعـليـمـات مـا قبل سحـب البـويـضـات ",
        size: "2.1 MB",
        updated: "Oct 2026",
        image: "https://bnoon-website.b-cdn.net/images/brochures/pre-egg-retrieval.jpg",
        pdf: "/en/egg-retrieval-pre-operative",
        downloadpdf: "/pdf/pre-operative-instructions-egg-retrieval.pdf",
      },
    ],
  },
  {
    section_en: "Embryo Transfer",
    section_ar: "نقل الأجنة",
    items: [

      {
        title_en: "POST-OPERATIVE INSTRUCTIONS: EMBRYO TRANSFER",
        title_ar: "تـعـلـيـمات ما بعد إرجـــاع األجـــنـــة",
         size: "4.5 MB",
        updated: "Jan 2026",
        image: "https://bnoon-website.b-cdn.net/images/brochures/post-embryo-transfer.jpg",
        pdf: "/en/embryo-transfer-post-operative",
        downloadpdf: "/pdf/post-operative-instructions-enbryo-transfer.pdf",
      },
      {
        title_en: "PRE-OPERATIVE INSTRUCTIONS: EMBRYO TRANSFER ",
        title_ar: "تعـليـمـات مـا قبل إرجـــاع األجـــنـــة",
        size: "494 KB",
        updated: "Jan 2026",
        image: "https://bnoon-website.b-cdn.net/images/brochures/pre-embryo-transfer.jpg",
        pdf: "/en/embryo-transfer-pre-operative",
        downloadpdf: "/pdf/pre-operative-instructions-enbryo-transfer.pdf",
      },
    ],
  },
  {
    section_en: "Semen Collection",
    section_ar: "جمع السائل المنوي",
    items: [
      {
        title_en: "SEMEN COLLECTION INSTRUCTIONS",
        title_ar: "تعليمات جمع عينة السائل المنوي",
        size: "7.0 MB",
        updated: "Dec 2025",
        image: "https://bnoon-website.b-cdn.net/images/brochures/semen.jpg",
        pdf: "/en/semen-collection-instructions",
        downloadpdf: "/pdf/semen-collection-instructions.pdf",
      },
    ],
  },
];

const Brochures = () => {
  const cardAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="fertility-area bg-color">
      <div className="container mt-5 mb-5 ">
        {brochures.map((section, i) => (
          <div key={i} className="section-title mt-5 mb-5">
            <div key={i} className="left">
              {/* English Heading */}
              <h2 className="mb-1 fw-bold text-center">{section.section_en}</h2>
              {/* Arabic Heading */}
              <h2 className="mb-4 fw-bold text-center brochures-text text-font-style">{section.section_ar}</h2>


            </div>
       <div className="row g-5 justify-content-center">
                   {section.items.map((item, index) => (
                     <div className="col-lg-4 col-md-4" key={index}>
                       <motion.div
                         variants={cardAnimation}
                         initial="hidden"
                         whileInView="visible"
                         transition={{ duration: 0.5 }}
                       >
                         <div className="brochure-card">
                           {/* IMAGE */}
                           <div className="image-wrapper">
                             <img src={item.image} alt={item.title_en} />
     
                            
                           </div>
     
                           {/* CONTENT */}
                           <div className="card-content">
      <h3>{item.title_en}</h3>
                             <h4 className="text-font-style">{item.title_ar}</h4>
                            
                             {/* FOOTER */}
                             <div className="card-footer">
                               <div>
                                 <span>FILE SIZE</span>
                                 <strong>{item.size}</strong>
                               </div>
     
                               <div>
                                 <span>UPDATED</span>
                                 <strong>{item.updated}</strong>
                               </div>
     
                               <a href={item.downloadpdf} target="_blank" className="download-icon">
                                 <img src="https://bnoon-website.b-cdn.net/images/icons/download-file-icon.svg" alt="download" />
                               </a>
                             </div>
                           </div>
                         </div>
                       </motion.div>
                     </div>
                   ))}
                 </div>
          </div>
        ))}
      </div>

      {/* CSS inside same file */}
      <style jsx>{`
   
      `}</style>
    </div>
  );
};

export default Brochures;
