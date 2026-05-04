'use client';

import React, { useRef, useState, useEffect } from 'react';

const doctors = [
    {
        id: 1,
        name: "د. عبد العزيز الشهراني",
        title: "المدير الطبي للمجموعة",
        sub: "المدير الطبي للمجموعة استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب والمناظير",
        location: "الرياض",
        img: "/images/doctors/Dr.-Abdel%20Aziz%20(1).png",
        profileUrl: "ar/dr-abdalaziz-alshahrani"
    },
    {
        id: 2,
        name: "د. فواز إدريس",
        title: "المدير التنفيذي",
        sub: "المدير التنفيذي، بنون - جدة استشاري أمراض النساء والولادة والحمل الحرج وطب الأجنة والأمومة والعقم وأطفال الأنابيب والمناظير",
        location: "جدة",
        img: "/images/doctors/Fawaz%20(1).png",
        profileUrl: "ar/dr-fawaz-edris"
    },
    {
        id: 3,
        name: "د. مازن بشارة",
        title: "المدير الطبي",
        sub: "المدير الطبي، بنون - جدة استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب والمناظير",
        location: "جدة",
        img: "/images/doctors/Mazin.png",
        profileUrl: "ar/dr-mazin-bishara"
    },
    {
        id: 15,
        name: "د. بسام نصير",
        title: "استشاري",
        sub: "استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب والمناظير",
        location: "الأحساء",
        img: "/images/doctors/Dr.%20Bassam%20Mohammad%20Nusair1.jpg",
        profileUrl: "ar/dr-bassamnusair"
    },
    {
        id: 4,
        name: "د. عاصم الوهيبي",
        title: "استشاري",
        sub: "استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب والمناظير",
        location: "الرياض",
        img: "/images/doctors/Dr.%20Asim.png",
        profileUrl: "ar/dr-asim-alwohaibi"
    },
    {
        id: 6,
        name: "د. أحمد الشيخ",
        title: "استشاري",
        sub: "استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب والمناظير",
        location: "جدة",
        img: "/images/doctors/Dr%20Ahmed%20Shaikh.png",
        profileUrl: "ar/dr-ahmed-alshaikh"
    },
    {
        id: 7,
        name: "د. وجدي العمرى",
        title: "استشاري",
        sub: "استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب والمناظير",
        location: "الرياض",
        img: "/images/doctors/Dr%20wajdi%20(1).png",
        profileUrl: "ar/dr-wajdi-alomari"
    },
    {
        id: 16,
        name: "د. أحمد النويصر",
        title: "استشاري",
        sub: "استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب والمناظير",
        location: "الأحساء",
        img: "/images/doctors/1%20(20).jpg",
        profileUrl: "ar/dr-ahmedal-nowasser"
    },
    {
        id: 11,
        name: "د. مايا البزره",
        title: "استشاري",
        sub: "استشارية أمراض النساء والولادة والعقم وأطفال الأنابيب",
        location: "جدة",
        img: "/images/doctors/Maya.png",
        profileUrl: "ar/dr-maya-albezreh"
    },
    {
        id: 8,
        name: "د. داليا نور",
        title: "استشاري",
        sub: "استشارية أمراض النساء والولادة وتأخر الحمل",
        location: "الرياض",
        img: "/images/doctors/Dr.%20Dalia%20Adel.png",
        profileUrl: "ar/dr-dalia-nour"
    },
    {
        id: 9,
        name: "د. أحمد هارون",
        title: "استشاري",
        sub: "استشاري المسالك البولية وأمراض الذكورة والعقم",
        location: "جدة",
        img: "/images/doctors/Dr%20haroun%20(1).png",
        profileUrl: "ar/dr-ahmad-haroun"
    },
    {
        id: 10,
        name: "د. موسى النعمي",
        title: "استشاري",
        sub: "استشاري المسالك البولية وأمراض الذكورة والعقم",
        location: "الرياض",
        img: "/images/doctors/Dr.%20Moussa%20El%20Naiemy.png",
        profileUrl: "ar/dr-moussa-el-naiemy"
    },
    {
        id: 12,
        name: "د. رزان غيث",
        title: "استشاري",
        sub: "استشارية أمراض النساء والولادة وتأخر الحمل",
        location: "جدة",
        img: "/images/doctors/Razan.png",
        profileUrl: "ar/dr-razan-ghaith"
    },
    {
        id: 17,
        name: "د. مدين الخلف",
        title: "استشاري",
        sub: "استشاري أمراض النساء والولادة",
        location: "الأحساء",
        img: "/images/doctors/2%20(13).jpg",
        profileUrl: "ar/dr-median-alkhalaf"
    },
    {
        id: 13,
        name: "د. مرام دعدوع",
        title: "طبيبة مقيمة أولى",
        sub: "نائب أول، أمراض النساء والولادة",
        location: "جدة",
        img: "/images/doctors/Maryam.png",
        profileUrl: "ar/dr-maram-dadoua"
    },
    {
        id: 14,
        name: "د. رانيا الشريفي",
        title: "طبيبة مقيمة",
        sub: "أخصائية أمراض النساء والولادة",
        location: "الأحساء",
        img: "/images/doctors/Dr.%20Rania%20Mohamed%20Ibrahim%20Elsherify1.jpg",
        profileUrl: "ar/dr-rania-elsherify"
    },
    {
        id: 18,
        name: "د. دينا الكحيمي",
        title: "طبيبة مقيمة",
        sub: "أخصائية أمراض النساء والولادة والعقم وأطفال الأنابيب",
        location: "الرياض",
        img: "/images/doctors/dina.jpeg",
        profileUrl: "ar/dr-dina-alkehaimi"
    }
];

