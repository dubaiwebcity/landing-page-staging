'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const brochures = [
  {
    section_en: "Egg Retrieval",
    section_ar: "سحب البويضات",
    items: [
      {
        title_ar: "تعـليـمـات مـا قبل سحـب البـويـضـات ",
        image: "https://bnoon-website.b-cdn.net/images/brochure/pre-egg-retrival.jpg",
         downloadpdf: "/pdf/ar/pre-operative-instructions-egg-retrieval.pdf",
      },
      {
        title_ar: "تعـليـمـات ما بعد سحـب البـويـضـات",
        image: "https://bnoon-website.b-cdn.net/images/brochure/post-egg-retrival.jpg",
       downloadpdf: "/pdf/ar/post-operative-instructions-egg-retrieval.pdf",
      },
    ],
  },
  {
    section_en: "Embryo Transfer",
    section_ar: "نقل الأجنة",
    items: [
      {
        title_ar: "تعـليـمـات مـا قبل إرجـــاع الأجنة",
        image: "https://bnoon-website.b-cdn.net/images/brochure/pre-embryo-transfer.jpg",
       downloadpdf: "/pdf/ar/pre-operative-instructions-enbryo-transfer.pdf",
      },
      {
        title_ar: "تعـليـمـات ما بعد إرجـــاع الأجنة",
        image: "https://bnoon-website.b-cdn.net/images/brochure/post-embryo-transfer.jpg",
       downloadpdf: "/pdf/ar/post-operative-instructions-enbryo-transfer.pdf",
      },
    ],
  },
  {
    section_en: "Semen Collection",
    section_ar: "جمع السائل المنوي",
    items: [
      {
        title_ar: "تعليمات جمع عينة السائل المنوي",
        image: "https://bnoon-website.b-cdn.net/images/brochure/semen-collection.jpg",
         downloadpdf: "/pdf/ar/semen-collection-instructions.pdf",
      },
    ],
  },
   {
  section_en: "Surgery Instructions",
  section_ar: "للعمليات الجراحية",
  items: [
   
    {
      title_ar: "تعليمات المريض للعمليات الجراحية",
      image: "https://bnoon-website.b-cdn.net/images/brochure/surgery.jpg",
      downloadpdf: "/pdf/ar/patient-instructions-for-surgery-digital.pdf",
    },
  ],
},
   {
  section_en: "Gynecological Surgery",
  section_ar:" الجراحات النسائية",
  items: [
    {
      title_ar: "تعليمات ما قبل وما بعد الجراحة النسائية",
      image: "https://bnoon-website.b-cdn.net/images/brochure/gynaecology.jpg",
      downloadpdf: "/pdf/ar/pre-and-post-operative-instructions-digital.pdf",
    },
   
  ],
},
];
const Brochures = () => {
  const [activeTab, setActiveTab] = useState("All");

  const cardAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // 🔥 Flatten + filter
  const filteredItems = brochures
    .flatMap(section =>
      section.items.map(item => ({
        ...item,
        section: section.section_en
      }))
    )
    .filter(item => activeTab === "All" || item.section === activeTab);

  return (
    <div className="brochures-area bg-color" dir="rtl">
      <div className="container mt-5 mb-5">

        {/* ✅ Tabs */}
        <div className="brochures-tabs">
        {[
  { en: "All", ar: "الكل" },
  { en: "Egg Retrieval", ar: "سحب البويضات" },
  { en: "Embryo Transfer", ar: "نقل الأجنة" },
  { en: "Semen Collection", ar: "جمع السائل المنوي" },
        { en: "Surgery Instructions", ar: "العمليات الجراحية" },
        { en: "Gynecological Surgery", ar: "الجراحات النسائية" },
].map((tab, i) => (
  <button
    key={i}
    className={activeTab === tab.en ? "brochures-tab active" : "brochures-tab"}
    onClick={() => setActiveTab(tab.en)}
  >
    {tab.ar}
  </button>
))}
        </div>

        {/* ✅ Cards */}
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
                  
                  {/* IMAGE */}
                  <div className="image-wrapper">
                    <img src={item.image} alt={item.title_ar} />
                  </div>

                  {/* CONTENT */}
                  <div className="card-content">
                    <h4>{item.title_ar}</h4>

                    <div className="card-footer">
                      <a href={item.downloadpdf} className="download-icon">
                        اقرأ المزيد
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>

      {/* ✅ CSS */}
      <style jsx>{`
      
      `}</style>
    </div>
  );
};

export default Brochures;
