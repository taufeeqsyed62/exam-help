// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ placeholder }) => {
  return (
    <div className="container mt-3">
      <input type="text" className="form-control" placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
