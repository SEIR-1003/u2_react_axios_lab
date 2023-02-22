import { useState, useEffect } from 'react'
import './App.css'
import { Route, Link, Routes } from 'react-router-dom'
import Landing from './Landing'
import StarshipsList from './components/StarshipsList'
import axios from 'axios'
import { BASE_URL } from '../src/globals'

function App() {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}/starships`)
      console.log(response.data.results)
      setStarships(response.data.results)
    }
    getStarships()
  }, [])

  return (
    <div className="App">
      <nav>
        <h1>Star Wars</h1>
        <div className='link-container'>
          <Link to="/">Home</Link>
          <Link to="/starships">Starships</Link>
        </div>
      </nav>
      
      <main>
        <Routes>
          <Route path="/" element={ <Landing/> } />
          <Route path="starships" element={ <StarshipsList starships={starships} /> } />
        </Routes>
      </main>

    </div>
  )
}

export default App
