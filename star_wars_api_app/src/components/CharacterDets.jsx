import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function CharacterDets(props) {

    let { index } = useParams()
    const [character, setCharacter] = useState('')

    useEffect(()=>{
        let selectedCharacter = props.characters[index];
        setCharacter(selectedCharacter)
    },[props.characters, index])
  return (
    <div className="charInfo">
        <h1>{character.name}</h1>
            <h4>Height: {character.height} cm</h4>
            <h4>Skin/Armor Color: {character.skin_color}</h4>
            <h4>Homeworld: {character.homeworld}</h4>
            <h4>Weight: {character.mass} kilos</h4>
    </div>
  )
}

export default CharacterDets