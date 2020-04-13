import React, { Component } from "react";

class Count extends Component {
  state = {
    countValue: 1,
  };

  constructor(props) {
    super(props);
  }

  countChange = (e) => {
    this.setState({ countValue: Number(e.target.value) });
  };

  decrement = () => {
    if (this.state.countValue <= 1) {
      return 1;
    } else {
      this.setState((prevState) => ({
        countValue: Number(prevState.countValue) - 1,
      }));
    }
  };

  increment = () => {
    this.setState((prevState) => ({
      countValue: Number(prevState.countValue) + 1,
    }));
  };

  render() {
    return (
      <div className="stepper-input">
        <a className="decrement" href="#" onClick={this.decrement}>
          -
        </a>
        <input
          type="number"
          className="quantity"
          value={this.state.countValue}
          onChange={this.countChange}
        ></input>
        <a className="increment" href="#" onClick={this.increment}>
          +
        </a>
      </div>
    );
  }
}

export default Count;
