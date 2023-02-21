const PlanetsList = (props) => {
  return (
    <div className="grid">
      {props.planets.map((planet) => (
        <div key={planet.created} className="card">
          <p className="main-data">
            <span>name:</span> {planet.name}
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
      ))}
    </div>
  );
};

export default PlanetsList;
