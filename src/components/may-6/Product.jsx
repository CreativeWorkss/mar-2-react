// Product.jsx

import React from "react";
import { useParams } from "react-router-dom";
import { mobiles } from "./mobile";

import "./Product.css";
import Header from "./header/Header";
import Reviews from "./reviews/Reviews";

function Product() {
  const { prodId } = useParams();

  const filteredData = mobiles.filter((value) => value.id == prodId);

  let final = filteredData.map((value) => {
    return (
      <div className="product-container">
        {/* IMAGE SECTION */}
        <div className="image-section">
          <img src={value.url} alt="mobile" />
        </div>

        {/* CONTENT SECTION */}
        <div className="content-section">
          <h1>{value.name}</h1>

          <h3>Features</h3>

          <ul>
            {value.features.map((feature, index) => {
              return <li key={index}>{feature}</li>;
            })}
          </ul>

          <div className="button-group">
            <button>Buy Now</button>

            <button>Add to Wishlist</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Header />
      <div>{final}</div>
      <Reviews />
    </div>
  );
}

export default Product;
