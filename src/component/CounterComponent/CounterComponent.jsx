import { useState } from "react";

export const CounterComponent = () => {
  const [counter, setCounter] = useState(() => Math.floor(Math.random() * 16));

  console.log("incmt3");

  const incmt3 = () => {
    console.log(counter);
    setCounter((prev) => {
        console.log(prev);
        return prev+3;

    })
  };

  return (
    <div>
      <div>
        <span>{counter}</span>
        <button onClick={incmt3}>Click me</button>
      </div>
    </div>
  );
};
