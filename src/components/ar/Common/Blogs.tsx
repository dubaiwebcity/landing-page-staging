import BlogsCarousel from './BlogsCarousel';

async function getBlogs() {
  try {
    const res = await fetch(
      'https://bnoon-content-platform.vercel.app/api/posts?locale=ar&sort=createdAt&depth=2&draft=false',
      { next: { revalidate: 60 } }
    );
    const data = await res.json();
    return data?.docs || [];
  } catch (error) {
    console.log('Error fetching blogs:', error);
    return [];
  }
}

const Blogs = async () => {
  const blogs = await getBlogs();
  return <BlogsCarousel blogs={blogs} />;
};

export default Blogs;