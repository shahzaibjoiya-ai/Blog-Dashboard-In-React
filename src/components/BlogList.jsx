import { useCallback } from "react";
import { useDispatch } from "react-redux";

import BlogCard from "./BlogCard";
import useFilteredBlogs from "../hooks/useFilteredBlogs";

import {
  deleteBlog,
  toggleFeatured,
} from "../redux/blogSlice";

function BlogList() {
  const dispatch = useDispatch();

  const blogs = useFilteredBlogs();

  // useCallback for delete
  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteBlog(id));
    },
    [dispatch]
  );

  // useCallback for featured
  const handleToggleFeatured = useCallback(
    (id) => {
      dispatch(toggleFeatured(id));
    },
    [dispatch]
  );

  if (blogs.length === 0) {
    return (
      <div className="no-results">
        <h3>No blogs found</h3>
        <p>Try another search or category.</p>
      </div>
    );
  }

  return (
    <div className="blog-grid">

      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onDelete={handleDelete}
          onToggleFeatured={handleToggleFeatured}
        />
      ))}

    </div>
  );
}

export default BlogList;