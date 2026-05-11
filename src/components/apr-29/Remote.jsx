import React from "react";
import "./Remote.css";

function Remote(props) {
  console.log("props", props);

  let moviesData = props.movies.map((value) => {
    return (
      <div>
        <img className="marvel" src={value.image} />
      </div>
    );
  });

  return (
    <div className="main">
      <div className="banner">{moviesData}</div>
    </div>
  );
}

export default Remote;
