import {createStore} from "./store/counter";
import {useStore} from "./hooks/useStore";

const store = createStore({ count: 0 })

export default function Counter2 () {
  const [state, setState] = useStore(store);

  function handleClick() {
    setState((prev) => ({count: prev.count + 1}))
  }

  return (
      <>
        <h3>Counter2: { state.count }</h3>
        <button onClick={handleClick}>+</button>
      </>
  )
}