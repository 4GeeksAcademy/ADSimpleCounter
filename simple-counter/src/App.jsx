// Learning to use useState, useEffect, setInterval, props
// use state - data of component - hold our counter, like a memory space - whiteboard that is updated with new information, provides data for that moment, but when its done you can clear it out and put new info, place to hold info in functional component
// set interval - accomplish something at a certain time or keep track of time, doing things repeatedly, use inside use effect
// useEffect - helper to functional component, tells when change occurs and what need to be fixed or adjusted, fetch info from internet

// properties
import { useEffect, useState } from "react";
import SimpleCounter from "./SimpleCounter";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // component mounting into browser
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
    console.log(counter);

    // component unmount with return statmenet - undoing effects of component when originally rendered
    return () => clearInterval(interval);
  }, [counter]);
  // dependency array says exactly what to pay attention to - checklist
  // if no dependency array: constantly update as needed
  // empty dependency array: only run once
  // dependency array with state variable like counter, it will onyl update when state changes

  function calculateSeconds(aCounter, placeValue) {
    return Math.floor(aCounter / placeValue) % 10;
  }

  return (
    <>
      <SimpleCounter
        hundredthousandsDigit={calculateSeconds(counter, 100000)}
        tenthousandsDigit={calculateSeconds(counter, 10000)}
        thousandsDigit={calculateSeconds(counter, 1000)}
        hundredsDigit={calculateSeconds(counter, 100)}
        tensDigit={calculateSeconds(counter, 10)}
        onesDigit={calculateSeconds(counter, 1)}
      />
    </>
  );
}

export default App;
