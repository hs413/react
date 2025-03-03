import {createStore} from "./store/counter";
import {useStore} from "./hooks/useStore";
import {useStoreSelector} from "./hooks/useStoreSelector";
import {useCallback, useEffect} from "react";

const store = createStore({ count: 0 })

export default function Counter () {
  const counter = useStoreSelector(
      store,
      useCallback((state) => state.count, []),
  )

  function handleClick() {
    setState((prev) => ({count: prev.count + 1}))
  }

  useEffect(() => {
    console.log('counter rendered')
  });

  return (
      <>
        <h3>{counter}</h3>
        <button onClick={handleClick}>+</button>
      </>
  )
}