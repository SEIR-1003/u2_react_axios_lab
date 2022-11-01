export default function Planets (props) {

    return (
        <div className="grid">
                    {
                    props.planets.map((planet) => (
                        <div 
                            key={planet.name}
                            className="card">

                                <h3>{planet.name}</h3>
                                <p>Climate: {planet.climate}</p>
                                <p>Terrain: {planet.terrain}</p>
                                <p>Gravity: {planet.gravity}</p>
                                <p>Population: {planet.population}</p>

                        </div>
                    ))
                }
        </div>
    )
}