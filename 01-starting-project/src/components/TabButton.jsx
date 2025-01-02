export default function TabButton({ children }) {
  function handleClick() {
    console.log("hello")
  }

  return (
      <li>
        <button onClick={handleClick}>{children}</button>
      </li>
  );
}