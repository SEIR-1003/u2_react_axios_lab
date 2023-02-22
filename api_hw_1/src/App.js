import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "./globals";
import Navbar from './components/Navbar'
import Main from "./components/Main";

function App() {

  //starships
  const [starShips, setStarShips] = useState([]);
  //planets
  const [planets, setPlanets] = useState([]);
  //characters
  const [characters, setCharacters] = useState([]);

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

  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Main starShips={starShips} planets={planets} characters={characters}/>
      </header>
    </div>
  );
}

export default App;
