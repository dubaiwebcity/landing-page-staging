'use client';
import React from 'react';
import { motion } from 'framer-motion';

const brochures = [
  {
    section_en: "Egg Retrieval",
    section_ar: "سحب البويضات",
    items: [

      {
        title_en: "PRE-OPERATIVE INSTRUCTIONS: EGG RETRIEVAL",
        title_ar: "تعـليـمـات مـا قبل سحـب البـويـضـات ",
        size: "2.1 MB",
        updated: "Oct 2026",
        image: "https://bnoon-website.b-cdn.net/images/brochure/pre-egg-retrival.jpg",
        pdf: "/en/egg-retrieval-pre-operative",
        downloadpdf: "/pdf/en/pre-operative-instructions-egg-retrieval.pdf",
      },
      
      {
        title_en: "POST-OPERATIVE INSTRUCTIONS: EGG RETRIEVAL",
        title_ar: "تـعـلـيـمات ما بعد سحـب البـويـضـات",
        size: "2.8 MB",
        updated: "Oct 2026",
        image: "https://bnoon-website.b-cdn.net/images/brochure/post-egg-retrival.jpg",
        pdf: "/en/egg-retrieval-post-operative",
        downloadpdf: "/pdf/en/post-operative-instructions-egg-retrieval.pdf",
      },
    ],
  },
  {
    section_en: "Embryo Transfer",
    section_ar: "نقل الأجنة",
    items: [
 {
        title_en: "PRE-OPERATIVE INSTRUCTIONS: EMBRYO TRANSFER ",
        title_ar: "تعـليـمـات مـا قبل إرجـــاع األجـــنـــة",
        size: "494 KB",
        updated: "Jan 2026",
        image: "https://bnoon-website.b-cdn.net/images/brochure/pre-embryo-transfer.jpg",
        pdf: "/en/embryo-transfer-pre-operative",
        downloadpdf: "/pdf/en/pre-operative-instructions-enbryo-transfer.pdf",
      },
      {
        title_en: "POST-OPERATIVE INSTRUCTIONS: EMBRYO TRANSFER",
        title_ar: "تـعـلـيـمات ما بعد إرجـــاع األجـــنـــة",
         size: "4.5 MB",
        updated: "Jan 2026",
        image: "https://bnoon-website.b-cdn.net/images/brochure/post-embryo-transfer.jpg",
        pdf: "/en/embryo-transfer-post-operative",
        downloadpdf: "/pdf/en/post-operative-instructions-enbryo-transfer.pdf",
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
        image: "https://bnoon-website.b-cdn.net/images/brochure/semen-collection.jpg",
        pdf: "/en/semen-collection-instructions",
        downloadpdf: "/pdf/en/semen-collection-instructions.pdf",
      },
    ],
  },
  {
  section_en: "IUI Instructions",
  section_ar: "تعليمـات المرضى المنظار الرحمي",
  items: [
    {
      title_en: "POST-PROCEDURE INSTRUCTIONS: IUI",
      title_ar: "تعليمات ما قبل وما بعد العملية - رقمي",
      size: "2.5 MB",
      updated: "Oct 2026",
      image: "https://bnoon-website.b-cdn.net/images/brochure/iui.jpg",
      pdf: "/en/iui-instructions",
      downloadpdf: "/pdf/en/post-iui-instructions.pdf",
    },
   
  ],
},
  {
  section_en: "Surgery Instructions",
  section_ar: "التعليمات الرقمية",
  items: [
   
    {
      title_en: "PATIENT INSTRUCTIONS FOR SURGERY",
      title_ar: "تعليمات المريض للجراحة - رقمي",
      size: "3.0 MB",
      updated: "Oct 2026",
      image: "https://bnoon-website.b-cdn.net/images/brochure/surgery.jpg",
      pdf: "/en/patient-instructions-for-surgery-digital",
      downloadpdf: "/pdf/en/patient-instructions-for-surgery-digital.pdf",
    },
  ],
},
  {
  section_en: "Gynecological Surgery",
  section_ar: "التعليمات الرقمية",
  items: [
    {
      title_en: "PRE AND POST OPERATIVE INSTRUCTIONS",
      title_ar: "تعليمات ما قبل وما بعد العملية - رقمي",
      size: "2.5 MB",
      updated: "Oct 2026",
      image: "https://bnoon-website.b-cdn.net/images/brochure/gynaecology.jpg",
      pdf: "/en/pre-and-post-operative-instructions-digital",
      downloadpdf: "/pdf/en/pre-and-post-operative-instructions-digital.pdf",
    },
   
  ],
},
{
  section_en: "Hysteroscopy Instructions",
  section_ar: "تعليمـات المرضى المنظار الرحمي",
  items: [
    {
      title_en: "OPERATIVE INSTRUCTIONS: HYSTEROSCOPY",
      title_ar: "تعليمات ما قبل وما بعد العملية - رقمي",
      size: "2.5 MB",
      updated: "Oct 2026",
      image: "https://bnoon-website.b-cdn.net/images/brochure/hysteroscopy.jpg",
      pdf: "/en/operative-hysteroscopy-instructions",
      downloadpdf: "/pdf/en/operative-hysteroscopy-instructions.pdf",
    },
   
  ],
},
{
  section_en: "Breastfeeding Guide",
  section_ar: "تعليمـات المرضى المنظار الرحمي",
  items: [
    {
      title_en: "BREASTFEEDING TIPS: A SIMPLE GUIDE FOR MOTHERS",
      title_ar: "تعليمات ما قبل وما بعد العملية - رقمي",
      size: "2.5 MB",
      updated: "Oct 2026",
      image: "https://bnoon-website.b-cdn.net/images/brochure/breastfeeding.jpg",
      pdf: "/en/operative-hysteroscopy-instructions",
      downloadpdf: "/pdf/en/breastfeeding-a-guide-for-mothers.pdf",
    },
   
  ],
}
];


const Brochures = () => {
  const cardAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
const [activeTab, setActiveTab] = React.useState("All");

const allItems = brochures.flatMap(section =>
  section.items.map(item => ({
    ...item,
    section: section.section_en
  }))
);

const filteredItems =
  activeTab === "All"
    ? allItems
    : allItems.filter(item => item.section === activeTab);
   
  return (
   
  <div className="brochures-area bg-color">
    <div className="container mt-5 mb-5 ">

      {/* ✅ TABS (FIXED POSITION) */}
      <div className="brochures-tabs">
        {["All", "Egg Retrieval", "Embryo Transfer", "Semen Collection", "IUI Instructions", "Surgery Instructions", "Gynecological Surgery", "Hysteroscopy Instructions", "Breastfeeding Guide"].map((tab, i) => (
          <button
            key={i}
            className={activeTab === tab ? "brochures-tab active" : "brochures-tab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ✅ CARDS */}
      <div className="row g-5 justify-content-center">
        {filteredItems.map((item, index) => (
          <div className="col-lg-4 col-md-4" key={index}>
            <motion.div
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <div className="brochure-card">
                <div className="image-wrapper">
                  <img src={item.image} alt={item.title_en} />
                </div>

                <div className="card-content">
                  <h3>{item.title_en}</h3>

                  <div className="card-footer">
                    <a href={item.downloadpdf} className="download-icon">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

    </div>

      {/* CSS inside same file */}
   <style jsx>{`
       
      `}</style>
    </div>
  );
};

export default Brochures;
