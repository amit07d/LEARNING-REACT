import { useDispatch, useSelector } from 'react-redux';  
import './App.css';
import { decrement, increment, reset, incrementByAmount } from './features/counter/CounterSlice'; // Import incrementByAmount
import { useEffect, useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState(false);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (count > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [count]);

  function handleClickAmount() {
    dispatch(incrementByAmount(amount)); 
    setAmount('');
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center space-x-4 mb-4">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Increment
        </button>

        <span className={`text-4xl font-bold transition-transform duration-300 ${animate ? 'animate-bounce' : ''}`}>
          {count}
        </span>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Decrement
        </button>
      </div>

      <button
        aria-label="Reset value"
        onClick={() => dispatch(reset())}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        Reset
      </button>

      <div className='mt-4'>
        <input
          type="number"
          value={amount}
          placeholder='Enter Amount'
          onChange={(e) => setAmount(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded"
        />

        <button
          aria-label='Increment by amount'
          onClick={handleClickAmount}
          className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Increment by Amount
        </button>
      </div>
    </div>
  );
}

export default App;
