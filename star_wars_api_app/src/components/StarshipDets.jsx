import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function StarshipDets(props) {

    let { index } = useParams()
    const [starship, setStarship] = useState('')

    useEffect(()=>{
        let selectedStarship = props.starships[index];
        setStarship(selectedStarship)
    },[props.starships, index])
  return (
    <div className="charInfo">
        <h1>{starship.name}</h1>
            <h4>Height: {starship.height} cm</h4>
            <h4>Skin/Armor Color: {starship.skin_color}</h4>
            <h4>Homeworld: {starship.homeworld}</h4>
            <h4>Weight: {starship.mass} kilos</h4>
    </div>
  )
}

export default StarshipDets