import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search Indian recipes (e.g., biryani)"
      />
    </div>
  );
}

export default SearchBar;