import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const PlanetPage = (props) => {
  const [planet, setPlanet] = useState("");
  let { id } = useParams();

  useEffect(() => {
    let selectedPlanet = props.planets[id];
    setPlanet(selectedPlanet);
  }, []);

  return planet ? (
    <div className="details-grid">
      <div className="details-card">
        <p className="main-data">
          <span>starship name:</span> {planet.name}
        </p>
        <p className="sub-data">
          <span>climate:</span> {planet.climate}
        </p>
        <p className="sub-data">
          <span>terrain:</span> {planet.terrain}
        </p>
        <p className="sub-data">
          <span>population:</span> {planet.population}
        </p>
      </div>
      <div>
        <button>
          <Link to="/planets">Back to Planets</Link>
        </button>
      </div>
    </div>
  ) : (
    <h1>Still loading...</h1>
  );
};

export default PlanetPage;
