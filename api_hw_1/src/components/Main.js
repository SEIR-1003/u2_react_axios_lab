import StarshipsList from "./StarshipsList";
import Home from "./Home";
import { Route, Routes, Link } from "react-router-dom";
import Charcters from "./Chracters";
import Planets from "./Planets";

const Main = (props) => {
  const iterable1 = props.starShips;
  const getShips = (props) => {
    return (
      <div className="grid">
        {iterable1.map((starship) => (
          <div className="card">
            <h3>
              <span id="keys">NAME </span> {starship.name}
            </h3>
            <h3>
              <span id="keys">MODEL </span> {starship.model}
            </h3>
            <h3>
              <span id="keys">MANUFACTURER </span> {starship.manufacturer}
            </h3>
            <h3>
              <span id="keys">COST IN CREDITS </span> {starship.cost_in_credits}
            </h3>
            <h3>
              <span id="keys">LENGTH </span> {starship.length}
            </h3>
            <h3>
              <span id="keys">MAX ATMOSPHERING SPEED </span>{" "}
              {starship.max_atmosphering_speed}
            </h3>
            <h3>
              <span id="keys">CREW </span> {starship.crew}
            </h3>
            <h3>
              <span id="keys">PASSANGERS </span> {starship.passangers}
            </h3>
            <h3>
              <span id="keys">CARGO CAPACITY </span> {starship.cargo_capacity}
            </h3>
            <h3>
              <span id="keys">CONSUMABLES </span> {starship.consumables}
            </h3>
            <h3>
              <span id="keys">HYPERDRIVE RATING </span>{" "}
              {starship.hyperdrive_rating}
            </h3>
            <h3>
              <span id="keys">MGLT </span> {starship.MGLT}
            </h3>
            <h3>
              <span id="keys">STARSHIP CLASS </span> {starship.starship_class}
            </h3>
            <h3>
              <span id="keys">CREATED </span> {starship.created}
            </h3>
            <h3>
              <span id="keys">EDITED </span> {starship.edited}
            </h3>
            <h3>
              <span id="keys">URL </span>{" "}
              <a href={starship.url} target="_blank">
              take me to url
              </a>
            </h3>
          </div>
        ))}
      </div>
    );
  };

  const iterable2 = props.planets;
  const getPlanets = (props) => {
    return (
      <div className="grid">
      {iterable2.map((planet) => (
         <div className="card">
           <h3>
             <span id="keys">NAME </span> {planet.name}
           </h3>
           <h3>
             <span id="keys">ROTATION PERIOD </span> {planet.rotation_period}
           </h3>
           <h3>
             <span id="keys">ORBITAL PERIOD </span> {planet.orbital_period}
           </h3>
           <h3>
             <span id="keys">DIAMETER </span> {planet.diameter}
           </h3>
           <h3>
             <span id="keys">CLIMATE </span> {planet.climate}
           </h3>
           <h3>
             <span id="keys">GRAVITY </span> {planet.gravity}
           </h3>
           <h3>
             <span id="keys">TERRAIN </span>{planet.terrain}
           </h3>
           <h3>
             <span id="keys">SURFACE WATER </span> {planet.surface_water}
           </h3>
           <h3>
             <span id="keys">POPULATION </span> {planet.population}
           </h3>
           <h3>
             <span id="keys">URL </span>
             <a href={planet.url} target="_blank">
               take me to url
             </a>
           </h3>
         </div>
       ))}
     </div>
    );
  };

  const iterable3 = props.characters;
  const getCharacters = (props) => {
    return (
      <div className="grid">
       {iterable3.map((character) => (
          <div className="card">
            <h3>
              <span id="keys">NAME </span> {character.name}
            </h3>
            <h3>
              <span id="keys">HEIGHT </span> {character.height}
            </h3>
            <h3>
              <span id="keys">MASS </span> {character.mass}
            </h3>
            <h3>
              <span id="keys">HAIR COLOR </span> {character.hair_color}
            </h3>
            <h3>
              <span id="keys">SKIN COLOR </span> {character.skin_color}
            </h3>
            <h3>
              <span id="keys">EYE COLOR </span>{" "}
              {character.eye_color}
            </h3>
            <h3>
              <span id="keys">BIRTH YEAR </span> {character.birth_year}
            </h3>
            <h3>
              <span id="keys">GENDER </span> {character.gender}
            </h3>
            <h3>
              <span id="keys">URL </span>{" "}
              <a href={character.url} target="_blank">
                take me to url
              </a>
            </h3>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="home">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/StarshipsList"
          element={<StarshipsList getShips={getShips(props)} />}
        />
        <Route path="/Planets" element={<Planets getPlanets={getPlanets(props)}/>}/>
        <Route path="/Characters" element={<Charcters getCharacters={getCharacters(props)}/>}/>
      </Routes>
    </div>
  );
};
export default Main;
