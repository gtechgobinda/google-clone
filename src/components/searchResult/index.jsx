import React, { useState } from "react";
import { SearchResultStyle } from "./style.js";
import SearchResultHeader from "../searchResultHeader/index.jsx";
import { menu } from "../../utils/constants.jsx";
const SearchResult = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const clickHandler = (menuItem) => {
    setSelectedMenu(menuItem.name);
    console.log(selectedMenu, "hello");
  };
  return (
    <>
      <SearchResultStyle>
        <SearchResultHeader />
        <div className="menu-container">
          {menu.map((item, index) => (
            <>
              <span
                key={index}
                className={`menu ${
                  selectedMenu === item.name ? "selected-menu" : ""
                }`}
                onClick={() => clickHandler(item)}
              >
                <span>{item?.icon}</span>
                <span className="">{item.name}</span>
              </span>
            </>
          ))}
        </div>
      </SearchResultStyle>
    </>
  );
};

export default SearchResult;
