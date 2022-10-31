import React from 'react';
import {Link} from 'react-router-dom'

function Nav(props) {
    return (
        <nav>
        <ul>
          <li><Link to="/StarshipsList" className="link"> Starships</Link></li>
          <li><Link to="/PlanetList" className="link">Planets</Link></li>
          <li><Link to="/Characters" className="link">Characters</Link></li>
        </ul>
      </nav>
    );
}

export default Nav;