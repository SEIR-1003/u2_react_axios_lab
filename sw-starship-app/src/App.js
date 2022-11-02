import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from './globals'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Starships from './components/Starships'
import Characters from './components/Characters'
import Planets from './components/Planets'
import StarshipDetails from './components/StarshipDetails'


function App() {

  const[starships, setStarships] = useState([])
  const[planets, setPlanets] = useState([])
  const[characters, setCharacters] = useState([])

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}/starships`)
      setStarships(response.data.results)
    }
    getStarships()

    const getPlanets = async () => {
      const response = await axios.get(`${BASE_URL}/planets`)
      setPlanets(response.data.results)
    }
    getPlanets()

    const getCharacters = async () => {
      const response = await axios.get(`${BASE_URL}/people`)
      setCharacters(response.data.results)
    }
    getCharacters()
  }, [])  


  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='starships' element={<Starships starships={starships}/>} />
        <Route exact path='characters' element={<Characters characters={characters}/>} />
        <Route exact path='planets' element={<Planets planets={planets}/>} />
        <Route path='starships/:name' element={<StarshipDetails starships={starships}/>} />
      </Routes>
    </div>
  );
}

export default App;
