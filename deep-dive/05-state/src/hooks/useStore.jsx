import {useEffect, useState} from "react";

export const useStore = (store) => {
  const [state, setState] = useState(() => store.get())

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.get())
    })

    return unsubscribe
  }, [store]);

  return [state, store.set];
}