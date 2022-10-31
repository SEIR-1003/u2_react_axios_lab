import "./App.css";
import axios from "axios";
import StarshipsList from "./components/StarshipsList";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import { BASE_URL } from "./components/globals";
import { STARSHIPS_URL } from "./components/globals";
import { PLANETS_URL } from "./components/globals";
import { FILMS_URL } from "./components/globals";
import { PEOPLE_URL } from "./components/globals";
import { SPECIES_URL } from "./components/globals";
import { VEHICLES_URL } from "./components/globals";

function App() {
  const [ships, SetShips] = useState([]);
  const [planets, SetPlanets] = useState([]);
  const [films, SetFilms] = useState([]);
  const [people, SetPeople] = useState([]);
  const [species, SetSpecies] = useState([]);
  const [vehicles, SetVehicles] = useState([]);

  useEffect(() => {
    const getAPIs = async () => {
      const res = await axios.get(`${BASE_URL}`);
      //console.log(res.data);
    };

    const getShips = async () => {
      const res = await axios.get(`${STARSHIPS_URL}`);
      SetShips(res.data.results);
    };

    const getPlanets = async () => {
      const res = await axios.get(`${PLANETS_URL}`);
      //console.log(res.data.results);
      SetPlanets(res.data.results);
    };

    const getFilms = async () => {
      const res = await axios.get(`${FILMS_URL}`);
      SetFilms(res.data.results);
    };

    const getPeople = async () => {
      const res = await axios.get(`${PEOPLE_URL}`);
      SetPeople(res.data.results);
    };

    const getSpecies = async () => {
      const res = await axios.get(`${SPECIES_URL}`);
      SetSpecies(res.data.results);
    };

    const getVehicles = async () => {
      const res = await axios.get(`${VEHICLES_URL}`);
      SetVehicles(res.data.results);
    };

    getAPIs();
    getShips();
    getPlanets();
    getFilms();
    getPeople();
    getSpecies();
    getVehicles();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-main">
          <Nav />
          <Main
            ships={ships}
            planets={planets}
            films={films}
            people={people}
            species={species}
            vehicles={vehicles}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
