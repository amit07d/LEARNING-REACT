import { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider } from './contexts/theme';
import ThemeBtn from './Components/ThemeBtn';
import Card from './Components/Card';

function App() {
  const [currentMode, setCurrentMode] = useState("Light");

  const lightMode = () => {
    setCurrentMode('light');
  };

  const darkMode = () => {
    setCurrentMode('dark');
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(currentMode);
  }, [currentMode]);

  return (
    <ThemeProvider value={{ themeMode: currentMode, lightMode, darkMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
