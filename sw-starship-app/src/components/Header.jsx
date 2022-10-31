import { NavLink } from 'react-router-dom'

export default function Header () {
  return (
    <header>
      <h1 className='title'>Starwars API</h1>
      <div className="nav-bar">
        <NavLink to="/" className="link" end>
          <h2>Home</h2>
        </NavLink>
        <NavLink to="/starships" className="link">
          <h2>Starships</h2>
        </NavLink>
        <NavLink to="/characters" className="link">
          <h2>Characters</h2>
        </NavLink>
        <NavLink to="/planets" className="link">
          <h2>Planets</h2>
        </NavLink>
      </div>
    </header>
  )
}