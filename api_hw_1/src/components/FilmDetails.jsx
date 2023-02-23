import { useState, useEffect} from "react"
import { useParams, Link } from 'react-router-dom'

const FilmDetails = (props) => {
    const [film, setFilm] = useState('') // Should be null to start and later becomes an object with the selected ship.
    
    let { id } = useParams()
   console.log(id)
    useEffect(() => {
    let selectedFilm = props.films.find(
      (film) => film.title === id
    )
    setFilm(selectedFilm)
  }, [props.films, id])



  // using ternary as a guard operator
  // break smoothly
  return film ? (
    <div className="detail">
      <div className="detail-header">
        <div
          style={{
            minWidth: "30em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{film.title}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>
              <span id="keys">OPENING CRAWL </span> <p style={{color: 'white', fontSize : "1rem", textAlign: 'left', backgroundColor:"#8a7c7d", borderRadius:'1rem', padding: '1rem'}}>{film.opening_crawl}</p>
            </h3>
            <br/>
        </div>
      </div>
      <Link to="/films"><button>Film</button></Link>
    </div>
  ) : (
    <h1>404</h1>
  );
};

export default FilmDetails;
