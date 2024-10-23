// import Display from "./components/Display";
// import ButtonsContainer from "./components/ButtonsContainer";
// import styles from "./App.module.css";
// import { useState } from "react";

// function App() {
//   const [calVal, setCalVal] = useState("");
//   const onButtonClick = (event) => {
//     console.log( event)
//   }

//   return (
//         <div className= {styles.calculator}>
//       <Display displayValue={calVal} />
//       <ButtonsContainer onButtonClick={onButtonClick}/>
//        </div>
//   );
// }

// export default App;
 




import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("1");

  const onButtonClick = (event) => {
    const buttonValue = event.target.innerText;

    if (buttonValue === "C") {
      // Clear the calculator display
      setCalVal("");
    } else if (buttonValue === "=") {
      try {
        // Evaluate the expression and update the display
        setCalVal(eval(calVal));
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      // Append the clicked button value to the current calculation
      setCalVal(calVal + buttonValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
