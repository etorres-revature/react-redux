import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import {
  INCREMENT,
  INCREASE,
  DECREMENT,
  DECREASE,
  TOGGLE,
} from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: INCREMENT });
  };

  const increaseHandler = () => {
    dispatch({ type: INCREASE, amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: DECREMENT });
  };

  const decreaseHandler = () => {
    dispatch({ type: DECREASE, amount: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: TOGGLE });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase by 5</button>
      </div>
      <div>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={decreaseHandler}>decrease by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
