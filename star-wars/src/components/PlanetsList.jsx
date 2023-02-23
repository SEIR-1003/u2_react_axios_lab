import { useNavigate } from "react-router-dom";

const PlanetsList = (props) => {
  let navigate = useNavigate();
  const showPlanet = (index) => {
    navigate(`${index}`);
  };
  return (
    <div className="grid">
      {props.planets.map((planet, index) => (
        <div
          key={planet.created}
          className="card"
          onClick={() => showPlanet(index)}
        >
          <p className="main-data">
            <span>name:</span> {planet.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PlanetsList;
