import Counter2 from "./Counter2";
import Counter1 from "./Counter1";
import useCounter from "./useCouter";

function App() {
  const { counter, inc } = useCounter();
  return (
      <>
        <Counter2 counter={counter} inc={inc} />
        <Counter1 counter={counter} inc={inc} />
      </>
  );
}

export default App;
