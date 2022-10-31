import { NavLink } from "react-router-dom";

export default function Nav(){
  return (
    <nav>
    <ul>
      <li><NavLink to="/" exact={true} end>Home</NavLink></li>
      <li><NavLink to="/starships">Starships</NavLink></li>
      <li><NavLink to="/planets">Planets</NavLink></li>
      <li><NavLink to="/people">People</NavLink></li>
    
    
    
    
    </ul>
    </nav>
  )
}