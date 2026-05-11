import React, { Component } from "react";

class Mounting extends Component {
  constructor() {
    console.log(" in constructor method");
    super();
    this.state = {
      name: "David",
    };
  }

  static getDerivedStateFromProps() {
    console.log(" in getDervided state from props method");
  }

  componentDidMount() {
    console.log(" in component did mount method");
  }

  render() {
    console.log(" in render method");
    return (
      <div>
        <h1>Hello name {this.state.name}</h1>
      </div>
    );
  }
}

export default Mounting;
