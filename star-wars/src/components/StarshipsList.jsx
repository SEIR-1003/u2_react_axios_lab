import { useNavigate } from "react-router-dom";

const StarshipsList = (props) => {
  let navigate = useNavigate();
  const showStarShip = (index) => {
    navigate(`${index}`);
  };
  return (
    <div className="grid">
      {props.starships.map((starship, index) => (
        <div key={index} className="card" onClick={() => showStarShip(index)}>
          <p className="main-data">
            <span>starship name:</span> {starship.name}
          </p>
          {/* <p className="sub-data">
            <span>model:</span> {starship.model}
          </p>
          <p className="sub-data">
            <span>manufacturer:</span> {starship.manufacturer}
          </p>
          <p className="sub-data">
            <span>passengers:</span> {starship.passengers}
          </p> */}
        </div>
      ))}
    </div>
  );
};

export default StarshipsList;
