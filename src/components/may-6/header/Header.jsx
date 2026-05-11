// Header.jsx

import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      {/* LOGO */}
      <div className="logo">Mobile Store</div>

      {/* SEARCH BAR */}
      <div className="search-box">
        <input type="text" placeholder="Search mobiles..." />

        <span className="search-icon">🔍</span>
      </div>

      {/* MENU */}
      <div className="menu-section">
        <div className="menu-item">
          ❤️
          <span>Wishlist</span>
        </div>

        <div className="menu-item">
          🛒
          <span>Cart</span>
        </div>

        <div className="menu-item">
          👤
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
