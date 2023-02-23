import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const StarshipPage = (props) => {
  const [starShip, setStarShip] = useState("");
  let { id } = useParams();

  useEffect(() => {
    let selectedStarShip = props.starships[id];
    setStarShip(selectedStarShip);
    console.log(starShip);
  }, []);

  return starShip ? (
    <div className="details-grid">
      <div className="details-card">
        <p className="main-data">
          <span>starship name:</span> {starShip.name}
        </p>
        <p className="sub-data">
          <span>model:</span> {starShip.model}
        </p>
        <p className="sub-data">
          <span>manufacturer:</span> {starShip.manufacturer}
        </p>
        <p className="sub-data">
          <span>cost in credits:</span> {starShip.cost_in_credits}
        </p>
        <p className="sub-data">
          <span>length:</span> {starShip.length}
        </p>
        <p className="sub-data">
          <span>atmosphering speed(max):</span>{" "}
          {starShip.max_atmosphering_speed}
        </p>
        <p className="sub-data">
          <span>crew:</span> {starShip.crew}
        </p>
        <p className="sub-data">
          <span>passengers:</span> {starShip.passengers}
        </p>
        <p className="sub-data">
          <span>cargo capacity:</span> {starShip.cargo_capacity}
        </p>
        <p className="sub-data">
          <span>consumables:</span> {starShip.consumables}
        </p>
        <p className="sub-data">
          <span>starship class:</span> {starShip.starship_class}
        </p>
        <p className="sub-data">
          <span>pilots:</span> {starShip.pilots}
        </p>
        <p className="sub-data">
          <span>films:</span> {starShip.films}
        </p>
      </div>
      <div>
        <button>
          <Link to="/starships">Back to Starships</Link>
        </button>
      </div>
    </div>
  ) : (
    <h1>Still loading...</h1>
  );
};

export default StarshipPage;
