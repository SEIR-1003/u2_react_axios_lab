import React from 'react'
import { useNavigate } from 'react-router-dom'

function StarshipsList(props) {

  let navigate = useNavigate()

  const showStarship = (index) => {
    navigate(`${index}`)
  }
  return (
    <div className="grid">
        {
            props.starships.map((starship,index)=>(
              <div key={index} className="card" onClick={()=> showStarship(index)}>
                    <h3>Starship Name: {starship.name}</h3>
                </div>
            ))
        }
    </div>
  )
}

export default StarshipsList