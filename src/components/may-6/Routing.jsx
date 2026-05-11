import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MobileView from "../may-1/MobileView";
import { mobiles } from "./mobile";
import Product from "./Product";
import Login from "../may-8/Login";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<MobileView mobiles={mobiles} />} />
        <Route path="/mobile/:prodId" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
