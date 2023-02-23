import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function FilmPage(props){
    const [film, setFilm] = useState('')

    let {index} =  useParams()

    useEffect(() => {
        let selectedFilm = props.films[index]
        setFilm(selectedFilm)
    }, [props.films, index])

    return film ? (
        <div className="details-container">
            <header>
            <Link className="back-button" to="/films"><span class="material-symbols-outlined">arrow_back</span>Return to Films List</Link>
            </header>
            <main>
                <h1>{film.title}</h1>
                <h3><span>Opening Crawl</span><br />{ film.opening_crawl }</h3>
                <h3><span>Director</span><br />{ film.director }</h3>
                <h3><span>Producer</span><br />{ film.producer }</h3>
                <h3><span>Release Date</span><br />{ film.release_date }</h3>
            </main>
        </div>
    ) : <h2>Film not found</h2>;
}