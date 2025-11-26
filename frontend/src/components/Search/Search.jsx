import { Search as SearchIcon } from "lucide-react";

function Search({ placeholder = "Search..." }) {
  return (
    <div className="relative w-full">
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sub/60" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg border border-accent-1/20 bg-surface px-10 py-2 transition-colors placeholder:text-sub/50 focus:border-accent-1/40 focus:outline-none focus:ring-2 focus:ring-accent-1/20"
      />
    </div>
  );
}

export default Search;
