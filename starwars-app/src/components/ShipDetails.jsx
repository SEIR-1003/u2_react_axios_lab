import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../globals";

export default function ShipDetails () {

let {name} = useParams()
console.log(name)
const [shipId, setShipId] = useState('')

useEffect(() => {
  const getShips = async () => {
    const response = await axios.get(`${BASE_URL}`)
    console.log(response.data.results)
    setShipId(response.data.results)
  
  let selectedShip = response.data.results.find(
    shipId => shipId.name === name
  )
    setShipId(selectedShip)

    console.log(selectedShip)
  }
  getShips()
  // make sure to add the brackets otherwise it loops infintely
}, [])


  return  shipId ?  (
    <div className="ship-details">
    <h1>{shipId.name}</h1>
    <h2> manufacturer: {shipId.manufacturer}</h2>
    <h2> hyperdrive Rating: {shipId.hyperdrive_rating} </h2>
    <h2> M.A.S: {shipId.max_atmosphering_speed}</h2>
    </div>
  ): null;
}
