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
    author: 'Ilham',
    meta: '7 reviews',
    text: 'I had a great experience with Dr. Asim Alwohaibi. Extremely professional, explains everything clearly, and makes sure you understand your treatment. You can tell he genuinely cares about his patients.',
  },
  {
    author: 'sara adib',
    meta: 'Local Guide · 57 reviews · 7 photos',
    text: "I strongly recommend Dr. Asim Alwohaibi. His professionalism is outstanding, and I'm very impressed by his high level of expertise. I was pleased to learn that he comes directly from France, his experience really shows!",
  },
  {
    author: 'MRS Zulfqar',
    meta: '5 reviews · 1 photo',
    text: '6Months ago Im going to bnoon Centre riyadh and do i v f allhumdulliah it\'s was a good experience lovely and caring staff specially thanks to Dr daila nour💐💐\nNow I\'m very happy 😍😍😍😍👍👍👍👍',
  },
  {
    author: 'I binrayes',
    meta: 'Local Guide · 55 reviews',
    text: 'In this clinics Dr/Abdulaziz alshehri,one of the professional Doctors in Middle East in Inḟertility treatment and IVḞ Endoscopic Surgery.\nI truly recommend Dr.abdulaziz if your partner have pregnancy and childbirth problems',
  },
];

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

      <div className="px-8 mx-auto max-w-7xl">
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
              <p className="mt-4 text-sm text-gray-600 whitespace-pre-line">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="https://www.google.com/search?q=Bnoon+fertility+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white rounded-full transition-colors duration-200 bg-[#38bdf8] hover:bg-[#0ea5e9]"
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
