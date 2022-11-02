import React from 'react'
import { NavLink } from 'react-router-dom'
import {Link} from 'react-router-dom'

const Nav = () => {
    
    return (
        <header>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Starships">Ship Catalog</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Nav