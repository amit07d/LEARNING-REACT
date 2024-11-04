// import { useCallback, useState } from 'react';
// import ChildComponent from './Components/ChildComponent';

import ExpensiveComponent from "./Components/ExpensiveComponent";
import './App.css';


function App() {
  // const [count, setCount] = useState(0);

  // const handleClick = useCallback(() => {
  //   setCount((prevCount) => prevCount + 1);
  // }, []);

  return (

    <div>
      <ExpensiveComponent />
    </div>


    // <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    //   <div className="text-2xl font-bold mb-4">Count: {count}</div>
    //   <button
    //     onClick={handleClick}
    //     className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
    //   >
    //     Click me
    //   </button>
    //   <br />
    //   <div className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-600 transition duration-300">
    //     <ChildComponent buttonName="Increment" handleClick={handleClick} />
    //   </div>
    // </div>
  );
}

export default App;
