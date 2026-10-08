function SearchBar({ search, onSearch }) {
  return (
    <div className="search-bar">
      <label htmlFor="user-search">Search users</label>

      <input
        id="user-search"
        type="search"
        placeholder="Search by name or email..."
        value={search}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
