import React from "react";
import Logo from "./Logo";
import "./componentCSS.css";

const Header = () => {
  return (
    <div className="header_container">
      <div>
        <Logo />
      </div>
      <div>
        <ul>
          <li>Product</li>
          <li>Pricing</li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
