import {useState} from "react";

function useCounter(initCount = 0) {
  const [counter, setCounter] = useState(initCount)

  function inc() {
    setCounter(prev => prev + 1)
  }

  return { counter, inc }
}

function Counter1 ( { counter, inc } ) {
  return (
      <>
        <h3>Counter1: { counter }</h3>
        <button onClick={inc}>+</button>
      </>
  )
}

function Counter2 ( { counter, inc } ) {
  return (
      <>
        <h3>Counter2: { counter }</h3>
        <button onClick={inc}>+</button>
      </>
  )
}

function App() {
  const { counter, inc } = useCounter();

  return (
      <>
        <Counter2 counter={counter} inc={inc} />
        <Counter1 counter={counter} inc={inc} />
      </>
  );
}

export default App;
