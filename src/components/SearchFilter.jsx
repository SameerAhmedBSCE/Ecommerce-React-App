import React, { useState } from 'react';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterPrice, setFilterPrice] = useState('');

  const handleSearch = () => {
    
    console.log(
      `Search for: ${searchTerm}, Category: ${filterCategory}, Price: ${filterPrice}`
    );
  };

  return (
    <div>
      <h1>Search and Filter</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="">Search by Categories</option>
        <option value="category1">MEN</option>
        <option value="category2">WOMEN</option>
      </select>
      <input
        type="number"
        placeholder="Max Price"
        value={filterPrice}
        onChange={(e) => setFilterPrice(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchFilter;
