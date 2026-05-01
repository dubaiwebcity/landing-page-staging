'use client';

import React, { useRef, useState, useEffect } from 'react';

const doctors = [
    {
        id: 1,
        name: "Dr. Abdalaziz Al-Shahrani",
        title: "Group Medical Director",
        sub: "Consultant, Obstetrics, Gynecology, Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery",
        location: "Riyadh",
        img: "/images/doctors/Dr.-Abdel%20Aziz%20(1).png",
        profileUrl: "en/dr-abdalaziz-alshahrani"
    },
    {
        id: 2,
        name: "Prof. Fawaz Edris",
        title: "Executive Director",
        sub: "Consultant, Obstetrics, Gynecology, Reproductive Endocrinology, Infertility (IVF), Minimally Invasive Surgery & Maternal Fetal Medicine",
        location: "Jeddah",
        img: "/images/doctors/Fawaz%20(1).png",
        profileUrl: "en/dr-fawaz-edris"
    },
    {
        id: 3,
        name: "Dr. Mazin Bishara",
        title: "Medical Director",
        sub: "Consultant, Obstetrics, Gynecology, Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery",
        location: "Jeddah",
        img: "/images/doctors/Mazin.png",
        profileUrl: "en/dr-mazin-bishara"
    },
    {
        id: 15,
        name: "Dr. Bassam Nusair",
        title: "Consultant",
        sub: "Consultant, Obstetrics, Gynecology, Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery",
        location: "Al Ahsa",
        img: "/images/doctors/Dr.%20Bassam%20Mohammad%20Nusair1.jpg",
        profileUrl: "en/dr-bassamnusair"
    },
    {
        id: 4,
        name: "Dr. Asim Al Wohaibi",
        title: "Consultant",
        sub: "Consultant, Obstetrics, Gynecology, Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery",
        location: "Riyadh",
        img: "/images/doctors/Dr.%20Asim.png",
        profileUrl: "en/dr-asim-alwohaibi"
    },
    {
        id: 6,
        name: "Dr. Ahmed Alshaikh",
        title: "Consultant",
        sub: "Consultant, Obstetrics, Gynecology, Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery",
        location: "Jeddah",
        img: "/images/doctors/Dr%20Ahmed%20Shaikh.png",
        profileUrl: "en/dr-ahmed-alshaikh"
    },
    {
        id: 7,
        name: "Dr. Wajdi Al Omari",
        title: "Consultant",
        sub: "Consultant, Obstetrics, Gynecology, Reproductive Endocrinology & Infertility (IVF), Minimally Invasive Surgery",
        location: "Riyadh",
        img: "/images/doctors/Dr%20wajdi%20(1).png",
        profileUrl: "en/dr-wajdi-alomari"
    },
    {
        id: 16,
        name: "Dr. Ahmed Al-Nowasser",
        title: "Consultant",
        sub: "Consultant, Obstetrics, Gynecology, Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery",
        location: "Al Ahsa",
        img: "/images/doctors/1 (20).jpg",
        profileUrl: "en/dr-ahmedal-nowasser"
    },
    {
        id: 11,
        name: "Dr. Maya Albezreh",
        title: "Consultant",
        sub: "Consultant, Obstetrics, Gynecology, Reproductive Endocrinology & Infertility (IVF)",
        location: "Jeddah",
        img: "/images/doctors/Maya.png",
        profileUrl: "en/dr-maya-albezreh"
    },
    {
        id: 8,
        name: "Dr. Dalia Adel",
        title: "Consultant",
        sub: "Consultant, Obstetrics, Gynecology & Infertility",
        location: "Riyadh",
        img: "/images/doctors/Dr.%20Dalia%20Adel.png",
        profileUrl: "en/dr-dalia-nour"
    },
    {
        id: 9,
        name: "Dr. Ahmad Haroun",
        title: "Consultant",
        sub: "Consultant, Urology, Andrology & Male Infertility",
        location: "Jeddah",
        img: "/images/doctors/Dr%20haroun%20(1).png",
        profileUrl: "en/dr-ahmad-haroun"
    },
    {
        id: 10,
        name: "Dr. Mussa AlNumi",
        title: "Consultant",
        sub: "Consultant, Urology, Andrology & Male Infertility",
        location: "Riyadh",
        img: "/images/doctors/Dr.%20Moussa%20El%20Naiemy.png",
        profileUrl: "en/dr-moussa-el-naiemy"
    },
    {
        id: 12,
        name: "Dr. Razan Ghaith",
        title: "Consultant",
        sub: "Consultant, Obstetrics, Gynecology & Delayed Pregnancy",
        location: "Jeddah",
        img: "/images/doctors/Razan.png",
        profileUrl: "en/dr-razan-ghaith"
    },
    // {
    //     id: 17,
    //     name: "Dr. Median Alkhalaf",
    //     title: "Consultant",
    //     sub: "Consultant, Obstetrics & Gynecology",
    //     location: "Al Ahsa",
    //     img: "/images/doctors/2 (13).jpg",
    //     profileUrl: "en/dr-median-alkhalaf"
    // },
    {
        id: 13,
        name: "Dr. Maram Dadoua",
        title: "Senior Registrar",
        sub: "Senior Registrar, Obstetrics & Gynecology",
        location: "Jeddah",
        img: "/images/doctors/Maryam.png",
        profileUrl: "en/dr-maram-dadoua"
    },
    {
        id: 14,
        name: "Dr. Rania Elsherify",
        title: "Registrar",
        sub: "Obstetrics & Gynecology Registrar",
        location: "Al Ahsa",
        img: "/images/doctors/Dr.%20Rania%20Mohamed%20Ibrahim%20Elsherify1.jpg",
        profileUrl: "en/dr-rania-elsherify"
    },
    {
        id: 19,
        name: "Dr. Dina Alkehaimi",
        title: "Registrar",
        sub: "Senior Registrar, Obstetrics, Gynecology, Reproductive Endorincology & Infertility (IVF)",
        location: "Riyadh",
        img: "/images/doctors/dina.jpeg",
        profileUrl: ""
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
            const isAtBeginning = el.scrollLeft <= 15;
            const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 15;
            
            setAtBeginning(isAtBeginning);
            setAtEnd(isAtEnd);
        }
    };

    const scroll = (direction: 'next' | 'prev') => {
        const el = sliderRef.current;
        if (el) {
            // Calculate width of one card + the gap
            const firstCard = el.firstElementChild as HTMLElement;
            const cardWidth = firstCard ? firstCard.clientWidth + 24 : el.clientWidth;
            
            const move = direction === 'next' ? cardWidth : -cardWidth;
            el.scrollBy({ left: move, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const el = sliderRef.current;
        if (el) {
            // Initial check with a slight delay to allow the grid to paint
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
            const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 15;
            if (isAtEnd) {
                el.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                const firstCard = el.firstElementChild as HTMLElement;
                const cardWidth = firstCard ? firstCard.clientWidth + 24 : el.clientWidth;
                el.scrollBy({ left: cardWidth, behavior: 'smooth' });
            }
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="doctors"
            className="py-16 overflow-hidden"
            onMouseEnter={() => { isHoveredRef.current = true; }}
            onMouseLeave={() => { isHoveredRef.current = false; }}
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <h2 className="mb-1 text-2xl font-bold leading-snug text-black lg:text-4xl sm:text-5xl">Our Consultants</h2>
                        <p className="text-zinc-600 mt-2 text-lg">Meet our experienced board-certified physicians across the region.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => scroll('prev')}
                            className={`p-3 rounded-full border-2 transition-all shadow-sm ${
                                atBeginning 
                                ? 'border-gray-200 text-gray-300 cursor-not-allowed opacity-50' 
                                : 'border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8] hover:text-white active:scale-95'
                            }`}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
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
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
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
                                    <img
                                        src={doctor.img}
                                        alt={doctor.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-5 flex flex-col flex-grow">
                                    {/* <div className="flex items-center gap-2 mb-2">
                                        <span className="inline-block w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                                        <span className="text-[10px] font-black text-[#38bdf8] uppercase tracking-[0.2em]">{doctor.title}</span>
                                    </div> */}
 
                                    <h3 className="text-lg font-bold text-zinc-800 mb-2 group-hover:text-[#38bdf8] transition-colors leading-tight">
                                        {doctor.name}
                                    </h3>

                                    <p className="text-sm text-zinc-500 mb-6 leading-relaxed flex-grow">
                                        {doctor.sub}
                                    </p>

                                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                                        <div className="flex items-center text-zinc-900 text-xs font-bold">
                                            <svg className="w-3.5 h-3.5 mr-1.5 text-[#38bdf8]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
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