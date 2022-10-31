import React from 'react'

function Planets(props) {
  return (
    <div className="grid">
        {
            props.planets.map((planet)=>(
                <div key={planet.model} className="card">
                    <h3>Planet Name: {planet.name}</h3>
                    <h4>Climate: {planet.climate}</h4>
                    <h4>Population:{planet.population}</h4>
                    <h4>Terrain: {planet.terrain}</h4>
                </div>
            ))
        }
    </div>
  )
}

export default Planets