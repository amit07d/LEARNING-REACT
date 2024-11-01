import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(7) // Initialize count as a number

  return (
    <>
      <div className='bg-green-600 p-8 text-white'>
        The count is {count}
      </div>
      <br />
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </>
  )
}

export default App
