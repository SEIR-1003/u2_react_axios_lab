import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function PlanetPage(props){
    const [planet, setPlanet] = useState('')

    let {index} =  useParams()

    useEffect(() => {
        let selectedPlanet = props.planets[index]
        setPlanet(selectedPlanet)
    }, [props.planets, index])

    return planet ? (
        <div className="details-container">
            <header>
            <Link className="back-button" to="/planets"><span class="material-symbols-outlined">arrow_back</span>Return to Planets List</Link>
            </header>
            <main>
                <h1><span>Planet Name</span><br />{planet.name}</h1>
                <h3><span>Rotation Period</span><br />{planet.rotation_period} hours</h3>
                <h3><span>Orbital Period</span><br />{planet.orbital_period} days</h3>
                <h3><span>Diameter</span><br />{planet.diameter} miles</h3>
                <h3><span>Climate</span><br />{planet.climate}</h3>
                <h3><span>Gravity</span><br />{planet.gravity}</h3>
                <h3><span>Terrain</span><br />{planet.terrain}</h3>
                <h3><span>Surface Water</span><br />{planet.surface_water}%</h3>
                <h3><span>Population</span><br />{planet.population}</h3>
            </main>
        </div>
    ) : <h2>Planet not found</h2>;
}