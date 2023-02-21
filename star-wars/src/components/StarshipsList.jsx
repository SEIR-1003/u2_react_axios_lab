const StarshipsList = (props) => {
  return (
    <div className="grid">
      {props.starships.map((starship) => (
        <div key={starship.created} className="card">
          <p className="main-data">
            <span>name:</span> {starship.name}
          </p>
          <p className="sub-data">
            <span>model:</span> {starship.model}
          </p>
          <p className="sub-data">
            <span>manufacturer:</span> {starship.manufacturer}
          </p>
          <p className="sub-data">
            <span>passengers:</span> {starship.passengers}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StarshipsList;
