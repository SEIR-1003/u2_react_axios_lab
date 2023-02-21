const FilmsList = (props) => {
  return (
    <div className="grid">
      {props.films.map((film) => (
        <div key={film.episode_id} className="card">
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
