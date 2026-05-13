// Product.jsx

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { mobiles } from "./mobile";

import "./Product.css";
import Header from "./header/Header";
import Reviews from "./reviews/Reviews";
import RecommendedProducts from "../may-14/recommend/RecommendedProducts";

function Product() {
  const { prodId } = useParams();

  const filteredData = mobiles.filter((value) => value.id == prodId);

  let final = filteredData.map((value) => {
    // MULTIPLE IMAGES
    const images = [
      value.url,
      "https://rukminim1.flixcart.com/image/1366/1366/xif0q/mobile/s/n/p/-original-imahfrff5gqmz6ed.jpeg?q=90",
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg",
      "https://m.media-amazon.com/images/I/61amb0CfMGL.jpg",
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
      <div className="product-container" key={value.id}>
        {/* LEFT SECTION */}
        <div className="image-section">
          {/* MAIN IMAGE */}
          <div className="main-image">
            <img src={selectedImage} alt="mobile" />
          </div>

          {/* IMAGE CHANGER */}
          <div className="image-gallery">
            {images.map((img, index) => {
              return (
                <img
                  key={index}
                  src={img}
                  alt="thumbnail"
                  className={
                    selectedImage === img ? "thumbnail active" : "thumbnail"
                  }
                  onClick={() => setSelectedImage(img)}
                />
              );
            })}
          </div>
        </div>

        {/* RIGHT SECTION */}
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
      <RecommendedProducts />
      <Reviews />
    </div>
  );
}

export default Product;
