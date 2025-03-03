import {createStore} from "./store/counter";
import {useStore} from "./hooks/useStore";

const store = createStore({ count: 0 })

export default function Counter1 () {
  const [state, setState] = useStore(store);

  function handleClick() {
    setState((prev) => ({count: prev.count + 1}))
  }

  return (
      <>
        <h3>Counter1: { state.count }</h3>
        <button onClick={handleClick}>+</button>
      </>
  )
}