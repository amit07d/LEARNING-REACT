import { ChildA } from './Components/ChildA'
import './App.css'
import { createContext, useState } from 'react'

const ThemeContext = createContext()
function App() {
 
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      
      <ChildA />

    </ThemeContext.Provider>

    
  )
}

export default App

export {ThemeContext}

