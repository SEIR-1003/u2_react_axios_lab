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
        </div>
      ))}
    </div>
  );
};

export default FilmsList;
