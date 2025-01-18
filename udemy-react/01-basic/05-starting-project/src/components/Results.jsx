import {calculateInvestmentResults} from "../util/investment.js";

export default function Results({ input }) {
  const results = calculateInvestmentResults(input)
  console.log(results)
  return (
      <table id="result">


      </table>
  )
}