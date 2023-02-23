import { useState, useEffect} from "react"
import { useParams, Link } from 'react-router-dom'

const VehicleDetails = (props) => {
    const [vehicle, setvehicle] = useState('') // Should be null to start and later becomes an object with the selected ship.
    
    let { id } = useParams()
   console.log(id)
    useEffect(() => {
    let selectedVehicle = props.vehicles.find(
      (vehicle) => vehicle.name === id
    )
    setvehicle(selectedVehicle)
  }, [props.vehicles, id])



  // using ternary as a guard operator
  // break smoothly
  return vehicle ? (
    <div className="detail">
      <div className="detail-header">
        <div
          style={{
            minWidth: "30em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{vehicle.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>MODEL: {vehicle.model}</h3>
          <h3>MANUFACTURER: {vehicle.manufacturer}</h3>
        </div>
      </div>
      <Link to="/vehicles"><button>Vehicles</button></Link>
    </div>
  ) : (
    <h1>vehicle detail not found!</h1>
  );
};

export default VehicleDetails;
