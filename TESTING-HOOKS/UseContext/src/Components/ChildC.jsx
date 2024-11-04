import React, { useContext } from 'react';
import { ThemeContext } from '../App';

export const ChildC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`flex items-center justify-center h-screen w-screen p-4 rounded-md ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      <div className="text-center">
        <p className="text-lg">The current theme is {theme}</p>
        <button 
          onClick={toggleTheme}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};
