import { Link } from 'react-router-dom'
export default function Nav(){
    return(
        <div className="nav">
            <Link to='/'>
                <h2>Homerino</h2>
            </Link>
            <Link to="/Planets">
                <h2>Large Spheres</h2>
            </Link>

            <Link to='/StarShips'>
                <h2>Flying Ships</h2>
            </Link>

            <Link to='/Characters'>
                <h2>The Goons</h2>
            </Link>

            
      
        </div>
    )
    }