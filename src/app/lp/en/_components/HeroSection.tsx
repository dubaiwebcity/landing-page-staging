'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
    interface Window {
        _indentme: IArguments[];
        indentme: (...args: unknown[]) => void;
    }
}

declare let gtag: any;
declare let fbq: any;
 
export default function HeroSection() {
    useEffect(() => {
        window._indentme = window._indentme || [];
        window.indentme = function () {
            // eslint-disable-next-line prefer-rest-params
            window._indentme.push(arguments as unknown as IArguments);
        };
        window.indentme('form', {
            selector: '#indentme-form-hero',
            action: 'https://indentme.io/form/bnoon/5/en',
            css: 'https://bnoon.sa/css/lp.css',
            submit_label: 'Request Callback',
        });

        const handleMessage = (event: MessageEvent) => {
            if (event.origin !== 'https://indentme.io') return;
            if (typeof event.data === 'object' && event.data !== null && event.data.type === 'iframeHeight') {
                const iframe = document.querySelector<HTMLIFrameElement>('#indentme-form-hero > iframe');
                if (iframe) iframe.style.height = `${event.data.height}px`;
            }
            try {
                if (event.origin == "https://indentme.io") {
                    var data = JSON.parse(event.data);
                    if (data.status === "success") {
                        gtag("event", "generate_lead");
                        if (typeof fbq != "undefined") fbq("track", "Lead", {});
                    }
                }
            } catch (err) {
                console.log(err);
            }
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <section
            className="relative flex items-center min-h-screen"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=2070&auto=format&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-white/70 sm:bg-gradient-to-r sm:from-white/90 sm:via-white/70 sm:to-white/40" />

            <div className="relative z-10 w-full overflow-hidden flex flex-col items-center justify-between px-6 pt-12 pb-24 mx-auto gap-14 max-w-7xl lg:flex-row lg:pt-24">

                <div className="w-full max-w-xl">
                    <h1 className="mb-6 text-3xl md:text-4xl mt-24 md:mt-0 font-extrabold leading-[1.1] text-[#0a192f] lg:text-6xl">
                        Building families<br />across Saudi Arabia
                    </h1>
                    <p className="mb-10 text-lg font-medium leading-relaxed text-slate-700">
                        Through advanced ḟertility care and decades of medical expertise. Supporting families with trusted care and experienced specialists.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-5 py-2 text-xs font-bold rounded-full bg-[#38bdf8] text-white">IVḞ</span>
                        <span className="px-5 py-2 text-xs font-bold rounded-full bg-[#38bdf8] text-white">Genetic Testing</span>
                        <span className="px-5 py-2 text-xs font-bold rounded-full bg-[#38bdf8] text-white">Gender Selection</span>
                    </div>
                </div>

                <div className="w-full max-w-md">
                    <div className="p-8 bg-white/95 backdrop-blur-md rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20">
                        <h2 className="mb-2 text-2xl font-bold text-gray-900">
                            Speak to an advisor
                        </h2>
                        <p className="mb-6 text-sm font-medium text-slate-500">
                            Fill out the form below for a call back.
                        </p>
                        <div className="w-full min-h-[550px]" id="indentme-form-hero" />
                    </div>
                </div>
            </div>

            <Script
                src="https://storage.googleapis.com/fixed/js/indentme.js"
                strategy="afterInteractive"
            />
        </section>
    );
}
