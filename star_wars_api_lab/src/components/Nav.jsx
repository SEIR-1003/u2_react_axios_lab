import { Link } from 'react-router-dom'
import StarshipList from './starship'
import PlanetList from './planets'
import CharacterList from './characters'


export default function LandingPage () {

  return (
    <div className="nav">
    <Link to="/StarshipList">
    <h2>Starships</h2>
    </Link>

      <Link to="/PeopleList">
      <h2>Characters</h2>
      </Link>

    <Link to="/PlanetList">
    <h2>Planets</h2>
    </Link>
    </div>
  )
}


