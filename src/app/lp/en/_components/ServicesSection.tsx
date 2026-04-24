interface ServicesSectionProps {
  onBookNow: () => void;
}

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3.5 h-3.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const SERVICES = [
  {
    label: 'IVḞ / ICSI',
    description: 'Intracytoplasmic Sperm Injection combined with In Vitro Ḟertilization for enhanced success rates in your journey.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm3.675 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75z" />
      </svg>
    ),
  },
  {
    label: 'Family Planning',
    description: 'Comprehensive guidance and medical support for timing and spacing your family\'s growth according to your needs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    label: 'Male Inḟertility',
    description: 'Specialized diagnostics and advanced treatments addressing sperm quality and male reproductive health.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25l2.25 4.5 4.5-9 2.25 4.5h2.25C18.496 12 19 12.504 19 13.125v.75c0 .621-.504 1.125-1.125 1.125h-2.25l-2.25-4.5-4.5 9-2.25-4.5H4.125A1.125 1.125 0 013 13.875v-.75z" />
      </svg>
    ),
  },
  {
    label: 'Genetic Testing',
    description: 'Advanced screening (PGT-A/M) to detect chromosomal abnormalities and ensure the healthiest start possible.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    label: 'Egg Freezing',
    description: 'Preserving your ḟertility today to provide you with more options and peace of mind for your future family goals.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3m-9-6h18m-18 0l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M6.343 6.343l11.314 11.314m-11.314 0l11.314-11.314" />
      </svg>
    ),
  },
  {
    label: 'IUI',
    description: 'Intrauterine Insemination, a less invasive and effective ḟertility treatment to help you conceive naturally.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ServicesSection({ onBookNow }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 bg-[#f4f9fc]">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="mx-auto mb-10 w-full max-w-4xl sm:px-12">
          <h2 className="mb-1 text-2xl font-thin leading-snug text-center text-black lg:text-4xl sm:text-5xl">
            Choose Your Care Pathway
          </h2>
          <p className="mx-auto mb-2 mt-4 max-w-xl text-xl font-bold text-center lg:text-2xl">
            Let&apos;s guide you through the right path for you.
          </p>
          <p className="mx-auto mb-14 max-w-xl text-sm text-center">
            Serving families across five locations in Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.label} className="flex flex-col h-full p-10 bg-white shadow-sm rounded-[2rem]">
              <div className="flex items-center justify-center w-14 h-14 mb-6 bg-[#f0f7fb] rounded-2xl text-[#0ea5e9]">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#0a192f]">{service.label}</h3>
              <p className="flex-grow mb-8 text-sm leading-relaxed text-slate-500">{service.description}</p>
              <button
                onClick={onBookNow}
                className="flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] text-[#38bdf8] uppercase hover:text-[#0ea5e9] transition-colors mt-auto"
              >
                Book Now
                <ArrowIcon />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
