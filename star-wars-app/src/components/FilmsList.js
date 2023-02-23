import { useNavigate } from "react-router-dom"

export default function FilmsList(props) {

    let navigate = useNavigate()


    const showFilm = (index) => {
        navigate(`${index}`)
    }

    return(
        <div className="grid">
            {
                props.films.map((film, index) => (
                    <div key={film.title} className="card" onClick={() => showFilm(index)}>
                        <h2><span>Film Title</span><br />{ film.title }</h2>
                    </div>
                ))
            }
        </div>
    )
}