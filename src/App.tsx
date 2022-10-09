import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Champs from './pages/Champs'
import Build from './pages/Build'
import ChampObj from './model/ChampsObj'
import lolApiService from './services/lolApiService'


function App() {
  const [champs, setChamps] = useState({} as ChampObj);

  useEffect(() => {
    const fetchChamps = async () => {
      const data = await lolApiService.getLolChampions()
      setChamps(data)
    }

    fetchChamps()
  }, []);


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home logo={logo} />} />
        <Route path={'/champs'} element={<Champs champs={champs} />} />
        <Route path={'/build'} element={<Build />} />
      </Routes>
    </Router>
  )
}

export default App
