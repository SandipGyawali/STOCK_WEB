import "./Nav.css";
import { Link } from "react-router-dom";
import SearchBarImg from "../assets/images/searchBar.png";
import { useState } from "react";
import SearchOverLay from "./Search/SearchOverLay";
import NavLink from "./NavLink";

function Header() {
  const [isHovered, setIsHovered] = useState("");
  return (
    <header className="header nav-top">
      <div className="nav-logo-wrapper">
        <p className="nav-logo">
          <Link to="/">CoinPulse</Link>
        </p>
      </div>

      <div className="nav-market-category nav-register">
        <NavLink path="/market/crypto" name="Crypto" />
        <NavLink path="/market/stocks" name="Stocks" />
        <NavLink path="/market/news" name="News" />
      </div>

      <div className="nav-register ">
        <li
          className=" link-search search-icon"
          // when the mouse hover to the search-icon it shows the overlay div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={SearchBarImg} alt="search-bar" className="search" />

          {/* hover overlay content  */}
          {isHovered == true ? (
            <SearchOverLay setIsHovered={setIsHovered} />
          ) : (
            ""
          )}
        </li>
        <li className=" link-login nav-link">
          <Link to="/auth/login">Login</Link>
        </li>
        <li className="link-register nav-link ">
          <Link to="/auth/signup">Register</Link>
        </li>
      </div>
    </header>
  );
}

export default Header;
