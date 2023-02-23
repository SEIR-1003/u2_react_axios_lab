import { useNavigate } from "react-router-dom";

const FilmsList = (props) => {
  let navigate = useNavigate();
  const showFilm = (index) => {
    navigate(`${index}`);
  };
  return (
    <div className="grid">
      {props.films.map((film, index) => (
        <div
          key={film.episode_id}
          className="card"
          onClick={() => showFilm(index)}
        >
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
      ))}
    </div>
  );
};

export default FilmsList;
