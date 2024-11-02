//import { useState, useEffect } from 'react'
import './App.css'
//import DataFetcher from './Components/DataFetcher'
// import TimeComponent from './Components/TimeComponent'
import ResizeComponent from './Components/ResizeComponent'


function App() {
  // const [count, setCount] = useState(10)
  // const [total, setTotal] = useState(0)

  // That will run every render      {1st example}

  // useEffect(() => {
  //   alert("I will run on each render");
  // });
  

  // thats runs only first render     [2nd example]

  // useEffect(() => {
  //   alert("I will only run on 1 st render")
  // }, []);

  // variation 3

  // useEffect(() => {
  //   alert("I will run every time when count is updated");
  // }, [count]);

  // multiple dependencies   < variation 4>
  
  // useEffect(() => {
  //   alert("I will run every time when count / total is updated")
  // }, [count, total])

  // cleanUp function   <variation 5>

  // useEffect(() => {
  //   alert("Total is Updated")
  //   return (() => {
  //     alert("Total is Unmounted from UI")
  //   })
  // }, [total])

  return (
    
      //  <TimeComponent />
    // <Datafetcher />
  //  <ResizeComponent />
//     <div>
//       <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-105 mt-7">
//   The count is {count}
// </button>
//       <br />
//       <button onClick={() => setCount(count + 1)} className="bg-green-600  text-white font-semibold py-3 px-6 rounded-lg shadow-md  ease-in-out transform hover:scale-105 mt-7">Click me</button>
//       <br />

//       <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-105 mt-7">
//   The total is {total}
// </button>
//       <br />
//       <button onClick={()=> setTotal(total +1)} className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md  ease-in-out transform hover:scale-105 mt-7">Tick me</button>
//       </div>
  )
}

export default App
