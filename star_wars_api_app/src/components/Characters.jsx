import React from 'react'
import { useNavigate } from 'react-router-dom'

function Characters(props) {

  let navigate = useNavigate()

  const showCharacter = (index) => {
    navigate(`${index}`)
  }
  return (
    <div className="grid">
        {
            props.characters.map((character,index)=>(
                <div key={index} className="card" onClick={()=> showCharacter(index)}>
                    <h3>Name: {character.name}</h3>
                    
                </div>
            ))
        }
    </div>
  )
}

export default Characters