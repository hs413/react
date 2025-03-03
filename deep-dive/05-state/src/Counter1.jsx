import useCounter from "./useCouter";

export default function Counter1 () {
  const  { counter, inc } = useCounter();

  return (
      <>
        <h3>Counter1: { counter }</h3>
        <button onClick={inc}>+</button>
      </>
  )
}