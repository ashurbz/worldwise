import React from "react";
import "./page.css";

const HomePage = () => {
  return (
    <div className="home_container">
      <div>
        <h1>
          You Travel The World. <br />
          WorldWise Keep Track Of Your Adventures
        </h1>
        <p className="para">
          Embark on unforgettable adventures, effortlessly keep tabs on your
          travels, and cherish every moment along the way with our intuitive
          travel app designed to accompany you on your globetrotting escapades!
        </p>
      </div>
      <div className="button" style={{ display: "flex", alignSelf: "center" }}>
        <button>Start Tracking Now</button>
      </div>
    </div>
  );
};

export default HomePage;
