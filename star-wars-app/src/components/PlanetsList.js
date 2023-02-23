import { useNavigate } from "react-router-dom"

export default function Planets(props) {

    let navigate = useNavigate()

    const showPlanet = (index) => {
        navigate(`${index}`)
    }

    return(
        <div className="grid">
            {
                props.planets.map((planet, index) => (
                    <div key={planet.name} className="card" onClick={() => showPlanet(index)}>
                        <h2><span>Planet Name</span><br />{ planet.name }</h2>
                        {/* <h3><span>Rotation Period</span><br />{ planet.rotation_period }</h3>
                        <h3><span>Orbital Period</span><br />{ planet.orbital_period }</h3>
                        <h3><span>Climate</span><br />{ planet.climate }</h3>
                        <h3><span>Gravity</span><br />{ planet.gravity }</h3>
                        <h3><span>Terrain</span><br />{ planet.terrain }</h3>
                        <h3><span>Surface Water</span><br />{ planet.surface_water }</h3>
                        <h3><span>Population</span><br />{ planet.population }</h3> */}
                    </div>
                ))
            }
        </div>
    )
}