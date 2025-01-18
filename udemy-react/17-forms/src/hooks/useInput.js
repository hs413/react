import {useState} from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue)

  function handleChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleBlur(identifier) {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleBlur,
    handleChange,
    hasError: didEdit && !valueIsValid,
  }
}