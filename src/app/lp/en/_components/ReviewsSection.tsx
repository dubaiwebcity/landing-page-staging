'use client';

import { useState } from 'react';

const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.561-.955L10 0l2.952 5.955 6.561.955-4.757 4.635 1.122 6.545z" />
    </svg>
);

const Stars = () => (
    <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
    </div>
);

const REVIEWS = [
    {
        author: 'Bayan',
        meta: '7 reviews',
        text: 'I had a great experience with Bnoon. Extremely professional, explains everything clearly, and makes sure you understand your treatment. You can tell he genuinely cares about his patients.',
    },
    {
        author: 'sara adib',
        meta: 'Local Guide · 57 reviews · 7 photos',
        text: "I strongly recommend Dr. Asim Alwohaibi. His professionalism is outstanding, and I'm very impressed by his high level of expertise. I was pleased to learn that he comes directly from France, his experience really shows!",
    },
    {
        author: 'mohammed Shafi',
        meta: '7 reviews · 1 photo',
        text: `We had been following Dr. Fawaz Edris on social media for a long time but were hesitant to visit. One day, after many years of waiting, we finally decided to visit Banoon Clinic, and it turned out to be one of the best decisions of our lives.

From the very first visit, Dr. Fawaz treated us like a family, with genuine care, kindness, and respect. He explained the entire treatment process clearly and patiently, which gave us confidence and peace of mind. We followed his instructions step by step, and Alhamdulillah, with the will of Allah and under his guidance, we achieved success.

The clinic truly lives by its motto:
“You have a dream, and we have a plan.”

We are deeply thankful to 💙💙💙Dr. Fawaz and the entire Banoon Clinic team for their professionalism, compassion, and support. A true place of hope for couples on this journey.
`,
    },
    {
        author: 'KENG OF JMAA', 
        meta: '8 reviews',
        text: `thanks.dr.maya.for.your.great.help.in.our.case.now.finally.i.have.2.kids`,
    },
];

function ReviewCard({ text }: { text: string }) {
    const [expanded, setExpanded] = useState(false);
    const firstBreak = text.indexOf('\n');
    const hasMore = firstBreak !== -1;
    const first = hasMore ? text.slice(0, firstBreak) : text;
    const rest = hasMore ? text.slice(firstBreak + 2) : '';

    return (
        <p className="mt-4 text-sm text-gray-600 whitespace-pre-line">
            {first}
            {hasMore && !expanded && (
                <>
                    {'… '}
                    <button
                        type="button"
                        onClick={() => setExpanded(true)}
                        className="font-semibold text-[#38bdf8] hover:underline"
                    >
                        Read more
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
                        Show less
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
                <h2 className="mb-1 text-2xl font-thin leading-snug text-center text-black lg:text-4xl sm:text-5xl">
                    Google Reviews
                </h2>
                <p className="mx-auto mb-14 max-w-xl text-xl font-bold text-center lg:text-2xl">
                    Trusted by Families Worldwide
                </p>
            </div>

            <div className="px-3 md:px-8 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {REVIEWS.map((review) => (
                        <div key={review.author} className="flex flex-col flex-1">
                            <div className="flex items-start space-x-4">
                                <div>
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="mr-2 w-4 h-4 fill-current">
                            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                        </svg>
                        Read more reviews
                    </a>
                </div>
            </div>
        </section>
    );
}
