import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
  const disPatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter)

  const incrementHandler = () => {
    disPatch({ type: 'increment' })
  }

  const increaseHandler = () => {
    disPatch({ type: 'increase', amount: 10 })
  }

  const decrementHandler = () => {
    disPatch({ type: 'decrement' })
  }

  const toggleCounterHandler = () => {
    disPatch({ type: 'toggle' })
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
