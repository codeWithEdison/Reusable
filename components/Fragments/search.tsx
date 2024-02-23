import React from 'react';

const SearchEngine = (
    props:{ 
        searchTerm: string,
         onSearch:any }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={props.searchTerm}
        onChange={(e) => props.onSearch(e.target.value)}
        placeholder="Search..."
        className="border p-2 rounded"
      />
      <button
        onClick={() => props.onSearch('')}
        className="bg-gray-300 p-2 rounded"
      >
        Clear
      </button>
    </div>
  );
};

export default SearchEngine;
