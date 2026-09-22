import { useEffect, useState } from "react";
export const GreetingComponent = ({ randomMax }) => {
  const [random, setRandom] = useState(
    () => Math.floor(Math.random() * randomMax) + 1,
  );
  const [greeting, setGreeting] = useState("");


  useEffect(() => {
    console.log(random)
    if (random === randomMax) {
      window.localStorage.setItem("Jackpot", true);
    } else {
      window.localStorage.setItem("Jackpot", false);
    }
    switch (random) {
      case 1:
        setGreeting("Hellow");
        break;
      case 2:
        setGreeting("Hi");
        break;
      case 3:
        setGreeting("Howdy");
        break;
      case 4:
        setGreeting("Hey");
        break;
      case 5:
        setGreeting("Whats up");
        break;
      default:
        setGreeting("Hola");
    }
    return() =>{
        console.log("cleared");
        window.localStorage.clear();
    }
  }, [setGreeting]);

  return (
    <div>
      <h1>Random Greeting</h1>
      {greeting}
    </div>
  );
};
