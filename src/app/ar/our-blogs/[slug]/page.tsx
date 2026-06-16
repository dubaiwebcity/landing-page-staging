import Navbar from '@/components/ar/Layout/Navbar';
import { notFound } from 'next/navigation';

async function getBlog(slug: string) {
  try {
    const res = await fetch(
      `https://bnoon-content-platform.vercel.app/api/posts?where[slug][equals]=${slug}&locale=ar&depth=2`,
      { next: { revalidate: 60 } }
    );
    const data = await res.json();
    return data?.docs?.[0] || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <section className="container py-5" dir="rtl">
        <div className="row justify-content-center">
          <div className="col-lg-10">

            {blog.imageUrl && (
              <div className="mb-4">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  style={{
                    width: '100%',
                    maxHeight: '500px',
                    objectFit: 'cover',
                    borderRadius: '20px',
                  }}
                />
              </div>
            )}

            {/* CATEGORY */}
            {blog.categories?.length > 0 && (
              <div className="mb-3">
                <span
                  style={{
                    background: '#004E78',
                    color: '#fff',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '14px',
                  }}
                >
                  {blog.categories[0]?.title || blog.categories[0]?.name}
                </span>
              </div>
            )}

            {/* TITLE */}
            <h1
              style={{
                fontSize: '48px',
                fontWeight: 700,
                color: '#004E78',
                marginBottom: '10px',
              }}
            >
              {blog.title}
            </h1>

            {/* DATE */}
            <p style={{ color: '#777', marginBottom: '10px' }}>
              {new Date(blog.publishedAt).toLocaleDateString('ar-EG')}
            </p>

            {/* CONTENT */}
            <div className="blog-content">
              <div
  dangerouslySetInnerHTML={{
   __html: blog?.content || ""
  }}
/>
            </div>

            {/* TAGS */}
            {blog.tags?.length > 0 && (
              <div className="mt-4">
                <h5 style={{ color: '#004E78', marginBottom: '12px' }}>
                  الوسوم
                </h5>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {blog.tags.map((tag: any) => (
                    <span
                      key={tag.id}
                      style={{
                        border: '1px solid #ddd',
                        padding: '8px 14px',
                        borderRadius: '20px',
                      }}
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .blog-content {
            font-size: 18px;
            line-height: 1.9;
            color: #333;
            direction: rtl;
          }

          .blog-content p,
          .blog-content h1,
          .blog-content h2,
          .blog-content h3,
          .blog-content h4,
          .blog-content li {
            text-align: right !important;
            direction: rtl !important;
          }

          .blog-content p {
            margin-bottom: 10px;
          }

          .blog-content strong {
            display: block;
            font-size: 18px;
            font-weight: 700;
            color: #004E78;
            margin: 10px 0;
          }

          .blog-content .fertility-list {
            list-style: none;
            padding-right: 0;
            padding-left: 0;
            margin-top: 20px;
          }

          .blog-content .fertility-list li {
            position: relative;
            padding-right: 25px;
            padding-left: 0;
            margin-bottom: 10px;
            line-height: 1.5;
          }

          .blog-content .fertility-list li::before {
            content: "";
            position: absolute;
            right: 0;
            left: auto;
            top: 4px;
            width: 18px;
            height: 18px;
            background-image: url('https://bnoon-website.b-cdn.net/images/icons/bnoon-symbol.avif');
            background-size: contain;
            background-repeat: no-repeat;
          }

          .blog-content .fertility-list li strong {
            display: inline;
            color: #555;
            font-size: inherit;
            margin: 0;
          }
        `}} />

      </section>
    </>
  );
}
