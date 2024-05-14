import React from "react";
import { useLocation } from "react-router-dom";
import { data } from '../data.js';

const SearchResults = ({ products }) => {
  const location = useLocation();
  const searchResults = location.state;
  console.log("Search results:", searchResults);

  const filterBySearch = data.filter((item) => 
    typeof item.title === 'string' && item.title.toLowerCase().includes(searchResults.toLowerCase())
  );

  return (
    <div>
      <h2>Search Results</h2>
      <div>
        {filterBySearch.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
