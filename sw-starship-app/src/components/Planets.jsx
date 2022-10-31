export default function Planets ({planets}) {
  if (!planets) {
    return <h2>Please Standby....Transferring Starship Data</h2>
  } else {
    return (
      <div className="list">
        {
          planets.map((planet) => (
            <div key={planet.name} className='card'>
              <div className='cardTitle'>{planet.name}</div>
              <div>Terrain:</div><div>{planet.terrain}</div>
              <div>Climate:</div><div>{planet.climate}</div>
              <div>Population:</div><div>{planet.population}</div>
              <div>Gravity:</div><div>{planet.gravity}</div>
            </div>
          ))
        }
      </div>
    )
  }
}