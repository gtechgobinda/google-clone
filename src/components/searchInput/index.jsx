import React from "react";
import { SearchInputStyle } from "./style.js";

const SearchInput = () => {
  return (
    <>
      <SearchInputStyle>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
      </SearchInputStyle>
    </>
  );
};

export default SearchInput;
