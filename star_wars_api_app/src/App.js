import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import StarshipsList from './components/StarshipsList';
import './App.css';
import Planets from './components/Planets'
import Characters from './components/Characters'
import Nav from './components/Nav'
import { Link } from 'react-router-dom'

function App() {

  const [starships, setStarships] = useState([])
  const [planets, setPlanets] = useState([])
  const [characters, setCharacters] = useState([])
  // const [selectedStarship, setSelectedStarship] = useState(null)


  useEffect(()=>{
    const getStarships = async () => {
      const response = await axios.get(`https://swapi.dev/api/starships`)
      setStarships(response.data.results)
    }
    getStarships()
  },[starships])

  useEffect(()=>{
    const getPlanets = async() => {
      const response = await axios.get(`https://swapi.dev/api/planets`)
      setPlanets(response.data.results)
    }
    getPlanets()
  },[planets])

  useEffect(()=>{
    const getCharacters = async() => {
      const response = await axios.get(`https://swapi.dev/api/people`)
      setCharacters(response.data.results)
    }
    getCharacters()
  },[characters])

  return (
    <div className="App"> 
    <Nav />
    
    <Routes>
      <Route exact path="/Characters" element={<Characters characters={characters}/>}/>
      <Route exact path="/StarshipsList" element={<StarshipsList starships={starships}/>}/>
      <Route exact path="/Planets" element={<Planets planets={planets}/>}/>
    </Routes>
    </div>
  );
}

export default App;
