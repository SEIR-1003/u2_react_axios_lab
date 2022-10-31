import React from 'react'

function Characters(props) {
  return (
    <div className="grid">
        {
            props.characters.map((character)=>(
                <div key={character.model} className="card">
                    <h3>Name: {character.name}</h3>
                    <h4>Height: {character.height} cm</h4>
                    <h4>Skin/Armor Color: {character.skin_color}</h4>
                    <h4>Homeworld: {character.homeworld}</h4>
                </div>
            ))
        }
    </div>
  )
}

export default Characters