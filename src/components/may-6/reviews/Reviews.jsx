// Reviews.jsx

import React from "react";
import "./Review.css";

function Reviews() {
  const reviews = [
    {
      id: 1,
      user: "Rahul",
      rating: "⭐⭐⭐⭐⭐",
      comment:
        "Amazing mobile. Camera quality is excellent and battery backup is really good.",
    },

    {
      id: 2,
      user: "Priya",
      rating: "⭐⭐⭐⭐",
      comment:
        "Display looks premium and performance is smooth for gaming and daily usage.",
    },

    {
      id: 3,
      user: "Arjun",
      rating: "⭐⭐⭐⭐⭐",
      comment:
        "Value for money product. Fast charging and design are impressive.",
    },
  ];

  return (
    <div className="review-container">
      <h2 className="review-heading">Customer Reviews</h2>

      {reviews.map((value) => {
        return (
          <div className="review-card" key={value.id}>
            <div className="review-top">
              <h3>{value.user}</h3>

              <span>{value.rating}</span>
            </div>

            <p>{value.comment}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;
