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

    // STATES
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const [zoomActive, setZoomActive] = useState(false);

    const [backgroundPosition, setBackgroundPosition] = useState("center");

    // HANDLE ZOOM
    const handleZoom = (event) => {
      const { left, top, width, height } =
        event.currentTarget.getBoundingClientRect();

      const x = ((event.clientX - left) / width) * 100;

      const y = ((event.clientY - top) / height) * 100;

      setBackgroundPosition(`${x}% ${y}%`);
    };

    return (
      <div className="product-container" key={value.id}>
        {/* LEFT SECTION */}
        <div className="image-section">
          {/* ZOOM CONTAINER */}
          <div
            className="zoom-container"
            onMouseMove={handleZoom}
            onMouseEnter={() => setZoomActive(true)}
            onMouseLeave={() => setZoomActive(false)}
          >
            {/* NORMAL IMAGE */}
            <img src={selectedImage} alt="mobile" className="product-image" />

            {/* ZOOM LAYER */}
            {zoomActive && (
              <div
                className="zoom-layer"
                style={{
                  backgroundImage: `url(${selectedImage})`,
                  backgroundPosition: backgroundPosition,
                }}
              ></div>
            )}
          </div>

          {/* IMAGE GALLERY */}
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

          <h3 className="feature-heading">Highlights</h3>

          {/* FEATURE CARDS */}

          <div className="feature-grid">
            {value.features.map((feature, index) => {
              return (
                <div className="feature-card" key={index}>
                  <span className="feature-number">0{index + 1}</span>

                  <h4>{feature}</h4>
                </div>
              );
            })}
          </div>

          {/* BUTTONS */}
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
