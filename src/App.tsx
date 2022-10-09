
import logo from './logo.svg'
import './App.css'

import Home from './pages/Home'
import Champs from './pages/Champs'
import Navbar from './components/Navbar'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import React from 'react'

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Home logo={logo} /> },
    { path: '/champs', element: <Champs /> },
  ])

  return (
    <>
      <Navbar />
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  )
}

export default App
