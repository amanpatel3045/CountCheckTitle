import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  console.log(1);
  //useEffect will run after render
  //render means return k baad jo likha hai phle wo print hoga uske baad
  //useaeaffect wala print hoga
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);
  console.log(2);
  return (
    <div className="App">
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>INC</button>
      <button disabled={count === 0} onClick={() => setCount(count - 1)}>
        DEC
      </button>
    </div>
  );
}