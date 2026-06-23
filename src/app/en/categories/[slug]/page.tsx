import Navbar from '@/components/Layout/Navbar';
import { notFound } from 'next/navigation';

async function getBlogsByCategory(slug: string) {
  try {
    const res = await fetch(
      `https://bnoon-content-platform.vercel.app/api/posts?where[categories.slug][equals]=${slug}&locale=en&depth=2`,
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
    noindex: true,
    nofollow: true,
  },
};
export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const blogs = await getBlogsByCategory(params.slug);

  if (!blogs.length) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <section className="container py-5">
        <h1 style={{ color: '#004E78', marginBottom: '25px' }}>
          Category
        </h1>

        <div className="row">
          {blogs.map((blog: any) => (
            <div className="col-md-4 mb-4" key={blog.id}>
              <a
                href={`/en/article/${blog.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    border: '1px solid #E5E7EB',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: '#fff',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                    height: '100%',
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
                    <h5 style={{ color: '#004E78' }}>
                      {blog.title}
                    </h5>

                    <p style={{ color: '#777', fontSize: '14px' }}>
                      {new Date(blog.publishedAt).toLocaleDateString()}
                    </p>
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
