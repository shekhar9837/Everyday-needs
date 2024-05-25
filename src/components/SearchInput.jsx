// src/components/SearchInput.js
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SearchInput = ({iconColor="text-black" , inputWidth='w-12 focus:w-16 hover:w-16  transition-all ease-in-out duration-500 focus:border-b-[1px] hover:border-b-[1px] border-zinc-400', onSearch}) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search-results?q=${query}`);
      setQuery("");
      if (onSearch) {
        onSearch();
      }
    }
  };


  return (
    <div className="flex items-center pt-[0.2rem]">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search"
        className={`text-[0.8rem] bg-transparent outline-none  ${inputWidth}  `}
        onKeyDown={(e)=> e.key ==="Enter" && handleSearch()}
       
      />
      <IoIosSearch onClick={handleSearch} className={`${iconColor} h-[14px] w-[14px] cursor-pointer`} />
    </div>
  );
};

export default SearchInput;
