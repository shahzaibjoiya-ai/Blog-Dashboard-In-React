import { useSelector } from "react-redux";

function BlogStats() {
  const blogs = useSelector(
    (state) => state.blogs.blogs
  );

  const totalBlogs = blogs.length;

  const featuredBlogs = blogs.filter(
    (blog) => blog.featured
  ).length;

  const totalReadingTime = blogs.reduce(
    (total, blog) => total + blog.readingTime,
    0
  );

  return (
    <div className="stats">

      <div className="stat-card">
        <h3>{totalBlogs}</h3>
        <p>Total Blogs</p>
      </div>

      <div className="stat-card">
        <h3>{featuredBlogs}</h3>
        <p>Featured Blogs</p>
      </div>

      <div className="stat-card">
        <h3>{totalReadingTime}</h3>
        <p>Total Reading Minutes</p>
      </div>

    </div>
  );
}

export default BlogStats;