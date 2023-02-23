import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const FilmPage = (props) => {
  const [film, setFilm] = useState("");
  let { id } = useParams();

  useEffect(() => {
    let selectedFilm = props.films[id];
    setFilm(selectedFilm);
  }, []);

  return film ? (
    <div className="details-grid">
      <div className="details-card">
        <p className="main-data">
          <span>title:</span> {film.title}
        </p>
        <p className="sub-data">
          <span>opening crawl:</span> {film.opening_crawl}
        </p>
        <p className="sub-data">
          <span>director:</span> {film.director}
        </p>
        <p className="sub-data">
          <span>release date:</span> {film.release_date}
        </p>
      </div>
      <div>
        <button>
          <Link to="/films">Back to Films</Link>
        </button>
      </div>
    </div>
  ) : (
    <h1>Still loading...</h1>
  );
};

export default FilmPage;
