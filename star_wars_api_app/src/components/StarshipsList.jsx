import React from 'react'

function StarshipsList(props) {
  return (
    <div className="grid">
        {
            props.starships.map((starship)=>(
                <div key={starship.model} className="card">
                    <h3>Starship Name: {starship.name}</h3>
                    <h4>Starship Class: {starship.starship_class}</h4>
                    <h4>Length: {starship.length}</h4>
                    <h4>Crew Capacity: {starship.crew}</h4>
                </div>
            ))
        }
    </div>
  )
}

export default StarshipsList