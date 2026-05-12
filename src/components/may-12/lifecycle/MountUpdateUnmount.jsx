import React, { Component, PureComponent } from "react";

class MountUpdateUnmount extends PureComponent {
  constructor() {
    console.log(" in constructor method");
    super();
    this.state = {
      name: "David",
    };
  }

  static getDerivedStateFromProps() {
    console.log(" in getDervided state from props method");
    return null;
  }

  componentDidMount() {
    console.log(" in component did mount method");
  }

  shouldComponentUpdate() {
    console.log("in should component update method");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("in get snapshot before update method");
    return null;
  }

  componentDidUpdate() {
    console.log("in component did update method");
  }

  //unmount

  componentWillUnmount() {
    console.log("in component did un mount method");
  }

  handleClick = () => {
    this.setState({
      name: "Jhonson",
    });
  };

  render() {
    console.log(" in render method");
    return (
      <div>
        <h1>Hello name {this.state.name}</h1>
        <button onClick={this.handleClick}>Button</button>
      </div>
    );
  }
}

export default MountUpdateUnmount;
