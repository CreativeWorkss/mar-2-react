// RecommendedProducts.jsx

import React from "react";
import "./RecommendedProducts.css";
import { mobiles } from "../../may-6/mobile";

function RecommendedProducts() {
  return (
    <div className="recommended-container">
      {/* HEADING */}
      <h2 className="recommended-heading">Recommended Products</h2>

      {/* HORIZONTAL PRODUCT SLIDER */}
      <div className="recommended-scroll">
        {mobiles.map((value) => {
          return (
            <div className="recommended-card" key={value.id}>
              {/* IMAGE */}
              <div className="recommended-image-box">
                <img
                  src={value.url}
                  alt="mobile"
                  className="recommended-image"
                />
              </div>

              {/* CONTENT */}
              <div className="recommended-content">
                <h3>{value.name}</h3>

                <p>₹{value.id}9,999</p>

                <button>View Details</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecommendedProducts;
