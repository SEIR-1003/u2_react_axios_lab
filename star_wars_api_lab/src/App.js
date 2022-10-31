import './App.css';
import axios from 'axios'
import { BASE_URL } from "./global"
import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Main from './components/Main';



const App = () => {
  const [ships, setShips] = useState([])

useEffect(()=>{
  const getShips = async ()=>{
  const response = await axios.get(`${BASE_URL}/starships`)
  console.log(response.data.results)
  setShips(response.data.results)
  }

  getShips()

}, [])

const [people, setPeople] = useState([])

useEffect(()=>{
const getPeople = async ()=>{
const response = await axios.get(`${BASE_URL}/people`)
console.log(response.data.results)
setPeople(response.data.results)
}

getPeople()

}, [])

const [planet, setPlanet] = useState([])

useEffect(()=>{
const getPlanet = async ()=>{
const response = await axios.get(`${BASE_URL}/planets`)
console.log(response.data.results)
setPlanet(response.data.results)
}

getPlanet()

}, [])



return (
  <div className='main'>
    <Nav/>
    <Main ships={ships}
          people={people}
          planet={planet}/>
  </div>
)
}

export default App;
