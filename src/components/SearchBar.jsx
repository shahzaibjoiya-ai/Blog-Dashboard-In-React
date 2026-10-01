import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchText,
  setCategory,
} from "../redux/blogSlice";

function SearchBar() {
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const searchText = useSelector(
    (state) => state.blogs.searchText
  );

  const selectedCategory = useSelector(
    (state) => state.blogs.selectedCategory
  );

  // Focus search input when page loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = (e) => {
    dispatch(setSearchText(e.target.value));
  };

  const handleCategory = (e) => {
    dispatch(setCategory(e.target.value));
  };

  return (
    <div className="search-container">

      <input
        ref={inputRef}
        type="text"
        placeholder="Search blogs..."
        value={searchText}
        onChange={handleSearch}
      />

      <select
        value={selectedCategory}
        onChange={handleCategory}
      >
        <option value="All">All Categories</option>
        <option value="React">React</option>
        <option value="Redux">Redux</option>
        <option value="Node">Node</option>
      </select>

    </div>
  );
}

export default SearchBar;