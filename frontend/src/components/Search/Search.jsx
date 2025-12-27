import { icons } from "../../utils/icons";

function Search({ placeholder = "Search..." }) {
  return (
    <div className="relative w-full">
      {icons.search}
      <input type="text" placeholder={placeholder} className="search-input" />
      {icons.filter}
    </div>
  );
}

export default Search;
