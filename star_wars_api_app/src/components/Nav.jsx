import { Link } from 'react-router-dom'
import React from 'react'

function Nav() {
  return (
    <div className="navbar">
        <Link to="/Characters">
            <h2>Characters</h2>
        </Link>
        <Link to="/StarshipsList">
            <h2>Starships</h2>
        </Link>
        <Link to="/Planets">
            <h2>Planets</h2>
        </Link>
        

    </div>
  )
}

export default Nav