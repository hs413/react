import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../store";

const Counter = () => {
  const disPatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    disPatch(counterActions.increment())
  }

  const increaseHandler = () => {
    disPatch(counterActions.increase(10))
  }

  const decrementHandler = () => {
    disPatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    disPatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
