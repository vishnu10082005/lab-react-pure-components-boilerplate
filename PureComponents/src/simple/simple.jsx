import React, { Component } from "react";

export default class SimpleComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      toggle: true
    };
  }

  changeToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  increaseCount = () => {
    if (this.state.toggle) {
      this.setState({
        count: this.state.count + 1
      });
    }
  };

  render() {
    return (
      <>
        <h1>Simple count</h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.changeToggle}>Toggle</button>&nbsp;
        <button onClick={this.increaseCount}>+</button>
      </>
    );
  }
}
