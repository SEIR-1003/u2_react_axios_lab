import './App.css';
import {Routes, Route} from 'react-router-dom'
import StarshipsList from './components/StarshipsList';
import axios from 'axios'
import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import PlanetList from './components/PlanetList';
import Characters from './components/Characters';


function App() {
const [starships, setStarships] = useState([]);
const [planets, setPlanets] = useState([]);
const [characters, setCharacters]=useState([]);


useEffect(() => {
    const getStarships = async () => {
    const response = await axios.get("https://swapi.dev/api/starships")
    setStarships(response.data.results)
  }
  const getPlanets = async () => {
    const response = await axios.get("https://swapi.dev/api/planets/")
    setPlanets(response.data.results)
  }
  const getCharacters = async () => {
    const response = await axios.get("https://swapi.dev/api/people/")
    setCharacters(response.data.results)
  }
  
  getStarships();
  getPlanets();
  getCharacters();
},[])

  return (
    <div className="App">
      <Nav/>
      <div className='routes-container'>
        <Routes>
          <Route exact path="/StarshipsList" element={<StarshipsList starships = {starships}/>}/>
          <Route exact path="/PlanetList" element={<PlanetList planets = {planets}/>}/>
          <Route exact path="/Characters" element={<Characters characters = {characters}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

