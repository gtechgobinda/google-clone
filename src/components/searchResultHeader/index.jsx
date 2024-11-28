import React, { useContext, useEffect, useState } from "react";
import SearchInput from "../searchInput/index.jsx";
import { menu } from "../../utils/constants.jsx";
import { Context } from "../../utils/ContextApi.jsx";
import Logo from "../../assets/google-logo.png";
import { SearchResultHeaderStyle } from "./style.js";
import { Link } from "react-router-dom";

const SearchResultHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const { imageSearch, setImageSearch } = useContext(Context);
  const clickHandler = (menuItem) => {
    let isTypeImage = menuItem.name === "Images";
    setSelectedMenu(menuItem.name);
    console.log(selectedMenu, "hello");
    setImageSearch(isTypeImage ? true : false);
  };

  useEffect(() => {
    return () => setImageSearch(false);
  }, []);
  return (
    <>
      <SearchResultHeaderStyle>
        <div className="input-wrapper">
          <Link to="/">
            <img src={Logo} alt="google-icon" className="google-logo" />
          </Link>
          <SearchInput />
        </div>
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
      </SearchResultHeaderStyle>
    </>
  );
};

export default SearchResultHeader;
