import React, { useState } from "react";
import { SearchResultStyle } from "./style.js";
import SearchResultHeader from "../searchResultHeader/index.jsx";
import { menu } from "../../utils/constants.jsx";
const SearchResult = () => {
  return (
    <>
      <SearchResultStyle>
        <SearchResultHeader />
      </SearchResultStyle>
    </>
  );
};

export default SearchResult;
