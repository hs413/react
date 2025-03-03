import {createStore} from "./store/counter";
import {useStore} from "./hooks/useStore";
import {useStoreSelector} from "./hooks/useStoreSelector";
import {useCallback, useEffect, useMemo} from "react";


export default function NewCounter () {
  const subscription = useMemo(
      () => ({
        getCurrentValue: () => store.get(),
        subscribe: (callback) => {
          const unsubscribe = store.subscribe(callback)
          return () => unsubscribe()
        }
      })
  )

  const value = useSubScription(subscription)

  return <>{JSON.stringify(value)}</>
}