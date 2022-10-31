import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from './globals'
import Landing from './components/Landing';
import Header from './components/Header';



function App() {
  const [starShips, setStarShips] = useState([])

  useEffect(() => {
    const getStarShips = async () => {
      const response = await axios.get(`${BASE_URL}starships`)
      console.log(response.data.results)
      setStarShips(response.data.results)
    }
    getStarShips()
  }, [])




  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get(`${BASE_URL}people`)
      console.log(response.data.results)
      setCharacters(response.data.results)
    }
    getCharacters()
  }, [])



  const [planets, setPlanets] = useState([])

  useEffect(() => {
    const getPlanets = async () => {
      const response = await axios.get(`${BASE_URL}planets`)
      console.log(response.data.results)
      setPlanets(response.data.results)
    }
    getPlanets()
  }, [])



  
  return (
    <div className="App">
        <Header />
        <Landing planets={planets}
                  characters={characters}
                  starShips={starShips}/> 

        {/* <StarshipsList starShips={starShips}/>
        <CharacterList characters={characters}/>
        <PlanetList planets={planets}/>  */}
    </div>
  );
}



export default App;
