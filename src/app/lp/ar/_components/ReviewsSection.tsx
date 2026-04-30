'use client';

import { useState } from 'react';

const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.561-.955L10 0l2.952 5.955 6.561.955-4.757 4.635 1.122 6.545z" />
    </svg>
);

const Stars = () => (
    <div className="flex items-center flex-row">
        {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
    </div>
);

const REVIEWS = [
    {
        author: 'Yoyo. Fisha',
        meta: '7 تقييمات',
        text: `الله يرزقه الجنه ديما بفتكره بالخير والله بعد 4 سنوات وبفضل الله اولاً ثم الدكتور عبد العزيز ثانيا بعد 4 شهور عملنا معه العمليه وجبت بنتين الله يباركلي فيهم يارب شكرا لكم
`,
    },
    {
        author: 'sara adib',
        meta: 'مرشد محلي · 57 تقييماً · 7 صور',
        text: 'أنصح بشدة بالدكتور عاصم الوهيبي. احترافيته لا مثيل لها، وأنا مُعجبة جداً بمستواه الطبي الرفيع. سعدت بمعرفة أنه جاء مباشرة من فرنسا، وخبرته تبدو جلياً في تعامله!',
    },
    {
        author: 'mohammed Shafi',
        meta: '7 تقييمات · صورة واحدة',
        text: `كنا نتابع الدكتور فواز إدريس على وسائل التواصل الاجتماعي منذ فترة طويلة لكننا كنا مترددين في الزيارة. في يوم من الأيام، وبعد سنوات طويلة من الانتظار، قررنا أخيراً زيارة عيادة بنون، وكانت من أفضل قراراتنا في حياتنا.

منذ الزيارة الأولى، تعامل معنا الدكتور فواز كأسرته، بقدر كبير من الاهتمام واللطف والاحترام. شرح لنا خطة العلاج بوضوح وصبر مما أعطانا ثقة وطمأنينة. اتبعنا تعليماته خطوة بخطوة، والحمد لله، بإذن الله وتحت إشرافه، حققنا النجاح.

العيادة تعيش بالفعل شعارها: "لديك حلم، ولدينا خطة."
`,
    },
    {
        author: 'roro alsidrah',
        meta: '8 تقييمات',
        text: `الاستقبال فوز وشيماء عسل ومؤدبات وخدومات جداً الله يرزقهم
والدكتور عبدالعزيز الشهراني 🙏🏻 رائع ونفسيته حلوه`,
    },
];

function ReviewCard({ text }: { text: string }) {
    const [expanded, setExpanded] = useState(false);
    const firstBreak = text.indexOf('\n');
    const hasMore = firstBreak !== -1;
    const first = hasMore ? text.slice(0, firstBreak) : text;
    const rest = hasMore ? text.slice(firstBreak + 2) : '';

    return (
        <p className="mt-4 text-sm text-gray-600 whitespace-pre-line text-right">
            {first}
            {hasMore && !expanded && (
                <>
                    {'… '}
                    <button
                        type="button"
                        onClick={() => setExpanded(true)}
                        className="font-semibold text-[#38bdf8] hover:underline"
                    >
                        اقرأ أكثر
                    </button>
                </>
            )}
            {hasMore && expanded && (
                <>
                    {'\n\n'}
                    {rest}
                    <button
                        type="button"
                        onClick={() => setExpanded(false)}
                        className="block mt-2 font-semibold text-[#38bdf8] hover:underline"
                    >
                        عرض أقل
                    </button>
                </>
            )}
        </p>
    );
}

export default function ReviewsSection() {
    return (
        <section id="reviews" className="py-10 mx-1 rounded-2xl lg:py-16 lg:mx-8 bg-white/80">
            <div className="mx-auto mb-10 w-full max-w-4xl sm:px-12 lg:mb-20">
                <h2 className="mb-1 text-2xl font-bold leading-snug text-center text-black lg:text-4xl sm:text-5xl">
                    كلمات من القلب
                </h2>
                <p className="mx-auto mb-14 max-w-xl text-base text-center lg:text-base">
                    تقييمات المرضى عبر جوجل
                </p>
            </div>

            <div className="px-8 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {REVIEWS.map((review) => (
                        <div key={review.author} className="flex flex-col flex-1">
                            <div className="flex items-start space-x-4 space-x-reverse">
                                <div className="text-right">
                                    <Stars />
                                    <p className="font-semibold">{review.author}</p>
                                    <p className="mb-2 text-xs opacity-30">{review.meta}</p>
                                </div>
                            </div>
                            <ReviewCard text={review.text} />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <a
                        href="https://www.google.com/search?q=Bnoon+fertility+reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white rounded-md transition-colors duration-200 bg-[#38bdf8] hover:bg-[#0ea5e9]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="ml-2 w-4 h-4 fill-current">
                            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                        </svg>
                        اقرأ المزيد من التقييمات
                    </a>
                </div>
            </div>
        </section>
    );
}
