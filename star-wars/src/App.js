import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { BASE_URL } from './globals'

function App() {

  const [starships, setStarships] = useState([])
  const [planets, setPlanets] = useState([])
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getStarships = async () => {
    const response = await axios.get(`${BASE_URL}starships`)
    setStarships(response.data.results)
    }
    getStarships()

    const getPlanets = async () => {
    const response = await axios.get(`${BASE_URL}planets`)
    console.log(response.data.results)
    setPlanets(response.data.results)
    }
    getPlanets()

    const getCharacters = async () => {
    const response = await axios.get(`${BASE_URL}people`)
    setCharacters(response.data.results)
    }
    getCharacters()
  }, [])


  return (
    <div className="App">
      <Header />
      <Main starships={starships} planets={planets} characters={characters}/>
    </div>
  );
}

export default App;
