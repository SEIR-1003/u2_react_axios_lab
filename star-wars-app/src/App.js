import { useState, useEffect } from 'react'
import './App.css'
import { Route, Link, Routes } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../src/globals'
import Landing from './Landing'
import StarshipsList from './components/StarshipsList'
import StarshipPage from './components/StarshipPage'
import PlanetsList from './components/PlanetsList'
import PlanetPage from './components/PlanetPage'
import CharactersList from './components/CharactersList'
import CharacterPage from './components/CharacterPage'
import FilmsList from './components/FilmsList'
import FilmPage from './components/FilmPage'
import VehiclesList from './components/VehiclesList'
import VehiclePage from './components/VehiclePage'

function App() {
  const [starships, setStarships] = useState([])
  const [planets, setPlanets] = useState([])
  const [characters, setCharacters] = useState([])
  const [films, setFilms] = useState([])
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}/starships`)
      setStarships(response.data.results)
    }
    getStarships()
  }, [])

  useEffect(() => {
    const getPlanets = async() => {
      const response = await axios.get(`${BASE_URL}/planets`)
      setPlanets(response.data.results)
    }
    getPlanets()
  }, [])

  useEffect(() => {
    const getCharacters = async() => {
      const response = await axios.get(`${BASE_URL}/people`)
      setCharacters(response.data.results)
    }
    getCharacters()
  }, [])

  useEffect(() => {
    const getFilms = async() => {
      const response = await axios.get(`${BASE_URL}/films`)
      setFilms(response.data.results)
    }
    getFilms()
  }, [])

  useEffect(() => {
    const getVehicles = async() => {
      const response = await axios.get(`${BASE_URL}/vehicles`)
      setVehicles(response.data.results)
    }
    getVehicles()
  }, [])

  return (
    <div className="App">
      <nav>
        <Link to="/"><img  className='logo' src="https://loodibee.com/wp-content/uploads/Star-Wars-transparent-logo.png" alt='Star Wars logo'/></Link>
        <div className='link-container'>
          <Link to="/starships">Starships</Link>
          <Link to="/planets">Planets</Link>
          <Link to="/characters">Characters</Link>
          <Link to="/vehicles">Vehicles</Link>
          <Link to="/films">Films</Link>
        </div>
      </nav>

      <main>
        <Routes>

          <Route path="/" element={ <Landing/> } />

          <Route path="starships" element={ <StarshipsList starships={starships} /> } />
          <Route path="starships/:index" element={ <StarshipPage starships={starships} /> } />

          <Route path="planets" element={ <PlanetsList planets={planets} /> } />
          <Route path="planets/:index" element={ <PlanetPage planets={planets} /> } />

          <Route path="characters" element={ <CharactersList characters={characters} /> } />
          <Route path="characters/:index" element={ <CharacterPage characters={characters} /> } />

          <Route path="vehicles" element={ <VehiclesList vehicles={vehicles} /> } />
          <Route path="vehicles/:index" element={ <VehiclePage vehicles={vehicles} /> } />

          <Route path="films" element={ <FilmsList films={films} /> } />
          <Route path="films/:index" element={ <FilmPage films={films} /> } />

        </Routes>
      </main>

    </div>
  )
}

export default App
