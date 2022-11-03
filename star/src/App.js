import ShipList from './components/Starships'
import './App.css'
import Nav from "./components/Nav"
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import { useState, useEffect } from 'react'
import { BASE_URL } from './Globals'
import axios from 'axios'
 

const App = () => {

  const [ships, setStarships] = useState ([])

  useEffect(() =>{
    const getStarships = async () => {
        const response = await axios.get(`${BASE_URL}/starships`)
        setStarships(response.data.results)
    }
    getStarships()
  
    }, [])

  return (
      <div>
        <ShipList ships={ships} />
      </div>

  );
}

export default App

