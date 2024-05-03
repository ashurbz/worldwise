import React from "react";
import "./page.css";
const ProductPage = () => {
  return (
    <div className="product_container">
      <div>
        <img
          className="product_img"
          src="./img-1.jpg"
          alt="traveller_Image"
          height="700"
          width="500"
        />
      </div>
      <div style={{ margin: "20px" }}>
        <h1>About WorldWise</h1>
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
    </div>
  );
};

export default ProductPage;
