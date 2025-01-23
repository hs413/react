let state = {
  counter: 0,
}

export function get() {
  return state
}

export function set(nextState) {
  state = nextState;
}

function Counter() {
  const state = get();

  function handleClick() {
    set(prev => ({counter: prev.counter + 1}))
  }

  return (
      <>
        <h3>{state.counter}</h3>
        <button onClick={handleClick}>+</button>
      </>
  )
}














