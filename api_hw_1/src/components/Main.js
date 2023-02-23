import StarshipsList from "./StarshipsList";
import Home from "./Home";
import { Route, Routes, Link, useNavigate} from "react-router-dom";
import Charcters from "./Chracters";
import Planets from "./Planets";
import ShipDetails from "./ShipDetails";
import PlanetDetails from "./PlanetDetails";
import CharcterDetails from "./ChracterDetails";
import { useState, useEffect } from 'react'
import Vehicles from "./Vehicles";
import VehicleDetails from './VehicleDetails'
import Films from './Films'
import FilmDetails from './FilmDetails'

const Main = (props) => {

  let navigate = useNavigate()

  const showShip = (starship) => {
    let path = starship.name
    //.replaceAll(/\s/g,'')
    navigate(`starshipslist/${(starship.name)}`)
  }

  const showPlanet = (planet) => {
    navigate(`planets/${(planet.name)}`)
  }

  const showCharacter = (character) => {
    navigate(`characters/${(character.name)}`)
  }

  const showVehicle = (vehicle) => {
    navigate(`vehicles/${(vehicle.name)}`)
  }

  const showFilm = (film) => {
    navigate(`films/${(film.title)}`)
  }

  const iterable1 = props.starShips;
  const getShips = (props) => {
    return (
      <div className="grid">
        {iterable1.map((starship) => (
          <div className="card" onClick={() => showShip(starship)} key={starship.name}>
            
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
      <div className="grid" >
      {iterable2.map((planet) => (
         <div className="card" onClick={() => showPlanet(planet)} key={planet.name}>
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
          <div className="card" onClick={() => showCharacter(character)} key={character.name}>
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

  const iterable4 = props.vehicles;
  const getVehicles = (props) => {
    return (
      <div className="grid">
       {iterable4.map((vehicle) => (
          <div className="card" onClick={() => showVehicle(vehicle)} key={vehicle.name}>
            <h3>
              <span id="keys">NAME </span> {vehicle.name}
            </h3>
            <h3>
              <span id="keys">MODEL </span> {vehicle.model}
            </h3>
            <h3>
              <span id="keys">MANUFACTURER </span> {vehicle.manufacturer}
            </h3>
            <h3>
              <span id="keys">COST IN CREDITS </span> {vehicle.cost_in_credits}
            </h3>
            <h3>
              <span id="keys">LENGTH </span> {vehicle.length}
            </h3>
            <h3>
              <span id="keys">MAX ATMOSPHERING SPEED </span>{" "}
              {vehicle.max_atmosphering_speed}
            </h3>
            <h3>
              <span id="keys">CREW </span> {vehicle.crew}
            </h3>
            <h3>
              <span id="keys">PASSANGERS </span> {vehicle.passangers}
            </h3>
            <h3>
              <span id="keys">CARGO CAPACITY </span> {vehicle.cargo_capacity}
            </h3>
            <h3>
              <span id="keys">CONSUMABLES </span> {vehicle.consumables}
            </h3>
            <h3>
              <span id="keys">HYPERDRIVE RATING </span>{" "}
              {vehicle.hyperdrive_rating}
            </h3>
            <h3>
              <span id="keys">VEHICLE CLASS </span> {vehicle.vehicle_class}
            </h3>
            <h3>
              <span id="keys">URL </span>{" "}
              <a href={vehicle.url} target="_blank">
              take me to url
              </a>
            </h3>
          </div>
        ))}
      </div>
    );
  };

  const iterable5 = props.films;
  const getFilms = (props) => {
    return (
      <div className="grid">
       {iterable5.map((film) => (
          <div className="card" onClick={() => showFilm(film)} key={film.name}>
            <h3>
              <span id="keys">TITLE </span> {film.title}
            </h3>
            <h3>
              <span id="keys">EPISODE ID </span> {film.episode_id}
            </h3>
            <h3>
              <span id="keys">OPENING CRAWL </span> <p style={{fontSize : "1rem", textAlign: 'left', backgroundColor:"#8a7c7d", borderRadius:'1rem', padding: '1rem'}}>{film.opening_crawl}</p>
            </h3>
            <h3>
              <span id="keys">DIRECTOR </span> {film.director}
            </h3>
            <h3>
              <span id="keys">PRODUCER </span> {film.producer}
            </h3>
            <h3>
              <span id="keys">RELEASE DATE </span>
              {film.release_date}
            </h3>
            <h3>
              <span id="keys">NUMBER OF CHARACTERS </span> {film.characters.length}
            </h3>
            <h3>
              <span id="keys">URL </span>{" "}
              <a href={film.url} target="_blank">
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
        <Route path="/StarshipsList/:id" element={<ShipDetails starShips={props.starShips}/>}/>
        <Route path="/Planets" element={<Planets getPlanets={getPlanets(props)}/>}/>
        <Route path="/Planets/:id" element={<PlanetDetails planets={props.planets}/>}/>
        <Route path="/Characters" element={<Charcters getCharacters={getCharacters(props)}/>}/>
        <Route path="/Vehicles" element={<Vehicles getVehicles={getVehicles(props)}/>}/>
        <Route path="/Vehicles/:id" element={<VehicleDetails vehicles={props.vehicles}/>}/>
        <Route path="/Characters/:id" element={<CharcterDetails characters={props.characters}/>}/>
        <Route path="/Films" element={<Films getFilms={getFilms(props)}/>}/>
        <Route path="/Films/:id" element={<FilmDetails films={props.films}/>}/>
      </Routes>
    </div>
  );
};
export default Main;
