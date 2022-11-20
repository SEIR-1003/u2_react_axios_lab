import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/Starshipslist">
        <h2>Starships</h2>
      </Link>

      <Link to="/planets">
        <h2>Planets</h2>
      </Link>

      <Link to="/characters">
        <h2>Characters</h2>
      </Link>

      <Link to="/films">
        <h2>Films</h2>
      </Link>
    </div>
  );
}