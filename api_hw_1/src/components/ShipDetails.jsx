import { useState, useEffect} from "react"
import { useParams, Link } from 'react-router-dom'

const ShipDetails = (props) => {
    const [ship, setShip] = useState('') // Should be null to start and later becomes an object with the selected ship.
    
    let { id } = useParams()
   
    useEffect(() => {
    let selectedShip = props.starShips.find(
      (ship) => ship.name === id
    )
    setShip(selectedShip)
  }, [props.starShips, id])

  //[props.ships, id]) tells to refresh
  //whever the number of boat chages or id change

  // using ternary as a guard operator
  // break smoothly
  return ship ? (
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
          <h1>{ship.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>MODEL: {ship.model}</h3>
          <h3>MANUFACTURER: {ship.manufacturer}</h3>
        </div>
      </div>
      <Link to="/starshipslist"><button>Starships List</button></Link>
    </div>
  ) : (
    <h1>Ship detail not found!</h1>
  );
};

export default ShipDetails;
