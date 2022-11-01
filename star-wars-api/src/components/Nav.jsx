import { Link } from 'react-router-dom'
import '../App.css'

export default function Nav () {


    return (
        <div className="nav">

            <div className="nav-home">
                <Link to="/">
                    <h1>Home</h1>
                </Link>
            </div>

            <div className="nav-links">
                <Link to="/starships">
                    <h2>Starships</h2>
                </Link>

                <Link to="/planets">
                    <h2>Planets</h2>
                </Link>

                <Link to="/people">
                    <h2>People</h2>
                </Link>
            </div>

        </div>
    )
}