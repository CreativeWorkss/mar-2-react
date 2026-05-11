// Sidebar.jsx

import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Filters</h2>

      {/* CATEGORY */}
      <div className="filter-box">
        <h3>Category</h3>

        <label>
          <input type="checkbox" />
          Iphone
        </label>

        <label>
          <input type="checkbox" />
          Samsung
        </label>

        <label>
          <input type="checkbox" />
          Vivo
        </label>

        <label>
          <input type="checkbox" />
          OnePlus
        </label>
      </div>

      {/* PRICE */}
      <div className="filter-box">
        <h3>Price</h3>

        <label>
          <input type="radio" name="price" />
          Under ₹10,000
        </label>

        <label>
          <input type="radio" name="price" />
          ₹10,000 - ₹25,000
        </label>

        <label>
          <input type="radio" name="price" />
          Above ₹25,000
        </label>
      </div>

      {/* RAM */}
      <div className="filter-box">
        <h3>RAM</h3>

        <label>
          <input type="checkbox" />4 GB
        </label>

        <label>
          <input type="checkbox" />6 GB
        </label>

        <label>
          <input type="checkbox" />8 GB
        </label>
      </div>

      {/* BUTTON */}
      <button className="apply-btn">Apply Filters</button>
    </div>
  );
}

export default Sidebar;
