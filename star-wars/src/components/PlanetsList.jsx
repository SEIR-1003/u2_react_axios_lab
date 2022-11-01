
export default function PlanetsList (props) {
    return (
        (props.planets) ? 
        <div className="planets-list">
            <h2>Planets</h2>
            <div className="list">
            {props.planets.map((planet) => (
                <div key={planet.name} className='card'>
                    <h2>{planet.name}</h2>
                    <p>Climate: {planet.climate}</p>
                    <p>Pop: {planet.population}</p>
                </div>
            ))}
            </div>
        </div>
        :
        <h2 className="loading">Loading...</h2>
    )
}