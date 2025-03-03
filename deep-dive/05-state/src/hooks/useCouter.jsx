import {useState} from "react";

export default function useCounter(initCount = 0) {
  const [counter, setCounter] = useState(initCount)

  function inc() {
    setCounter(prev => prev + 1)
  }

  return { counter, inc }
}