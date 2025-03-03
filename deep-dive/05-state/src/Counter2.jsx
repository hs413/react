import useCounter from "./useCouter";

export default function Counter2 ({ counter, inc }) {

  return (
      <>
        <h3>Counter2: { counter }</h3>
        <button onClick={inc}>+</button>
      </>
  )
}