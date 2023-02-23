import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function StarshipPage(props){
    const [starship, setStarship] = useState('')

    let {index} =  useParams()

    useEffect(() => {
        let selectedShip = props.starships[index]
        setStarship(selectedShip)
    }, [props.starships, index])

    return starship ? (
        <div className="details-container">
            <header>
            <Link className="back-button" to="/starships"><span class="material-symbols-outlined">arrow_back</span> Return to Starship List</Link>
            </header>
            <main>
                <h1><span>Starship Name</span><br />{starship.name}</h1>
                <h3><span>Model</span><br />{ starship.model }</h3>
                <h3><span>Manufacturer</span><br />{ starship.manufacturer }</h3>
                <h3><span>Cost In Credits</span><br />${ starship.cost_in_credits }</h3>
                <h3><span>Crew</span><br />{ starship.crew }</h3>
                <h3><span>Passengers</span><br />{ starship.passengers }</h3>
            </main>
        </div>
    ) : <h2>Starship not found</h2>;
}