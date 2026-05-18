'use client';

import { useEffect, useRef, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [form, setForm] = useState({ name: '', phone: '' });
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">

        {/* Backdrop */}
        <div
          ref={backdropRef}
          className="fixed inset-0 transition-opacity bg-zinc-900/40 backdrop-blur-sm"
          aria-hidden="true"
          onClick={onClose}
        />

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Panel */}
        <div className="inline-block w-full max-w-4xl text-left align-bottom transition-all transform bg-white rounded-3xl shadow-xl sm:my-8 sm:align-middle overflow-hidden relative z-10">
          <div className="flex flex-col md:flex-row">

            {/* Image side */}
            <div className="w-full md:w-1/2 min-h-[300px] relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=2070&auto=format&fit=crop"
                alt="IVḞ Care"
                className="absolute inset-0 object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Advanced IVḞ Care
                </h3>
                <p className="text-white/90 text-sm">Trusted medical expertise for your family&apos;s future.</p>
              </div>
            </div>

            {/* Form side */}
            <div className="w-full md:w-1/2 p-8 sm:p-10 bg-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-[#0a192f] mb-2" id="modal-title">
                    Book a Consultation
                  </h3>
                  <p className="text-sm font-medium text-zinc-500 mb-8">
                    Leave your details and our IVḞ specialists will contact you shortly.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-zinc-400 hover:text-zinc-500 hover:bg-zinc-100 p-2 rounded-full transition-colors relative z-20"
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block mb-1.5 text-xs font-bold tracking-wide text-zinc-400 uppercase">Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-zinc-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full py-2.5 pl-9 pr-3 text-sm font-medium transition border rounded-xl bg-zinc-50/50 border-zinc-200 text-zinc-700 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] placeholder-zinc-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1.5 text-xs font-bold tracking-wide text-zinc-400 uppercase">Phone</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-zinc-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      placeholder="+966"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full py-2.5 pl-9 pr-3 text-sm font-medium transition border rounded-xl bg-zinc-50/50 border-zinc-200 text-zinc-700 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] placeholder-zinc-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-bold text-white transition rounded-xl bg-[#38bdf8] hover:bg-[#0ea5e9] shadow-md shadow-cyan-500/20 mt-6"
                >
                  Request a Call Back
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
