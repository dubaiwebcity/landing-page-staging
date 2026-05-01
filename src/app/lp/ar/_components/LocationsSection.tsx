'use client';

import { useState } from 'react';

interface Location {
    name: string;
    address: string;
    mapSrc: string;
}

const LOCATIONS: Record<string, Location> = {
    riyadh: {
        name: 'بنــــون – الـرياض',
        address: 'شارع أبو جعفر المنصور، حي الشهداء، الرياض',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.1839039641172!2d46.7350649!3d24.789155499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efddca951caad%3A0xff57eb5bc69f10ea!2zQm5vb24gLSBSaXlhZGgg2KjZhtmI2YYgLSDYp9mE2LHZitin2LY!5e0!3m2!1sen!2s!4v1762873112473!5m2!1sen!2s',
    },
    jeddah: {
        name: 'بنــــون – جـــــــدة',
        address: 'مبنى كوارتز، شارع الكورنيش، حي الشاطىء، جدة',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.6924446189687!2d39.1215956!3d21.558878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3dbc1b47a93e5%3A0x403eb3afa0ca3bd7!2zQm5vb24gLSBKZWRkYWgg2KjZhtmI2YYgLSDYrNiv2KkgKGZvcm1lcmx5IGtub3duIGFzIEhlYWx0aFBsdXMgRmVydGlsaXR5IEplZGRhaCk!5e0!3m2!1sen!2s!4v1762873494627!5m2!1sen!2s',
    },
    alahsa: {
        name: 'بنــــون – الأحساء',
        address: 'طريق الظهران, حي الفيصل، الطابق 12، البرج الجنوبي، مستشفى الموسى التخصصي، الأحساء',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3603.0477616735334!2d49.572361099999995!3d25.4366667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDI2JzEyLjAiTiA0OcKwMzQnMjAuNSJF!5e0!3m2!1sen!2s!4v1765622876993!5m2!1sen!2s',
    },
    kingsalman: {
        name: 'بنون – طريق الملك سلمان (الافتتاح قريباً)',
        address: 'طريق الملك سلمان، الرياض',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.3583391235643!2d46.59119140000001!3d24.8174163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee69d1c7fb897%3A0x46a86841c1f1d0e8!2zUlJRQTQxNTAsIDQxNTAgS2luZyBTYWxtYW4gQmluIEFiZHVsYXppeiBSZCwgNjkzMtiMINit2Yog2KfZhNmC2YrYsdmI2KfZhtiMIFJpeWFkaCAxMzUzMiwgU2F1ZGkgQXJhYmlh!5e0!3m2!1sen!2s!4v1762873544370!5m2!1sen!2s',
    },
};

export default function LocationsSection() {
    const [activeTab, setActiveTab] = useState<keyof typeof LOCATIONS>('riyadh');
    const loc = LOCATIONS[activeTab];

    return (
        <section id="locations" className="py-16 md:py-24 bg-white">
            <div className="px-3 md:px-6 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-4 md:gap-16 lg:grid-cols-2">

                    <div className="text-right">
                        <h2 className="mb-1 text-2xl font-bold leading-snug text-black lg:text-4xl sm:text-5xl">
                            مواقعنا
                        </h2>
                        <p className="mb-10 text-sm leading-relaxed text-zinc-500 max-w-md mr-0 ml-auto">
                            شبكة بنـــون للإخصاب وصحة المرأة تمتد عبر عدة مراكز متطورة في مختلف مناطق المملكة العربية السعودية لخدمة العائلات بمعايير عالمية.
                        </p>

                        <div className="flex flex-col gap-1 md:gap-4">
                            {(Object.entries(LOCATIONS) as [keyof typeof LOCATIONS, Location][]).map(([key, location]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`flex items-center justify-between p-4 md:p-6 text-right transition-colors border-2 rounded-2xl group ${activeTab === key
                                            ? 'border-[#e0f2fe] bg-[#f0f9ff]'
                                            : 'border-transparent hover:bg-zinc-50'
                                        }`}
                                >
                                    <div>
                                        <h4 className={`text-sm font-bold mb-1 transition-colors group-hover:text-[#38bdf8] ${activeTab === key ? 'text-[#38bdf8]' : 'text-[#0a192f]'}`}>
                                            {location.name}
                                        </h4>
                                    </div>
                                    {activeTab === key && (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#38bdf8" className="w-5 h-5 shrink-0">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center lg:justify-end">
                        <div className="w-full max-w-lg p-4 md:p-10 bg-white border shadow-[0_20px_50px_rgb(0,0,0,0.04)] border-zinc-100 rounded-[2rem]">
                            <div className="w-full h-48 mb-8 overflow-hidden bg-zinc-100 rounded-2xl">
                                <iframe
                                    src={loc.mapSrc}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allow="fullscreen"
                                    title={`خريطة ${loc.name}`}
                                />
                            </div>

                            <h3 className="mb-10 text-xm md:text-3xl font-normal text-[#0a192f] text-right">
                                {loc.name}
                            </h3>

                            <div className="flex flex-col gap-8 mb-10">
                                <div className="flex items-start gap-4 flex-row">
                                    <div className="flex items-center justify-center w-10 h-10 mt-1 rounded-full bg-[#f0f9ff] text-[#38bdf8] shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </div>
                                    <div className="text-right">
                                        <span className="block mb-1 text-[10px] font-bold tracking-widest text-zinc-400 uppercase">العنوان</span>
                                        <p className="text-sm font-medium text-[#0a192f]">{loc.address}</p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href={`https://www.google.com/maps?q=${encodeURIComponent(loc.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-full gap-2 py-3.5 text-sm font-bold text-white transition-colors rounded-xl bg-[#38bdf8] hover:bg-[#0ea5e9]"
                            >
                                الاتجاهات
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
