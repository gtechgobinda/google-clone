import React from "react";
import HomeHeader from "../homeHeader/index.jsx";
import { MainContainerStyle } from "./style.js";
import Logo from "../../assets/google-logo.png";
import SearchInput from "../searchInput/index.jsx";
const Home = () => {
  return (
    <>
      <MainContainerStyle>
        <div className="home-container">
          <HomeHeader />
          <main className="search-main-sec">
            <div className="search-container">
              <img src={Logo} alt="google-icon" />
              <SearchInput />
              <div className="search-btn-sec">
                <button className="search-btn">Google Search</button>
              </div>
            </div>
          </main>
        </div>
      </MainContainerStyle>
    </>
  );
};

export default Home;
