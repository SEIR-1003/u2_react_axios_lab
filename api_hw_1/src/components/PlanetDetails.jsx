import { useState, useEffect} from "react"
import { useParams, Link } from 'react-router-dom'

const PlanetDetails = (props) => {
    const [planet, setPlanet] = useState('') // Should be null to start and later becomes an object with the selected ship.
    
    let { id } = useParams()
   console.log(id)
    useEffect(() => {
    let selectedPlanet = props.planets.find(
      (planet) => planet.name === id
    )
    setPlanet(selectedPlanet)
  }, [props.planets, id])



  // using ternary as a guard operator
  // break smoothly
  return planet ? (
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
          <h1>{planet.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>TERRAIN: {planet.terrain}</h3>
          <h3>DIAMETER: {planet.diameter}</h3>
        </div>
      </div>
      <Link to="/planets"><button>Planet</button></Link>
    </div>
  ) : (
    <h1>Planet detail not found!</h1>
  );
};

export default PlanetDetails;
