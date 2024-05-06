import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const TrackingPageNav = () => {
  return (
    <div>
      <div>
        <Logo />
      </div>
      <div style={{ position: "relative", top: "20px" }}>
        <span
          style={{
            padding: "20px",
            color: "white",
            fontWeight: "bold",
            fontSize: "larger",
          }}
        >
          <Link to="cities">Cities</Link>
        </span>
        <span
          style={{
            padding: "20px",
            color: "white",
            fontWeight: "bold",
            fontSize: "larger",
          }}
        >
          <Link to="countries">Countries</Link>
        </span>
      </div>
    </div>
  );
};

export default TrackingPageNav;
