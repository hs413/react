import {counterActions} from "./store/counter";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

export default function Counter ({ name, }) {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count);
  // const [count, setCount] = useState(0)

  function handleClick() {
    dispatch(counterActions.inc())
    // setCount(prev => prev += 1)
  }

  return (
      <>
        <h3>{name}: {count}</h3>
        <button onClick={handleClick}>+</button>
      </>
  )
}