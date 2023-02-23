const SpeciesList = (props) => {
  return (
    <div className="grid">
      {props.species.map((specie) => (
        <div key={specie.created} className="card">
          <p className="main-data">
            <span>name:</span> {specie.name}
          </p>
          <p className="sub-data">
            <span>classification:</span> {specie.classification}
          </p>
          <p className="sub-data">
            <span>average life span:</span> {specie.average_lifespan} years
          </p>
          <p className="sub-data">
            <span>language:</span> {specie.language}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SpeciesList;
