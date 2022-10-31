export default function Planets(props){
    return(
        <div className="grid">
        {
            props.apiPl.map((pp)=>(
                <div key={pp.name} className="card">
                    <h2>{pp.name}</h2>
                    <ul className="stats">Details
                        <div>Rotation Period: {pp.rotation_period}</div>
                        <div>Orbital Period:{pp.orbital_period} </div>
                        <div>Diameter: {pp.diameter}</div>
                        <div>Climate: {pp.climate}</div>
                        <div>Gravity: {pp.gravity}</div>
                        <div>Terrain: {pp.terrain}</div>
                        <div>Ocean: {pp.surface_water}</div>
                        <div>Population: {pp.population}</div>
                    </ul>
                    <div>Residents: </div>
                    <hr/>
                </div>
            ))

        }
        </div>
    )
}