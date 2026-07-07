import BlogsCarousel from './BlogsCarousel';

async function getBlogs() {
  try {
    const API = process.env.PAYLOAD_URL;

    const res = await fetch(
      `${API}/api/posts?locale=en&sort=createdAt&depth=2&draft=false`,
      {
        next: { revalidate: 60 },
      }
    );

    const data = await res.json();
    const blogs = data?.docs || [];

    const [tagsRes, catsRes] = await Promise.all([
      fetch(`${API}/api/tags?limit=100&locale=en`),
      fetch(`${API}/api/categories?limit=100&locale=en`),
    ]);

    const tagsData = await tagsRes.json();
    const catsData = await catsRes.json();

    console.log('PAYLOAD_URL:', API);
    console.log('BLOG COUNT:', blogs.length);
    console.log('TAGS FULL RESPONSE:', JSON.stringify(tagsData, null, 2));
    console.log('CATS FULL RESPONSE:', JSON.stringify(catsData, null, 2));

    const tagsMap: Record<string, string> = {};
    const catsMap: Record<string, string> = {};

    tagsData?.docs?.forEach((t: any) => {
      tagsMap[t.id] = t.tag || t.title || t.name;
    });

    catsData?.docs?.forEach((c: any) => {
      catsMap[c.id] = c.title || c.name;
    });

    const populated = blogs.map((blog: any) => ({
      ...blog,
      categories:
        blog.categories?.map((c: any) =>
          typeof c === 'object' ? c.title || c.name : catsMap[c]
        ) || [],
      tags:
        blog.tags?.filter(Boolean).map((t: any) =>
          typeof t === 'object' ? t.tag || t.name || t.title : tagsMap[t]
        ) || [],
    }));

    console.log('FIRST BLOG:', JSON.stringify(populated[0], null, 2));

    return populated;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

const Blogs = async () => {
  const blogs = await getBlogs();

  return <BlogsCarousel blogs={blogs} />;
};

export default Blogs;