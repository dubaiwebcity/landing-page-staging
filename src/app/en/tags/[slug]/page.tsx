import Navbar from '@/components/Layout/Navbar';
import { notFound } from 'next/navigation';

async function getBlogs() {
  const res = await fetch(
    `https://bnoon-content-platform.vercel.app/api/posts?locale=en&depth=2`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();
  return data?.docs || [];
}

export default async function TagPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const blogs = await getBlogs();

  const filteredBlogs = blogs.filter((blog: any) =>
    blog?.tags?.some((tag: any) => {
      const tagSlug =
        tag?.slug ||
        tag?.name?.toLowerCase().replace(/\s+/g, '-');

      return tagSlug === slug;
    })
  );

  if (!filteredBlogs.length) {
    return (
      <>
        <Navbar />
        <section className="container py-5">
          <h2>No blogs found for this tag</h2>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="container py-5">
        <h1 style={{
          fontSize: '48px',
          fontWeight: 700,
          color: '#004E78',
          marginBottom: '10px',
        }}>
          Tags
        </h1>

        <div className="row">
          {filteredBlogs.map((blog: any) => (
            <div className="col-md-4 mb-4" key={blog.id}>
              <a
                href={`/en/our-blogs/${blog.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    border: '1px solid #E5E7EB',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: '#fff',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                  }}
                >
                  {blog.imageUrl && (
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                      }}
                    />
                  )}

                  <div style={{ padding: '15px' }}>
                    <h5 style={{ color: '#004E78' }}>{blog.title}</h5>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
