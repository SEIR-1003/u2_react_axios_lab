import { Link } from 'react-router-dom'

export default function Navbar() {
    return(
        <div>
            <nav>
                <ul>
                    <li><Link id="link" to="/">Home</Link></li>
                    <li><Link id="link" to="/starshipslist">StarshipsList</Link></li>
                    <li><Link id="link" to="/planets">Planets</Link></li>
                    <li><Link id="link" to="/characters">Characters</Link></li>
                </ul>
            </nav>
        </div>

    )
}
