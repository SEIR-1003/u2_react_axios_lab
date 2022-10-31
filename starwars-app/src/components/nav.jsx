import { Link } from "react-router-dom"

export default function Nav() {
    return(
        <ul className="nav-bar">
            <Link to='/Star-ships'>
                <h2> ships  </h2>
            </Link>

            <Link to='/Planets'>
            <h2> Planets </h2>
            </Link>

            <Link to='/People'>
                <h2> People </h2>
            </Link>

            <Link to="/">
            <h2> Home </h2>
            </Link>

        </ul>
    )
}