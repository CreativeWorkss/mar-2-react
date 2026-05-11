import React, { Component } from "react";

// Virtual DOM : It is memory copy of a real dom ,
// once react recives the update , update happens
//  in virtual dom first and then it updates
// only the required elements in the real dom

class Event extends Component {
  constructor() {
    super();
    this.state = { name: "David" };
  }

  handleClick() {
    console.log("this", this);
    this.setState({ name: "Johnson" });
  }
  render() {
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <button onClick={this.handleClick.bind(this)}>Click</button>
      </div>
    );
  }
}

export default Event;
