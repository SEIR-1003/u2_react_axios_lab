import { useNavigate } from "react-router-dom";

const VehiclesList = (props) => {
  let navigate = useNavigate();
  const showVehicle = (index) => {
    navigate(`${index}`);
  };
  return (
    <div className="grid">
      {props.vehicles.map((vehicle, index) => (
        <div
          key={vehicle.created}
          className="card"
          onClick={() => showVehicle(index)}
        >
          <p className="main-data">
            <span>name:</span> {vehicle.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default VehiclesList;
