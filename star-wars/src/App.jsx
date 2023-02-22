import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import StarshipsList from "./components/StarshipsList";
import StarshipPage from "./components/StarshipPage";
import CharactersList from "./components/CharactersList";
import Landing from "./components/Landing";
import PlanetsList from "./components/PlanetsList";
import VehiclesList from "./components/VehiclesList";
import SpeciesList from "./components/SpeciesList";
import FilmsList from "./components/FilmsList";
import { useState, useEffect } from "react";
import axios, { all } from "axios";
import { BASE_URL } from "../src/globals";

function App() {
  const [starShips, setStarShips] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const getStarShips = async () => {
      const response = await axios.get(`${BASE_URL}/starships/`);
      setStarShips(response.data.results);
    };
    getStarShips();
  }, []);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get(`${BASE_URL}/people/`);
      setCharacters(response.data.results);
    };
    getCharacters();
  }, []);

  useEffect(() => {
    const getPlanets = async () => {
      const response = await axios.get(`${BASE_URL}/planets/`);
      setPlanets(response.data.results);
    };
    getPlanets();
  }, []);

  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get(`${BASE_URL}/films/`);
      setFilms(response.data.results);
    };
    getFilms();
  }, []);

  useEffect(() => {
    const getSpecies = async () => {
      const response = await axios.get(`${BASE_URL}/species/`);
      setSpecies(response.data.results);
    };
    getSpecies();
  }, []);

  useEffect(() => {
    const getVehicles = async () => {
      const response = await axios.get(`${BASE_URL}/vehicles/`);
      setVehicles(response.data.results);
    };
    getVehicles();
  }, []);

  return (
    <div children="App">
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : "non-active-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/starships"
          className={({ isActive }) =>
            isActive ? "active-link" : "non-active-link"
          }
        >
          Starships
        </NavLink>
        <NavLink
          to="/planets"
          className={({ isActive }) =>
            isActive ? "active-link" : "non-active-link"
          }
        >
          Planets
        </NavLink>
        <NavLink
          to="/characters"
          className={({ isActive }) =>
            isActive ? "active-link" : "non-active-link"
          }
        >
          Characters
        </NavLink>
        <NavLink
          to="/films"
          className={({ isActive }) =>
            isActive ? "active-link" : "non-active-link"
          }
        >
          Films
        </NavLink>
        <NavLink
          to="/species"
          className={({ isActive }) =>
            isActive ? "active-link" : "non-active-link"
          }
        >
          Species
        </NavLink>
        <NavLink
          to="/vehicles"
          className={({ isActive }) =>
            isActive ? "active-link" : "non-active-link"
          }
        >
          Vehicles
        </NavLink>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route
            path="/starships"
            element={<StarshipsList starships={starShips} />}
          />
          <Route
            path="/starships/:id"
            element={<StarshipPage starships={starShips} />}
          />
          <Route path="planets" element={<PlanetsList planets={planets} />} />
          <Route
            path="characters"
            element={<CharactersList characters={characters} />}
          />
          <Route path="films" element={<FilmsList films={films} />} />
          <Route path="species" element={<SpeciesList species={species} />} />
          <Route
            path="vehicles"
            element={<VehiclesList vehicles={vehicles} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
