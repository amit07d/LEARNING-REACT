import React, { useState, useCallback, useEffect, useRef } from 'react';

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const previousFunction = useRef(null);

  const expensiveCalculation = useCallback(() => {
    console.log("Running expensive calculation...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  useEffect(() => {
    if (previousFunction.current) {
      if (previousFunction.current === expensiveCalculation) {
        console.log("Function not re-created");
      } else {
        console.log("Function got re-created");
      }
    } else {
      previousFunction.current = expensiveCalculation;
    }
  }, [expensiveCalculation]);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something" 
        className="mb-4 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="mb-4 text-lg font-semibold">
        Expensive Calculation Result: {expensiveCalculation()}
      </p>
      <button 
        onClick={() => setCount(count + 1)} 
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
      >
        Increment Count
      </button>
    </div>
  );
};

export default ExpensiveComponent;
