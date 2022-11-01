import { useState, useEffect } from "react";
import axios from "axios";

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get("https://swapi.dev/api/films");
      console.log(response.data.results);
      setFilms(response.data.results);
    };

    getFilms();
  }, []);

  if (!films) {
    return <h2> Loading Please Wait</h2>;
  } else {
    return (
      <div className="grid">
        {films.map((film) => (
          <div key={film.episode_id} className="card">
            <h3> {film.title} </h3>
          </div>
        ))}
      </div>
    );
  }
};

export default Films;