export default function DoctorCarousel() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [atBeginning, setAtBeginning] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const isHoveredRef = useRef(false);

    const updateState = () => {
        const el = sliderRef.current;
        if (el) {
            // In RTL, scrollLeft can be negative or use different sign convention
            const scrollLeft = Math.abs(el.scrollLeft);
            const isAtBeginning = scrollLeft <= 15;
            const isAtEnd = scrollLeft + el.clientWidth >= el.scrollWidth - 15;
            setAtBeginning(isAtBeginning);
            setAtEnd(isAtEnd);
        }
    };

    const scroll = (direction: 'next' | 'prev') => {
        const el = sliderRef.current;
        if (el) {
            const firstCard = el.firstElementChild as HTMLElement;
            const cardWidth = firstCard ? firstCard.clientWidth + 24 : el.clientWidth;
            // In RTL, next scrolls left (negative), prev scrolls right (positive)
            const move = direction === 'next' ? -cardWidth : cardWidth;
            el.scrollBy({ left: move, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const el = sliderRef.current;
        if (el) {
            const timer = setTimeout(updateState, 100);
            el.addEventListener('scroll', updateState);
            window.addEventListener('resize', updateState);
            return () => {
                clearTimeout(timer);
                el.removeEventListener('scroll', updateState);
                window.removeEventListener('resize', updateState);
            };
        }
    }, []);

    useEffect(() => {
        const el = sliderRef.current;
        if (!el) return;
        const interval = setInterval(() => {
            if (isHoveredRef.current) return;
            // RTL: scrollLeft is negative in most browsers
            const scrollLeft = Math.abs(el.scrollLeft);
            const isAtEnd = scrollLeft + el.clientWidth >= el.scrollWidth - 15;
            if (isAtEnd) {
                el.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                const firstCard = el.firstElementChild as HTMLElement;
                const cardWidth = firstCard ? firstCard.clientWidth + 24 : el.clientWidth;
                el.scrollBy({ left: -cardWidth, behavior: 'smooth' });
            }
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="doctors"
            className="py-16 bg-gray-50 overflow-hidden"
            onMouseEnter={() => { isHoveredRef.current = true; }}
            onMouseLeave={() => { isHoveredRef.current = false; }}
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div className="text-right md:text-right">
                        <h2 className="mb-1 text-2xl font-bold leading-snug text-black lg:text-4xl sm:text-5xl">أطباؤنا المتخصصون</h2>
                        <p className="text-zinc-600 mt-2 text-lg">تعرّف على فريقنا الطبي المتميز في جميع أنحاء المنطقة.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* In RTL: prev goes right, next goes left — icons are flipped visually by browser */}
                        <button
                            type="button"
                            onClick={() => scroll('prev')}
                            className={`p-3 rounded-full border-2 transition-all shadow-sm ${
                                atBeginning
                                ? 'border-gray-200 text-gray-300 cursor-not-allowed opacity-50'
                                : 'border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8] hover:text-white active:scale-95'
                            }`}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                        </button>
                        <button
                            type="button"
                            onClick={() => scroll('next')}
                            className={`p-3 rounded-full border-2 transition-all shadow-sm ${
                                atEnd
                                ? 'border-gray-200 text-gray-300 cursor-not-allowed opacity-50'
                                : 'border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8] hover:text-white active:scale-95'
                            }`}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                    </div>
                </div>

                <div
                    ref={sliderRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-8 hide-scrollbar"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    {doctors.map((doctor) => (
                        <div
                            key={doctor.id}
                            className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                        >
                            <div className="group bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-500 flex flex-col h-full overflow-hidden">
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={doctor.img}
                                        alt={doctor.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-5 flex flex-col flex-grow text-right">
                                    

                                    <h3 className="text-lg font-bold text-zinc-800 mb-2 group-hover:text-[#38bdf8] transition-colors leading-tight">
                                        {doctor.name}
                                    </h3>

                                    <p className="text-sm text-zinc-500 line-clamp-3 mb-6 leading-relaxed flex-grow">
                                        {doctor.sub}
                                    </p>

                                    <div className="pt-4 border-t border-gray-100 flex items-center mt-auto">
                                        <div className="flex items-center text-zinc-900 text-xs font-bold">
                                            
                                            <svg className="w-3.5 h-3.5 ml-1.5 mr-0 text-[#38bdf8]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                            {doctor.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
