import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {  BASE_URL_PLANETS } from "../globals";

export default function PlanetDetails () {

let {name} = useParams()
console.log(name)
const [planetId, setPlanetId] = useState('')

useEffect(() => {
  const getplanets = async () => {
    const response = await axios.get(`${BASE_URL_PLANETS}`)
    console.log(response.data.results)
    setPlanetId(response.data.results)
  
  let selectedPlanet = response.data.results.find(
    planetId => planetId.name === name
  )
    setPlanetId(selectedPlanet)

    console.log(selectedPlanet)
  }
  getplanets()
  // make sure to add the brackets otherwise it loops infintely
}, [])


  return  planetId ?  (
    <div className="people-details">
    <h1>{planetId.name}</h1>
    <h2> rotation period: {planetId.rotation_period}</h2>
    <h2> climate: {planetId.climate} </h2>
    <h2> gravity: {planetId.gravity}</h2>
    </div>
  ): null;
}
