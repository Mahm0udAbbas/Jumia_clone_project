import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <div className="flex items-center justify-center relative">
      <form action="/search" className="w-full px-5 flex">
        <button type="submit" className="flex items-center">
          <SearchIcon className="text-black ml-3 absolute fill-current text-3xl" />
        </button>
        <input
  type="text"
  name="q"
  className="w-full border h-10 pl-12 shadow rounded-full focus:outline-transparent focus:border-transparent"
  placeholder="Search"
/>
      </form>
    </div>
  );
}
