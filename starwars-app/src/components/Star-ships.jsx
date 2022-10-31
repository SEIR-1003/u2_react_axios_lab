import axios from "axios"
import { BASE_URL } from "../globals"
import { useState, useEffect } from 'react'


export default function StarShipList() {
    const [starships, setStarships] = useState([])

  useEffect(() => {
    const getShips = async () => {
      const response = await axios.get(`${BASE_URL}`)
      console.log(response.data.results)
      setStarships(response.data.results)

    }
    getShips()
    // make sure to add the brackets otherwise it loops infintely
  }, [])

  if(!starships){
    return <h2> please wait loading </h2> 
  } else { 
    return (
        <div className="component-header">
            <h1> star ships </h1>
        <div className="grid">
                {
                    starships.map((starship) => (
                        <ul key={starship.name}
                            className="list">
                        <h1> {starship.name} </h1>
                        <h2> model: {starship.model} </h2>
                        <h2> class: {starship.starship_class} </h2>
                        <h2> man.: {starship.manufacturer}</h2>
                        </ul>
                    )
                    )
                }
        </div>
        </div>
    )
}
}