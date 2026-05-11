import React, { Component } from "react";

class ThisWays extends Component {
  constructor() {
    super();
    this.state = { name: "David" };
    // 2 ) ways to handle this keyword during a function call
    //  this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    // 3) arrow function
    this.setState({ name: "Johnson" });
  };

  handle() {
    this.setState({ name: "Johnson" });
  }
  render() {
    return (
      <div>
        <h1>Name {this.state.name}</h1>
        <button onClick={this.handleClick}>Button</button>
        {/* 1) bind on function call only */}
        <button onClick={this.handle.bind(this)}>On Function call</button>
      </div>
    );
  }
}

export default ThisWays;
