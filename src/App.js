import logo from './logo.svg';
import './App.css'
import axios from 'axios'
import StarshipsList from './components/StarshipsList'
import { useState, useEffect } from 'react';
import {Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Planets from './components/Planets'
import Characters from './components/Characters'
function App() {
  const [apiSs, setApiSs]=useState([])
  useEffect(()=>{
  const getStarship = async()=>{
    const response = await axios.get("https://swapi.dev/api/starships")
    setApiSs(response.data.results)
  }
getStarship()
  },[])
  
  const [apiPl, setApiPl]=useState([])
  useEffect(()=>{
  const getPlanets = async()=>{
    const response = await axios.get("https://swapi.dev/api/planets")
    setApiPl(response.data.results)
  }
getPlanets()
  },[])

  const [apiCh, setApiCh]=useState([])
  useEffect(()=>{
  const getCharacter = async()=>{
    const response = await axios.get("https://swapi.dev/api/people")
    setApiCh(response.data.results)
  }
getCharacter()
  },[])
  
  return (
    <div className="App">
      <Nav/>
      <div className='pages'>
      <Routes>
        <Route  exact path='/Starshipslist' 
                  element={<StarshipsList apiSs = {apiSs}/>}/>
        <Route  exact path='/Planets' 
                  element={<Planets apiPl = {apiPl}/>}/>
        <Route  exact path='/Characters' 
                  element={<Characters apiCh = {apiCh}/>}/>
        
      </Routes>
      </div>
    </div>
  );
}

export default App;
