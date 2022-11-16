import './App.css';
import StarshipList from '../src/components/StarshipList';
import { Route, Routes } from 'react-router-dom';
import Planets from './components/Planets';
import Films from './components/Films';
import People from './components/People';
import Vehicles from './components/Vehicles';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Starship from './components/Starship';



function App() {

  const [starShips, setStarShips] = useState(null)
  const [planets, setPlanets] = useState(null)
  // const [vehicles, setVehicles] = useState(null)
  // const [films, setFilms] = useState(null)
  // const [people, setPeople] = useState(null)
  
useEffect(() =>{
  const getStarships = async() => {
    const arr = await axios.get('https://swapi.dev/api/starships')
    setStarShips(arr.data.results)
    console.log(starShips)
  }
  getStarships()
}, [])

  return (
    <div className="App">
  
    <Routes>
      <Route path="/planets" element={<Planets planets={planets}/>}/>
      {/* <Route path="/vehicles" element={<Vehicles vehicles={vehicles}/>}/>
      <Route path="/films" element={<Films films={films}/>}/>
      <Route path="/people" element={<People people={people}/>}/> */}
      <Route path='/starships' element={<StarshipList starShips={starShips}/>}/>
      <Route path='/starships/:name' element ={<Starship starShips={starShips}/>}/>
    </Routes>
    </div>
  );
}


export default App;
