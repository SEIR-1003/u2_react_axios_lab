import axios from "axios"
import { BASE_URL_PLANETS } from "../globals"
import { useState, useEffect } from "react"

export default function Planets() {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        const getPlanets = async () => {
            const response = await axios.get(`${BASE_URL_PLANETS}`)
            console.log(response.data.results)
            setPlanets(response.data.results)
        }
        getPlanets()
    }, [])

    return (
        <div className="planets-main">
        <div className="component-header">
            <h1>Planets</h1>
        </div>

        <div className="grid">
        {
            planets.map((planet) => (
                <ul className="list">
                    <h1> {planet.name} </h1>
                    <h2> climate: {planet.climate} </h2>
                    <h2> rotation period: {planet.rotation_period} </h2>
                    <h2>orbital period: {planet.orbital_period} </h2>
                    <h2>planet diameter: {planet.diameter} </h2>
                </ul>
            ))


        }
        </div>

        </div>
        )
}