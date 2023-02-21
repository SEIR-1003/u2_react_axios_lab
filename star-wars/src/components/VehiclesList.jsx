const VehiclesList = (props) => {
  return (
    <div className="grid">
      {props.vehicles.map((vehicle) => (
        <div key={vehicle.created} className="card">
          <p className="main-data">
            <span>name:</span> {vehicle.name}
          </p>
          <p className="sub-data">
            <span>model:</span> {vehicle.model}
          </p>
          <p className="sub-data">
            <span>crew:</span> {vehicle.crew}
          </p>
          <p className="sub-data">
            <span>cargo capacity:</span> {vehicle.capacity}
          </p>
        </div>
      ))}
    </div>
  );
};

export default VehiclesList;
