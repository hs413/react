import {useState} from "react";
import Input from "./Input.jsx";
import {hasMinLength, isEmail, isNotEmpty} from "../util/validation.js";
import {useInput} from "../hooks/useInput.js";

export default function Login() {
  const {
    value: emailValue,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleChange: handlePasswordChange,
    handleBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput('', (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
    console.log('submmit')
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
            onBlur={(handleEmailBlur)}
            onChange={handleEmailChange}
            value={emailValue}
            error={emailHasError && 'Please enter a valid email'}
          />

          <Input
              label="Password"
              id="password"
              type="password"
              name="password"
              onBlur={(handlePasswordBlur)}
              onChange={handlePasswordChange}
              value={passwordValue}
              error={passwordHasError && 'Please enter a valid password'}
          />
        </div>

        <p className="form-actions">
          <button className="button button-flat">Reset</button>
          <button className="button">Login</button>
        </p>
      </form>
  );
}
