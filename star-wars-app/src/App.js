import { useState, useEffect } from 'react'
import './App.css'
import { Route, Link, Routes } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../src/globals'
import Landing from './Landing'
import StarshipsList from './components/StarshipsList'
import Planets from './components/Planets'
import Characters from './components/Characters'

function App() {
  const [starships, setStarships] = useState([])
  const [planets, setPlanets] = useState([])
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}/starships`)
      console.log(response.data.results)
      setStarships(response.data.results)
    }
    getStarships()
  }, [])

  useEffect(() => {
    const getPlanets = async() => {
      const response = await axios.get(`${BASE_URL}/planets`)
      console.log(response.data.results)
      setPlanets(response.data.results)
    }
    getPlanets()
  }, [])

  useEffect(() => {
    const getCharacters = async() => {
      const response = await axios.get(`${BASE_URL}/people`)
      console.log(response.data.results)
      setCharacters(response.data.results)
    }
    getCharacters()
  }, [])

  return (
    <div className="App">
      <nav>
        <h1>Star Wars API</h1>
        <div className='link-container'>
          <Link to="/">Home</Link>
          <Link to="/starships">Starships</Link>
          <Link to="/planets">Planets</Link>
          <Link to="/characters">Characters</Link>
        </div>
      </nav>
      
      <main>
        <Routes>
          <Route path="/" element={ <Landing/> } />
          <Route path="starships" element={ <StarshipsList starships={starships} /> } />
          <Route path="planets" element={ <Planets planets={planets} /> } />
          <Route path="characters" element={ <Characters characters={characters} /> } />
        </Routes>
      </main>

    </div>
  )
}

export default App
