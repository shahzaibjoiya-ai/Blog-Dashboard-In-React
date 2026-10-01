import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BlogStats from "./components/BlogStats";
import BlogList from "./components/BlogList";

import { fetchBlogs } from "./redux/blogSlice";

function App() {
  const dispatch = useDispatch();

  const loading = useSelector(
    (state) => state.blogs.loading
  );

  const error = useSelector(
    (state) => state.blogs.error
  );

  const handleLoadBlogs = () => {
    dispatch(fetchBlogs());
  };

  return (
    <div className="app">

      <Header />

      <main className="container">

        <BlogStats />

        <SearchBar />

        <div className="async-section">

          <button
            className="load-btn"
            onClick={handleLoadBlogs}
          >
            Load Blogs from API
          </button>

          {loading && (
            <p className="loading">
              Loading blogs...
            </p>
          )}

          {error && (
            <p className="error">
              {error}
            </p>
          )}

        </div>

        {!loading && <BlogList />}

      </main>

    </div>
  );
}

export default App;