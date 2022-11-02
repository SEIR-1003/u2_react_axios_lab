import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL_PEOPLE } from "../globals";

export default function PeopleDetails () {

let {name} = useParams()
console.log(name)
const [peopleId, setPeopleId] = useState('')

useEffect(() => {
  const getPeople = async () => {
    const response = await axios.get(`${BASE_URL_PEOPLE}`)
    console.log(response.data.results)
    setPeopleId(response.data.results)
  
  let selectedPeople = response.data.results.find(
    peopleId => peopleId.name === name
  )
    setPeopleId(selectedPeople)

    console.log(selectedPeople)
  }
  getPeople()
  // make sure to add the brackets otherwise it loops infintely
}, [])


  return  peopleId ?  (
    <div className="people-details">
    <h1>{peopleId.name}</h1>
    <h2> Height: {peopleId.height}</h2>
    <h2> Mass: {peopleId.mass} </h2>
    <h2> D.O.B: {peopleId.birthyear}</h2>
    </div>
  ): null;
}
