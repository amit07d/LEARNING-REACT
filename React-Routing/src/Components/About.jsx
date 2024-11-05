import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate('/dashboard')
  }

  return (
    <div className='p-4'>About Page
      <h1 className='text-2xl font-semibold mb-4'></h1>
      <button onClick={handleClick}
        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
      >
        Go to Dashboard Page</button>

    </div>
  )
}

export default About