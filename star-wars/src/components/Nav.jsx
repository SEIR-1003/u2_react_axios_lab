import { Link } from "react-router-dom"

export default function Nav () {
    return (
        <div className="nav">
            <Link className="link" to="/">
                <h2>Home</h2>
            </Link>
            <Link className="link" to="/starships">
                <h2>Starships</h2>
            </Link>
            <Link className="link" to="/planets">
                <h2>Planets</h2>
            </Link>
            <Link className="link" to="/characters">
                <h2>Characters</h2>
            </Link>
        </div>
    )
}