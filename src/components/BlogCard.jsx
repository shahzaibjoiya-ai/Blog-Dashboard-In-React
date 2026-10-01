import React from "react";

function BlogCard({
  blog,
  onDelete,
  onToggleFeatured,
}) {
  return (
    <div className="blog-card">

      <div className="blog-header">
        <span className="category">
          {blog.category}
        </span>

        {blog.featured && (
          <span className="featured">
            ⭐ Featured
          </span>
        )}
      </div>

      <h3>{blog.title}</h3>

      <p className="author">
        Author: {blog.author}
      </p>

      <p className="reading-time">
        Reading Time: {blog.readingTime} minutes
      </p>

      <div className="buttons">

        <button
          onClick={() => onToggleFeatured(blog.id)}
        >
          {blog.featured
            ? "Remove Featured"
            : "Make Featured"}
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(blog.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default React.memo(BlogCard);