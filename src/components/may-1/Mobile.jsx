import React, { Component } from "react";

class Mobile extends Component {
  constructor() {
    super();
    this.state = { age: 20 };
  }

  render() {
    console.log("props", this.props);
    const { name, city } = this.props; // Destructuring
    return (
      <div>
        <h1>Name : {name}</h1>
        <h3>City : {city}</h3>
        <h3>Age : {this.state.age}</h3>
      </div>
    );
  }
}

export default Mobile;
