import React, { Component } from "react";
import "./MobileView.css";
import { Link } from "react-router-dom";
import Sidebar from "../may-6/sidebar/SideBar";
import Header from "../may-6/header/Header";

class MobileView extends Component {
  render() {
    console.log("props in the mobile", this.props);
    let { mobiles } = this.props;

    let mobile = mobiles.map((value) => {
      return (
        <Link to={`/mobile/${value.id}`}>
          <div className="mobile-main">
            <div className="section-one">
              <img className="mobile-image" src={value.url} />
            </div>
            <div className="section-two">
              <h1>{value.name}</h1>
              <ul>
                {value.features.map((feature, index) => {
                  return <li key={index}>{feature}</li>;
                })}
              </ul>
              <div className="section-book">
                <button className="book">Buy Now</button>
                <button className="book">Add to watchlist</button>
              </div>
            </div>
          </div>
        </Link>
      );
    });
    return (
      <div>
        <Header />
        <div className="section">
          <Sidebar />
          <div>{mobile}</div>
        </div>
      </div>
    );
  }
}

export default MobileView;
