import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';

export default function Search({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };
  return (
    <div className="flex items-center justify-center relative">
      <form action="/search" className="w-full px-5 flex">
        <button type="submit" className="flex items-center">
          <SearchIcon className="text-black ml-3 absolute fill-current text-3xl" />
        </button>
        <input
          className="w-full border h-10 pl-12 shadow rounded-full focus:outline-transparent focus:border-transparent"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
/>
      </form>
    </div>
  );
}