import { useState, useMemo } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }

  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4'>
      <div className='text-2xl font-semibold mb-6'>
        Count: <span className='text-blue-600'>{count}</span>
      </div>
      
      <button
        onClick={() => setCount(count + 1)}
        className='px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6'
      >
        Increment Count
      </button>
      
      <input
        type="number"
        placeholder='Enter a number'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='mb-6 px-4 py-2 w-64 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      
      <div className='text-xl'>
        Double: <span className='font-semibold text-blue-600'>{doubleValue}</span>
      </div>
    </div>
  );
}

export default App;
