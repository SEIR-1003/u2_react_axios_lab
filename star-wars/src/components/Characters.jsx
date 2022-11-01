import React from "react"
import { useState, useEffect } from 'react'
import{ BASE_URL } from '../globals'
import axios from "axios"

// function Characters()  {

    const Characters = () => {
        const [characters, setCharacters] = useState([])
        
        useEffect(()=>{
          const getCharacters = async () => {
            const response = await axios.get(`${BASE_URL}/people`)
            console.log(response.data.results)
            getCharacters(response.data.results)
          }
          getCharacters()
        }, [])
        
        if(!characters) {
            return <h2> Loading Please Wait </h2>
        } else {
         return (
            <div className="display">
                {
                    characters.map((character)=>(
                        <div key={character.name}
                                className="card">
                            
                            <h3> {character.name}</h3>
                            
                        </div>
                    ))
                }
    
            </div>
        )
        
    
    // return (
    //     <div className="grid">
    //         {
    //             props.Characters.map((character)=>(
    //                 <div className="card" key={character.model}>
    //                     <h3>Name: {character.name}</h3>
    //                     <h4>Height: {character.height} cm</h4>
    //                     <h4>Skin/Armor Color: {character.skin_Color}</h4>
    //                 </div>
    //             ))
    //         }
    //     </div>
    // )}
}
}
export default Characters