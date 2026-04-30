'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
    interface Window {
        _indentme: IArguments[];
        indentme: (...args: unknown[]) => void;
    }
}

export default function BookSection() {
    useEffect(() => {
        window._indentme = window._indentme || [];
        window.indentme = function () {
            // eslint-disable-next-line prefer-rest-params
            window._indentme.push(arguments as unknown as IArguments);
        };
        window.indentme('form', {
            selector: '#indentme-form-ar-1',
            action: 'https://indentme.io/form/bnoon/5/ar',
            css: 'https://bnoon.sa/css/lp.css',
            submit_label: 'طلب معاودة الاتصال',
        });

        const handleMessage = (event: MessageEvent) => {
            if (event.origin !== 'https://indentme.io') return;
            if (typeof event.data === 'object' && event.data !== null && event.data.type === 'iframeHeight') {
                const iframe = document.querySelector<HTMLIFrameElement>('#indentme-form-ar-1 > iframe');
                if (iframe) iframe.style.height = `${event.data.height}px`;
            }
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <section id="book-appointment" className="px-8 py-4 md:py-16 mx-auto max-w-7xl bg-[#f4f9fc] rounded-3xl">
            <div className="flex flex-col gap-10 items-center lg:flex-row-reverse">
                <div className="mx-auto lg:w-1/2 text-right">
                    <h2 className="mb-1 text-2xl font-bold leading-snug text-right text-black lg:text-4xl sm:text-5xl">
                        احجزوا
                    </h2>
                    <p className="mb-4 max-w-xl text-2xl font-bold text-right lg:mb-14 lg:text-4xl">
                        استشارتكم الآن
                    </p>
                    <p>
                        سواء كنتم تودون فحص مؤشرات الخصوبة لديكم، أو تبحثون عن علاج لتحديات الإنجاب، أو تفكرون في تقنيات الإخصاب المساعد، نحن هنا لنقدّم لكم رعاية شخصية ودعمًا متكاملاً في كل مرحلة من رحلتكم.
                        <br /><br />
                        تواصلوا معنا لحجز موعدكم وبدء رحلتكم نحو الأبوة والأمومة.
                    </p>
                </div>

                <div className="relative w-full rounded-2xl lg:w-1/2 bg-primary-300">
                    <div className="overflow-hidden relative w-full bg-white rounded-xl">
                        <div className="w-full min-h-[550px] p-5" id="indentme-form-ar-1" />
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
