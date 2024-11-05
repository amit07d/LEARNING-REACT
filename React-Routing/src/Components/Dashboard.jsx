import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard Page</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
