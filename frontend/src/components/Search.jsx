function Search({ placeholder = "Search...", icon1, icon2 }) {
  return (
    <div className="relative w-full">
      {icon1}
      <input type="text" placeholder={placeholder} className="search-input" />
      {icon2}
    </div>
  );
}

export default Search;
