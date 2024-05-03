import React from "react";
import Logo from "./Logo";
import "./componentCSS.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_container">
      <div>
        <NavLink to="./">
          <Logo />
        </NavLink>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <button>
              <NavLink to="sign-in">Login</NavLink>{" "}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
