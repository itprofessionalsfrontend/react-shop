import React, { useState } from "react";

// class Count extends Component {
//   state = {
//     countValue: 1,
//   };

//   constructor(props) {
//     super(props);
//   }

//   countChange = (e) => {
//     this.setState({ countValue: Number(e.target.value) }, () =>
//       this.props.getCount(this.state.countValue)
//     );
//   };

//   decrement = () => {
//     if (this.state.countValue <= 1) {
//       return 1;
//     } else {
//       this.setState(
//         (prevState) => ({
//           countValue: Number(prevState.countValue) - 1,
//         }),
//         () => this.props.getCount(this.state.countValue)
//       );
//     }
//   };

//   increment = () => {
//     this.setState(
//       (prevState) => ({
//         countValue: Number(prevState.countValue) + 1,
//       }),
//       () => this.props.getCount(this.state.countValue)
//     );
//   };

//   render() {
//     // console.log("count render called")
//     return (
//       <div className="stepper-input">
//         <a className="decrement" href="#" onClick={this.decrement}>
//           -
//         </a>
//         <input
//           type="number"
//           className="quantity"
//           value={this.state.countValue}
//           onChange={this.countChange}
//         ></input>
//         <a className="increment" href="#" onClick={this.increment}>
//           +
//         </a>
//       </div>
//     );
//   }
// }

function Count(props) {
  const [countValue, setCountValue] = useState(1);

  const countChange = (e) => {
    setCountValue(Number(e.target.value));
    props.getCount(countValue);
  };

  const decrement = () => {
    if (countValue <= 1) {
      return 1;
    } else {
      const newCountValue = countValue - 1;
      setCountValue(newCountValue);
      console.log(newCountValue);
      props.getCount(newCountValue);
    }
  };

  const increment = () => {
    const newCountValue = countValue + 1;
    setCountValue(newCountValue);
    console.log(newCountValue);
    props.getCount(newCountValue);
  };

  return (
    <div className="stepper-input">
      <a className="decrement" href="#" onClick={decrement}>
        -
      </a>
      <input
        type="number"
        className="quantity"
        value={countValue}
        onChange={countChange}
      ></input>
      <a className="increment" href="#" onClick={increment}>
        +
      </a>
    </div>
  );
}

export default Count;
