import styles from './App.module.css'
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import { useState } from 'react';
import { evaluate } from 'mathjs';
function App() {

  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
    setCalVal("")
    } else if (buttonText === "=") {
      try {
        const result = evaluate(calVal);
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("Error");
      }
    }
     else {
      const newDisplayValue = calVal + buttonText
      setCalVal(newDisplayValue)
    }
  };

  return (
    <div className={styles.calculator} >
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
      
   </div>
  );
}

export default App
