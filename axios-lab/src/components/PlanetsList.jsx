export default function PlanetsList (props) {
    if (!props.planets) {
       return <h2>Loading please wait.</h2>
    } else {
       return (
           <div className="grid">
               {
                   props.planets.map((planet) => (
                       <div  className="planets-container">
                           <li key={planet.id} className="planets">
                           <h1>Name: {planet.name}</h1>
                           <h3>Rotation Period: {planet.rotation_period}</h3>
                           <h3>Orbital Period: {planet.orbital_period}</h3>
                           <h3>Climate: {planet.climat}</h3>
                           <h4>Diameter: {planet.diameter}</h4>
                           </li>
                           </div>
                   ))
               }
           </div>
       )
   }
}