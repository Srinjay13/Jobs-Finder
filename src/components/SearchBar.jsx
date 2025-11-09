const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by company or role"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};


export default SearchBar
