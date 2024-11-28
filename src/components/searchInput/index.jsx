import React, { useState } from "react";
import { SearchInputStyle } from "./style.js";
import { AiOutlineSearch } from "react-icons/ai";
import MicIcon from "/src/assets/mic.svg";
import ImageIcon from "/src/assets/image.svg";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

const SearchInput = () => {
  const { query, startIndex } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();
  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };
  return (
    <>
      <SearchInputStyle>
        <div className="search-input-sec" id="searchBox">
          <AiOutlineSearch size={18} color="#9aa0a6" />
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
            autoFocus
            className="input-field"
          />
          <div className="two-icons">
            {searchQuery && (
              <IoMdClose
                size={24}
                color="#70757a"
                className="close-icon"
                onClick={() => setSearchQuery("")}
              />
            )}
            <img src={MicIcon} alt="hello" className="single-img-icon" />
            <img src={ImageIcon} alt="hello" className="single-img-icon" />
          </div>
        </div>
      </SearchInputStyle>
    </>
  );
};

export default SearchInput;
