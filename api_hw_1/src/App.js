import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, BASE_URL_VEHICLE } from "./globals";
import Navbar from './components/Navbar'
import Main from "./components/Main";

function App() {

  //starships
  const [starShips, setStarShips] = useState([]);
  //planets
  const [planets, setPlanets] = useState([]);
  //characters
  const [characters, setCharacters] = useState([]);

  //vehicles
  const [vehicles, setVehicles] = useState([]);

  //films
  const [films, setFilms] = useState([]);

  useEffect(() => {
    //starships
    const getStarShips = async () => {
      const response = await axios.get(`${BASE_URL}starships`)
      console.log("STARSHIPS RESPONSE: "+response.data.results)
      setStarShips(response.data.results)
    }
    
    getStarShips()

    //planets
    const getPlanets = async () => {
      const response = await axios.get(`${BASE_URL}planets`)
      console.log("PLANETS RESPONSE: " +response.data.results)
      setPlanets(response.data.results)
    }

    getPlanets()

    //characters
    const getCharacters = async () => {
      const response = await axios.get(`${BASE_URL}people`)
      console.log("CHARACTERS RESPONSE: " +response.data.results)
      setCharacters(response.data.results)
    }

    getCharacters()

     //vehicles
    const getVehicles = async () => {
    const response = await axios.get(`${BASE_URL}vehicles`)
    console.log("VEHICLE RESPONSE: " +response.data.results)
    setVehicles(response.data.results)
  }

  getVehicles()

   //films
   const getFilms = async () => {
    const response = await axios.get(`${BASE_URL}films`)
    console.log("FILMS RESPONSE: " +response.data.results)
    setFilms(response.data.results)
  }

  getFilms()

  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Main starShips={starShips} planets={planets} characters={characters} vehicles={vehicles} films={films}/>
      </header>
    </div>
  );
}

export default App;
