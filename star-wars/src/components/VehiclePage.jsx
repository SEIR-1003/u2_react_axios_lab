import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const VehiclePage = (props) => {
  const [vehicle, setVehicle] = useState("");
  let { id } = useParams();

  useEffect(() => {
    let selectedVehicle = props.vehicles[id];
    setVehicle(selectedVehicle);
  }, []);

  return vehicle ? (
    <div className="details-grid">
      <div className="details-card">
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
      <div>
        <button>
          <Link to="/vehicles">Back to Vehicles</Link>
        </button>
      </div>
    </div>
  ) : (
    <h1>Still loading...</h1>
  );
};

export default VehiclePage;
