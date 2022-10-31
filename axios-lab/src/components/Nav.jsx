import { Link } from 'react-router-dom' 



export default function Nav () {
    return(
        <div className="nav">
             <Link to="/">
            <h2>Back Home</h2>
            </Link>
            <Link to="/films">
                <h2>List of Films</h2>
            </Link>
            <Link to="/people">
                <h2>List of People</h2>
            </Link>
            <Link to="/planets">
                <h2>List of Planets</h2>
            </Link>
            <Link to="Species">
                <h2>List of Species</h2>
            </Link>
            <Link to="starships">
                <h2>List of Starships</h2>
            </Link>
            <Link to="vehicles">
                <h2>List of Vehicles</h2>
            </Link>
           
        </div>
    )
}