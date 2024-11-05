import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/about')
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Home Page</h1>
      <button 
        onClick={handleClick} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to About Page 
      </button>
    </div>
  )
}

export default Home
