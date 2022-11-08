import { Link } from 'react-router-dom'
import React from 'react'

export default function Nav () {
    return (
        <div className="nav">
    <Link to="/StarshipsList">
        <h2 className="nav-ship">Starships</h2>
    </Link>

    <Link to="/PlanetsList">
        <h2 className="nav-planet">Planets</h2>
    </Link>

    <Link to="/CharactersList">
        <h2 className="nav-people">Characters</h2>
    </Link>

    </div>
    )
}

