import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-links'>
        <Link to='/Films'>Films</Link>
          {/* <li> */}
            <Link to='/StarshipsList'>StarshipsList</Link>
          {/* </li>
          <li> */}
            <Link to='/planets'>Planets</Link>
          {/* </li>
        </ul> */}
      </div>
    </nav>
  )
}

