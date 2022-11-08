
import './App.css';
import axios from 'axios'
import { BASE_URL } from './Landing'
import { useState, useEffect} from 'react'
import StarshipsList from './components/StarshipsList'
import PlanetsList from './components/PlanetsList'
import CharactersList from './components/CharactersList'
import StarshipPage from './components/StarshipPage'
import { Route, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Nav from './components/Nav'



  const App = () => {
    const [starships, setStarships] = useState([])
    const [selectedStarships, setSelectedStarships] = useState(null)

    const [planets, setPlanets] = useState([])
    const [selectedPlanets, setSelectedPlanets] = useState(null)

    const [peoples, setPeoples] = useState([])
    const [selectedPeoples, setSelectedPeoples] = useState(null)




  
  
    useEffect(() => {
      const getStarships= async () => {
        const response = await axios.get(`${BASE_URL}`)
        console.log(response.data.results) 
        setStarships(response.data.results)
    
      }

      const getPlanets= async () => {
        const response = await axios.get(`https://swapi.dev/api/planets`)
        console.log(response.data.results) 
        setPlanets(response.data.results)

      }  

      const getPeoples= async () => {
        const response = await axios.get(`https://swapi.dev/api/people`)
        console.log(response.data.results) 
        setPeoples(response.data.results)

      }  


      



      getStarships()
      getPlanets()
      getPeoples()
    }, [])



  return (
    <div className="App">
      <header><h1>STARWARS: USE EFFECT</h1>
      
          <Nav/>
          </header>

      <Routes>

<Route exact path="/CharactersList" element={<CharactersList peoples={peoples}/>} />

<Route exact path="/PlanetsList" element={<PlanetsList planets={planets}/>} />

<Route exact path="/StarshipsList" element={<StarshipsList starships={starships} />} />

<Route path="/starshippage/:id" element={ <StarshipPage starships={starships} />} /> 

</Routes>

    {/* <StarshipsList starships={starships}/>
    <PlanetsList planets={planets}/>
    <CharactersList peoples={peoples}/> */}
    </div>
  );
}

export default App;
