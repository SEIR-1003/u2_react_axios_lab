import React from "react"
import { useState, useEffect } from 'react'
import{ BASE_URL } from '../globals'
import axios from "axios"


//function Planets(props)  {
    const Planets = () => {
        const [planets, setPlanets] = useState([])
        
        useEffect(()=>{
          const getPlanets = async () => {
            const response = await axios.get(`${BASE_URL}/planets`)
            console.log(response.data.results)
            setPlanets(response.data.results)
          }
          getPlanets()
        }, [])
        
        if(!planets) {
            return <h2> Loading Please Wait </h2>
        } else {
         return (
            <div className="display">
                {
                    planets.map((planet)=> (
                        <div key={planet.name}
                                className="card">
                            
                            <h3> {planet.name}</h3>
                            
                        </div>
                    ))
                }
    
            </div>
        )
        
    
    // return (
    //     <div className="grid">
    //         {
    //             props.planets.map((planet) => (
    //                 <div className="card" key={planet.model}>
    //                     <h3>Planet Name: {planet.name}</h3>
    //                     <h4>Climate: {planet.climate}</h4>
    //                     <h4>Population: {planet.population}</h4>
    //                     <h4>Terrain: {planet.terroin}</h4>
    //                 </div>
    //             ))
    //         }
    //     </div>
    // )}
}
}

export default Planets