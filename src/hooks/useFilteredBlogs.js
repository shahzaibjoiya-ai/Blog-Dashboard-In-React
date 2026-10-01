import { useMemo } from "react";
import { useSelector } from "react-redux";

function useFilteredBlogs() {
  const blogs = useSelector(
    (state) => state.blogs.blogs
  );

  const searchText = useSelector(
    (state) => state.blogs.searchText
  );

  const selectedCategory = useSelector(
    (state) => state.blogs.selectedCategory
  );

  const filteredBlogs = useMemo(() => {

    return blogs.filter((blog) => {

      const matchesSearch =
        blog.title
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        blog.author
          .toLowerCase()
          .includes(searchText.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        blog.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

  }, [blogs, searchText, selectedCategory]);

  return filteredBlogs;
}

export default useFilteredBlogs;