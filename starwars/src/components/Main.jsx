import { Route, Routes } from 'react-router-dom'
import Characters from './Characters'
import Planets from './Planets'
import StarShips from './StarShips'
import Home from './Home'
import axios from 'axios'
import { useState, useEffect} from 'react'
import { BASE_URL } from '../global'

export default function Main(){
    const [starShips,setstarShips] = useState([])
const [planets,setPlanets] = useState([])
const [characters, setCharacters] = useState([])
const userName = 'Neighborino'


  useEffect(()=>{
    const getStarships= async ()=>{
      const response = await axios.get(`${BASE_URL}/starships`)
      setstarShips(response.data.results)
    }
    const getPlanets= async ()=>{
      const response = await axios.get(`${BASE_URL}/planets`)
      setPlanets(response.data.results)
    }
    const getCharacters= async ()=>{
      const response = await axios.get(`${BASE_URL}/people`)
      setCharacters(response.data.results)
    }
  getPlanets()
  getStarships()
  getCharacters()
  },[])

    return (
        <div className="main">
            <Routes>
                <Route exact path = '/' element={<Home userName={userName}/>}></Route> 
            <Route exact path = '/characters' element={<Characters characters={characters}/>}/>
            <Route exact path = '/Planets' element={<Planets planets={planets}/>}/>
            <Route exact path ='/starShips' element={<StarShips starShips={starShips}/>}/>

             </Routes>
         

        </div>

    )
}