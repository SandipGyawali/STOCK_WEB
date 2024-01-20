import News from "../../assets/images/news.png";
import Stock from "../../assets/images/stock.png";
import Crypto from "../../assets/images/crypto.png";
import { useState } from "react";

// options category
const categories = {
  stocks: "STOCKS",
  news: "NEWS",
  crypto: "CRYPTO",
};

function SearchOverLay({ setIsHovered }) {
  // by default the category is set to empty string
  const [searchField, setSearchField] = useState("");
  const [category, setCategory] = useState("");

  // this is used to submit the search button
  function handleSearch(e) {
    e.preventDefault();
    console.log(category);
    console.log(searchField);
  }

  return (
    <div
      className="search-overlay"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overlay-search-bar">
        <input
          type="text"
          className="overlay-input"
          placeholder="Search"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={handleSearch}
          disabled={category == ""}
        >
          Search
        </button>
      </div>
      {/* category style */}
      <div className="overlay-cat-style">
        <div className="line"></div>
        <p>Options</p>
        <div className="line"></div>
      </div>

      <div className="overlay-category-wrapper">
        <div
          className={`category-box ${
            category == categories.stocks ? "current" : ""
          }`}
          onClick={() => setCategory(categories.stocks)}
        >
          <img src={Stock} alt="" className="category-img" />
          <p>Stocks</p>
        </div>

        <div
          className={`category-box ${
            category == categories.news ? "current" : ""
          }`}
          onClick={() => setCategory(categories.news)}
        >
          <img src={News} alt="" className="category-img" />
          <p>News</p>
        </div>

        <div
          className={`category-box ${
            category == categories.crypto ? "current" : ""
          }`}
          onClick={() => setCategory(categories.crypto)}
        >
          <img src={Crypto} alt="" className="category-img" />
          <p>Crypto</p>
        </div>

        <div
          className={`category-box ${
            category == categories.stocks ? "current" : ""
          }`}
          onClick={() => setCategory(categories.stocks)}
        >
          <img src={Stock} alt="" className="category-img" />
          <p>Stocks</p>
        </div>
      </div>
    </div>
  );
}

export default SearchOverLay;
