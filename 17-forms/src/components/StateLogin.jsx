import {useState} from "react";
import Input from "./Input.jsx";
import {hasMinLength, isEmail, isNotEmpty} from "../util/validation.js";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  })

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  })

  const emailIsInvalid =
      didEdit.email &&
      !isEmail(enteredValues.email) &&
      !isNotEmpty(enteredValues.email);

  const passwordIsInvalid = didEdit.password &&
      !hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault();

    console.log(enteredValues);
    console.log('submmit')
  }

  function handleChange(identifier, value) {
    setEnteredValues(prevValues => {
      return {
        ...prevValues,
        [identifier]: value,
      }
    })

    setDidEdit(prevEdit => {
      return {
        ...prevEdit,
        [identifier]: false,
      }
    })
  }

  function handleBlur(identifier) {
    setDidEdit(prevEdit => {
      return {
        ...prevEdit,
        [identifier]: true,
      }
    })
  }

  return (
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="control-row">
          <Input
            label="Email"
            id="email"
            type="email"
            name="email"
            onBlur={() => handleBlur('email')}
            onChange={(event) => handleChange('email', event.target.value)}
            value={enteredValues.email}
            error={emailIsInvalid && 'Please enter a valid email'}
          />

          <Input
              label="Password"
              id="password"
              type="password"
              name="password"
              onChange={(event) => handleChange('password', event.target.value)}
              onBlur={() => handleBlur('password')}
              value={enteredValues.password}
              error={passwordIsInvalid && 'Please enter a valid password'}
          />
        </div>

        <p className="form-actions">
          <button className="button button-flat">Reset</button>
          <button className="button">Login</button>
        </p>
      </form>
  );
}
