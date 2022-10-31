export default function Characters ({characters}) {
  if (!characters) {
    return <h2>Please Standby....Transferring Starship Data</h2>
  } else {
    return (
      <div className="list">
        {
          characters.map((char) => (
            <div key={char.name} className='card'>
              <div className='cardTitle'>{char.name}</div>
              <div>Gender:</div><div>{char.gender}</div>
              <div>Birth Year:</div><div>{char.birth_year}</div>
              <div>Height:</div><div>{char.height}</div>
              <div>Mass:</div><div>{char.mass}</div>
            </div>
          ))
        }
      </div>
    )
  }
}