import React from "react";
import "./Banner.css";

function Banner(props) {
  console.log(props);
  let movieData = props.movieData.map((value) => {
    return (
      <div className="main">
        <img src={value.imageUrl} />
        <div className="child">
          <h1>Hello</h1>
        </div>
      </div>
    );
  });

  return <div>{movieData}</div>;
}

export default Banner;
