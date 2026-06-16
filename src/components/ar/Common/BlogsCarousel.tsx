
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const BlogsCarousel = ({ blogs }: any) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="blog-area ptb-140 mt-4 mb-5">
      <div className="container">

        {/* TITLE */}
        <div className="section-title">
          <div className="row g-4">
            <div className="col-lg-7 col-md-12">
              <div className="left">
                <h2>مراكزنا</h2>
              </div>
            </div>
          </div>
        </div>

        {/* BLOG GRID */}
        <Swiper
          dir="rtl"
          modules={[Navigation, Autoplay]}
          navigation
          loop={blogs.length > 3}
          loopAdditionalSlides={3}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={25}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
        >
          {blogs.slice(0, 10).map((blog: any) => {
            console.log('TAGS:', blog.tags);
            console.log('BLOG:', blog);
            return (
              <SwiperSlide key={blog.id}>

                <div className="blog-card"  >

                  {/* IMAGE + MAP */}
                  <div className="image">
                    {/* CATEGORY BADGE ADD HERE */}
                    {blog.categories?.length > 0 && (
                      <span className="blog-category">
                      {blog.categories[0]?.title || blog.categories[0]?.name || ''}
                      </span>
                    )}
                    {/* IMAGE */}
                    <img
                      src={blog.imageUrl || blog.image?.url || '/placeholder.jpg'}
                      alt={blog.title}
                      className={hoveredId === blog.id ? 'fade-out' : 'fade-in'}
                    />

                    {/* MAP */}

                  </div>

                  {/* CONTENT */}
                  <div className="content">
                    {blog.publishedAt && (
                      <p className="blog-date">
                         {new Date(blog.publishedAt).toLocaleDateString('ar-EG')}
                      </p>
                    )}
                    {/* TITLE */}
                    <h3 className="title">
                      <Link
                        href={`/ar/our-blogs/${blog.slug}`}
                        style={{
                          color: '#004E78',
                          textDecoration: 'none',
                        }}
                      >
                        {blog.title}
                      </Link>
                    </h3>

                    {/* BLOG CONTENT */}
                    <p className="blog-content">
                      {blog.content?.root?.children
                        ?.map((node: any) =>
                          node.children
                            ?.map((child: any) => child.text || '')
                            .join(' ')
                        )
                        .join(' ')}
                    </p>
                     {/* tag */}
                    {blog.tags?.length > 0 && (
                      <div className="blog-tags">
                        {blog.tags.map((tag: any, index: number) => (
                          <span key={index} className="tag">
                            {typeof tag === 'string'
                              ? tag
                              : tag.title || tag.name}
                          </span>
                        ))}
                      </div>
                    )}
                    {/* AUTHOR */}


                    {/* BUTTON */}
                    <Link
                      href={`/ar/our-blogs/${blog.slug}`}
                      className="btn btn-success btn-blog post-btn"
                    >
                    اقرأ المزيد
                    </Link>

                  </div>

                </div>

              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>

      {/* CSS */}
      <style jsx global>{`
     .blog-content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;

  line-height: 1.5;
  min-height: calc(1.5em * 5);
  max-height: calc(1.5em * 5);

  margin-bottom: 10px;
}
      .blog-category {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #004E78;
  color: #fff;
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 4px;
  z-index: 5;
}

.blog-date {
  font-size: 13px;
  color: #777;
  margin-bottom: 5px;
}

.blog-tags {
  margin: 8px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  font-size: 12px;
  background: #f1f1f1;
  padding: 3px 8px;
  border-radius: 20px;
}
      .swiper-horizontal .swiper-button-prev, .swiper-horizontal .swiper-button-next, .swiper-horizontal~.swiper-button-prev, .swiper-horizontal~.swiper-button-next {
    top: var(--swiper-navigation-top-offset, 46%);
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
    margin-left: 0;
}
    :is(.swiper-button-prev,.swiper-button-next) ::slotted(svg), :is(.swiper-button-prev,.swiper-button-next) svg {
    object-fit: contain;
    transform-origin: 50%;
    fill: currentColor;
    pointer-events: none;
    width: 50%;
    height: 50%;
}
        .swiper {
          width: 100%;
          padding: 10px 5px 60px;
          overflow: hidden;
        }

        .swiper-wrapper {
          display: flex;
          align-items: stretch !important;
        }

        .swiper-slide {
          height: auto !important;
          display: flex !important;
           width: 409.333px !important;
        }
.blog-area .swiper-slide {
  width: calc((100% - 50px) / 3) !important;
}
        .blog-card {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          background: #fff;
        }

        .blog-card .image {
          position: relative;
          height: 220px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .blog-card .image img,
        .blog-card .image iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.5s ease-in-out;
        }

        .blog-card .content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .blog-card .content p {
          font-size: 16px !important;
          line-height: 1.5;
        }

        .fade-in {
          opacity: 1;
          z-index: 2;
        }

        .fade-out {
          opacity: 0;
          z-index: 1;
        }

        .title {
          font-size: 22px;
          color: #004E78;
          margin-top: 10px;
          display: flex;
          align-items: flex-start;
          gap: 6px;
        }

        .small-note {
          font-size: 15px;
          color: #004e78;
          display: block;
        }

        .icon {
          color: #004E78;
          margin-top: 4px;
        }

        .btn-blog {
          margin-top: auto;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #004E78 !important;
        }

        @media (max-width: 768px) {
          .small-note {
            font-size: 13px;
            margin-top: 6px;
          }
        }
          @media (max-width: 767px) {
  .blog-area .swiper-slide {
    width: 100% !important;
  }
    .post-btn{
    margin-top: 0px;
    }
    .tag {
    background: #f1f1f1;
    border-radius: 20px;
    padding: 3px 8px;
    font-size: 9px;
}
}
      `}</style>
    </div>
  );
};

export default BlogsCarousel;