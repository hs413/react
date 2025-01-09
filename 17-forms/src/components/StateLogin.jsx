import {useState} from "react";

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
      didEdit.email && !enteredValues.email.includes('@');

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
          <div className="control no-margin">
            <label htmlFor="email">Email</label>
            <input
                id="email" type="email" name="email"
                onBlur={() => handleBlur('email')}
                onChange={(event) => handleChange('email', event.target.value)}
                value={enteredValues.email}
            />
            <div className="control-error">
              {emailIsInvalid && <p>email invalid</p>}
            </div>
          </div>

          <div className="control no-margin">
            <label htmlFor="password">Password</label>
            <input
                id="password" type="password" name="password"
                onChange={(event) => handleChange('password', event.target.value)}
                value={enteredValues.password}
            />
          </div>
        </div>

        <p className="form-actions">
          <button className="button button-flat">Reset</button>
          <button className="button">Login</button>
        </p>
      </form>
  );
}
