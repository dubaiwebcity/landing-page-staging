import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Layout/Navbar';
import { notFound } from 'next/navigation';
async function getBlog(slug: string) {
  try {
    const res = await fetch(
      `${process.env.PAYLOAD_URL}/api/posts?where[slug][equals]=${slug}&locale=en&depth=2`,
      { next: { revalidate: 60 } }
    );

    const data = await res.json();

    return data?.docs?.[0] || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
async function getLatestBlogs() {
  try {
    const res = await fetch(
      `${process.env.PAYLOAD_URL}/api/posts?limit=6&locale=en`,
      { next: { revalidate: 60 } }
    );

    const data = await res.json();
    return data?.docs || [];
  } catch {
    return [];
  }
}
export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};
export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await getBlog(slug);
  const latestBlogs = await getLatestBlogs();
  console.log('CONTENT:', blog?.content);
  console.log('FULL CONTENT:', JSON.stringify(blog?.content?.root?.children, null, 2));
  if (!blog) {
    notFound();
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://cdn.jsdelivr.net/npm/@tailwindcss/typography@0.5.10/dist/typography.min.css');` }} />

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
              <Link
                href={`/en/categories/${blog.categories?.[0]?.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <span
                  style={{
                    background: '#004E78',
                    color: '#fff',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    cursor: 'pointer',
                  }}
                >
                  {typeof blog.categories?.[0] === 'object'
                    ? blog.categories?.[0]?.title
                    : ''}
                </span>
              </Link>
            </div>

            <h1
              style={{
                fontSize: '48px',
                fontWeight: 700,
                color: '#004E78',
                marginBottom: '0px',
              }}
            >
              {blog.title}
            </h1>
            <div className="d-flex gap-3 mt-1">

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://www.bnoon.sa/en/article/${blog.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-icon"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.bnoon.sa/en/article/${blog.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-icon"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://www.bnoon.sa/en/article/${blog.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-icon"
              >
                <i className="bi bi-twitter-x"></i>
              </a>

            </div>
            <p
              style={{
                color: '#777',
                marginTop: '10px',
              }}
            >
              {new Date(blog.publishedAt).toLocaleDateString()}
            </p>

            <div
              className="prose prose-lg max-w-none prose-headings:text-[#004E78] prose-headings:font-bold prose-a:text-[#004E78] prose-strong:text-[#004E78] prose-headings:mt-4 prose-headings:mb-2 prose-p:my-2"
            >
              <article>
                {blog?.content?.root?.children?.map((node: any, index: number) => {
                  // Heading nodes
                  if (node.type === 'heading') {
                    const Tag = node.tag as keyof JSX.IntrinsicElements;
                    return (
                      <Tag key={index}>
                        {node.children?.map((child: any) => child?.text || '').join('')}
                      </Tag>
                    );
                  }

                  // List nodes
                  if (node.type === 'list') {
                    const ListTag = node.listType === 'bullet' ? 'ul' : 'ol';
                    return (
                      <ListTag key={index}>
                        {node.children?.map((listItem: any, liIndex: number) => (
                          <li key={liIndex}>
                            {listItem.children?.map((child: any) => child?.text || '').join('')}
                          </li>
                        ))}
                      </ListTag>
                    );
                  }

                  // Paragraph nodes (default)
                  return (
                    <p key={index}>
                      {node.children?.map((child: any, childIndex: number) => {
                        if (child.bold) return <strong key={childIndex}>{child.text}</strong>;
                        if (child.italic) return <em key={childIndex}>{child.text}</em>;
                        if (child.underline) return <u key={childIndex}>{child.text}</u>;
                        return child?.text || '';
                      })}
                    </p>
                  );
                })}
              </article>
            </div>

            {blog.tags?.length > 0 && (
              <div className="mt-5">
                <h2 style={{ color: '#004E78' }}>Tags</h2>

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
                      <a href={`/en/tags/${tag?.slug || tag?.name?.toLowerCase().replace(/\s+/g, '-')}`}>
                        {tag.name}
                      </a>
                    </span>
                  ))}
                </div>

              </div>
            )}
            <div className="mt-5">
              <h2 style={{ color: '#004E78' }}>
                More Blogs
              </h2>

              <div className="row">
                {latestBlogs
                  .filter((item: any) => item.slug !== blog.slug)
                  .slice(0, 3)
                  .map((item: any) => (
                    <div className="col-md-4 mb-4" key={item.id}>
                      <div
                        style={{
                          border: '1px solid #E5E7EB',
                          borderRadius: '20px',
                          overflow: 'hidden',
                          background: '#fff',
                          height: '100%',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                          transition: 'all 0.3s ease',
                          padding: '10px',
                        }}
                      >
                        <a
                          href={`/en/article/${item.slug}`}
                          style={{ textDecoration: 'none' }}
                        >
                          {item.imageUrl && (
                            <img
                              src={item.imageUrl}
                              alt={item.title}
                              style={{
                                width: '100%',
                                height: '220px',
                                objectFit: 'cover',
                                borderRadius: '12px',
                              }}
                            />
                          )}

                          <h3 className="mt-3 more-blogs">{item.title}</h3>
                        </a>
                      </div>
                    </div>
                  ))}
              </div>

            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
              @import url('https://cdn.jsdelivr.net/npm/@tailwindcss/typography@0.5.10/dist/typography.min.css');
    .share-icon {
  width: 40px;
  height: 40px;
  border: 1px solid #e5e7eb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #004E78;
  text-decoration: none;
  font-size: 22px;
  transition: all 0.3s ease;
}

.share-icon:hover {
  background: #004E78;
  color: #fff;
}
    .more-blogs{
    font-size: 18px;
  font-weight: 700;
  color: #004E78;
    }
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
