import { useNavigate } from 'react-router-dom'

export default function Starships ({starships}) {

    let navigate = useNavigate()

    const showStarship = (starship) => {
      navigate(`${starship.name}`)
    }

    if (!starships) {
      return <h2>Please Standby....Transferring Starship Data</h2>
    } else {
      return (
        <div className="list">
          {
            starships.map((starship) => (
              <div key={starship.name} className='card' onClick={() => showStarship(starship)}>
                <div className='cardTitle'>{starship.name}</div>
                <div>Model:</div><div>{starship.model}</div>
                <div>Manufacturer:</div><div>{starship.manufacturer}</div>
                <div>Crew:</div><div>{starship.crew}</div>
                <div>HyperDrive Rating:</div><div>{starship.hyperdrive_rating}</div>
              </div>
            ))
          }
        </div>
      )
    }
    
}