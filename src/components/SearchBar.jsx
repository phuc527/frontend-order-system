export default function SearchBar({ keyword, setKeyword, onSearch }) {
  return (
    <div>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search products..."
      />

      <button onClick={onSearch}>Search</button>
    </div>
  );
}
