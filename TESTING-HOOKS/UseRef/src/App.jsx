import { useState, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  const ref = useRef()


useEffect(() => {
    console.log(`First rendering..`);
    ref.current.style.backgroundColor ='black'
},[])

  return (
    <>
      <div className='bg-cyan-400 p-8 m-2 rounded-2xl text-white'>
        The count is {count}
      </div>
      <button 
      className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
      ref={ref} 
      onClick={() => setCount(count + 1)}
    >
      Update Count
    </button>
    <button className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg" onClick={()=> {ref.current.style.display = 'none'}}>Change Me</button>
    </>
    
  )
}

export default App
