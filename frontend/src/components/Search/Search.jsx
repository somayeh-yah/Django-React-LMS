import { useState } from "react";
import "./Search.css";
export default function Search({ placeholder = "Search...", onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center align-items-center w-100"
      role="search"
    >
      <input
        className="search ms-2"
        type="text"
        value={query}
        placeholder={placeholder}
        aria-label="Search Courses"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn " type="submit">
        Search <i className="fas fa-search"></i>
      </button>
    </form>
  );
}
