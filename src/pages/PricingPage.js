import React from "react";
import "./page.css";

const PricingPage = () => {
  return (
    <div className="pricing_container">
      <div>
        <h1>
          Simple Pricing <br />
          Just $9 Per Month
        </h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
      <div>
        <img
          className="pricing_img"
          src="./img-2.jpg"
          alt="building_image"
          width="500"
          height="700"
        />
      </div>
    </div>
  );
};

export default PricingPage;
