
import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  let [errorMessage, setErrorMessage]= useState()

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
      setErrorMessage('')
    } else {
      setErrorMessage("value cannot be more than 20 !!!!")
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      setErrorMessage('')
    } else {
      setErrorMessage("Value cannot be less than 0 !!!")
    }
  };



  return (
    <>
      <h1>Hello</h1>
      <h2>Counter Value :{counter} </h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
      {/* {errorMessage && <h3 style={{ color: 'red' }}>{errorMessage}</h3>} */}
      <h3 style={{ color: 'red' }}>{errorMessage}</h3>

      </>
  )
}

export default App
