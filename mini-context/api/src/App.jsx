import UserContextProvider from "./context/UserContextProvider"
import LogIn from "./components/LogIn"
import Profile from "./components/Profile"
import './App.css'

function App() {
  return (
    < UserContextProvider>
      <h1>Good Evening</h1>

      <LogIn />
      <Profile />
      </ UserContextProvider>
  )
}

export default App
