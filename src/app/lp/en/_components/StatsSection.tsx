'use client';

import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  target: number;
  suffix: string;
  label: string;
  visible: boolean;
}

function StatCounter({ target, suffix, label, visible }: StatCounterProps) {
  const [current, setCurrent] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!visible || startedRef.current) return;
    startedRef.current = true;
    const duration = 2000;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCurrent(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [visible, target]);

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <span className="text-4xl font-normal text-[#38bdf8]" style={{ fontFamily: 'Georgia, serif' }}>
        {current}{suffix}
      </span>
      <span className="text-xs font-bold tracking-widest text-[#64748b] uppercase">{label}</span>
    </div>
  );
}

const STATS = [
  { target: 5000, suffix: '+', label: 'IVḞ CYCLES ANNUALLY' },
  { target: 80,   suffix: '+', label: 'CLINICIANS' },
  { target: 150,  suffix: '',  label: 'PROFESSIONAL STAFF' },
  { target: 1000, suffix: '+', label: 'HAPPY FAMILIES' },
  { target: 5,    suffix: '',  label: 'STRATEGIC LOCATIONS' },
];

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="stats" className="py-16 bg-white border-b border-gray-100">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-5">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={i === 4 ? 'col-span-2 md:col-span-1' : ''}
            >
              <StatCounter
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                visible={visible}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
