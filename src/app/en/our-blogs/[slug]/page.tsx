import Image from 'next/image';
import Navbar from '@/components/Layout/Navbar';
import { notFound } from 'next/navigation';
import { RichText } from '@payloadcms/richtext-lexical/react'
async function getBlog(slug: string) {
  try {
    const res = await fetch(
      `https://bnoon-content-platform.vercel.app/api/posts?where[slug][equals]=${slug}&locale=en&depth=2`,
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
  console.log('CONTENT:', blog?.content);

  if (!blog) {
    notFound();
  }

return (
  <>
    <Navbar />

    <section className="container py-5">
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
             {typeof blog.categories?.[0] === 'object'
  ? blog.categories?.[0]?.title
  : ''}
            </span>
          </div>

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

          <p
            style={{
              color: '#777',
              marginBottom: '10px',
            }}
          >
            {new Date(blog.publishedAt).toLocaleDateString()}
          </p>

          <div
            style={{
              fontSize: '18px',
              lineHeight: '1.9',
              color: '#333',
            }}
          >
  <div className="blog-content">
  <RichText data={blog.content} />
</div>

          </div>

          {blog.tags?.length > 0 && (
            <div className="">
              <h5>Tags</h5>

              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  flexWrap: 'wrap',
                }}
              >
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
<style
  dangerouslySetInnerHTML={{
    __html: `
.blog-content {
  font-size: 18px;
  line-height: 1.9;
  color: #333;
}

.blog-content p {
  margin-bottom: 10px;
}

.blog-content strong {
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: #004E78;
  margin: 10px 0 10px;
}

.blog-content .fertility-list {
  list-style: none;
  padding-left: 0;
  margin-top: 20px;
}

.blog-content .fertility-list li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
  line-height: 1.5;
}

.blog-content .fertility-list li::before {
  content: "";
  position: absolute;
  left: 0;
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
`,
  }}
/>
      </div>
      
    </section>
    
  </>
);
}
