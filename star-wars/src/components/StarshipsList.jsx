import React from "react"
import { useState, useEffect } from 'react'
import{ BASE_URL } from '../globals'
import axios from "axios"


//function StarshipsList(props)  {
    const StarshipsList = () => {
        const [ships, setShips] = useState([])
        
            useEffect(()=>{
              const getShips = async () => {
                const response = await axios.get(`${BASE_URL}/starships`)
                console.log(response.data.results)
                setShips(response.data.results)
              }
              getShips()
            }, [])
            
            if(!ships) {
                return <h2> Loading Please Wait </h2>
            } else {
             return (
                <div className="display">
                    {
                        ships.map((ship)=>(
                            <div key={ship.name}
                                    className="card">
                                
                                <h3> {ship.name}</h3>
                                
                            </div>
                        ))
                    }
        
                </div>
            )
        
        
            
    // return (
    //     <div className="grid">
    //         {
    //             props.ships.map((ship) => (
    //                 <div className="card" key={ship.model}>
    //                     <h3>Starship Name: {ship.name}</h3>
    //                     <h4>Starship Class: {ship.starship_class}</h4>
    //                     <h4>Crew: {ship.crew}</h4>
    //                     <h4>Max Speed: {ship.max_atmosphering_speed}</h4>
    //                 </div>
    //             ))
    //         }
    //     </div>
    // )}
}
}
export default StarshipsList