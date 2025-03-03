import {useEffect, useState} from "react";

export const useStoreSelector = (
    store,
        selector,
) => {
  const [state, setState] = useState(() => selector(store.get()))

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const value = selector(store.get())
      setState(value)
    })

    return unsubscribe
  }, [store, selector]);

  return state;
}
