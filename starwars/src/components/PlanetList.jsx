export default function PlanetList(props){
  return(

    <section>
    <h2>List of Planets</h2>
    {
      (props.planets.length) ?
      <div className="flex"> 
      {
        props.planets.map((planet,index)=>(
          <div key={index}>
            <h3>{planet.name}</h3>
            <p><strong>Climate:</strong> {planet.climate}</p>
            <p><strong>Terrain:</strong> {planet.terrain}</p>
            {
            (planet.population==="unknown") ? <p><strong>Population:</strong> No population data</p>: <p><strong>Population:</strong> {planet.population} beings</p>
            }
            <p><strong>Rotation Period:</strong> {planet.rotation_period} {planet.name} hours</p>
            <p><strong>Orbital Period:</strong> {planet.orbital_period} {planet.name} days</p>
          </div>
        ))
      }

    </div> :
    <div className="loading">
    <h4>Loading Planets</h4>
    <div className="spinner"></div>
    </div>
    }
    
    </section>
  )
}