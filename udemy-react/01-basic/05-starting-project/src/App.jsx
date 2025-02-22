import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import {useState} from "react";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedInvestment: 6,
    duration: 10,
  })

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      }
    })
  }

  return (
      <>
        <Header />
        <UserInput onChange={handleChange} userInput={userInput}/>
        <Results input={userInput} />
      </>
  )
}

export default App
