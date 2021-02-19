import React, { useState, useEffect } from "react";
import "../components/counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count:${count}`;
  });
  const Add = () => {
    setCount(count + 1);
  };
  const Minus = () => {
    setCount(count - 1);
  };
  const Reset = () => {
    setCount(0);
  };
  return (
    <div className="counterBox">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={Add}>Plus</button>
      <button onClick={Minus}>Minus</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default Counter;
