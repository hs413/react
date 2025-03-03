
export const createStore = (initialState) => {
  console.log(initialState)
  let state = initialState;

  const callbacks = new Set();

  const get = () => state

  const set = (nextState = state) => {
    state = nextState;
    callbacks.forEach(callback => callback());

    return state;
  }

  const subscribe = (callback) => {
    callbacks.add(callback);

    return () => {
      callbacks.delete(callback);
    }
  }

  return {get, set, subscribe}
}