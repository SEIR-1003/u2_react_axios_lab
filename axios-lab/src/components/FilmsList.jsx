export default function FilmsList (props) {
    // console.log(props)
    if (!props.films) {
       return <h2>Loading please wait.</h2>
    } else {
       return (
           <div className="grid">
               {
                   props.films.map((film) => (
                       <div  className="films-container">
                           <li key={film.id} className="films">
                           <h1>{film.title}</h1>
                           <h2>Director: {film.director}</h2>
                           <h2>Producer: {film.producer}</h2>
                           <p>{film.opening_crawl}</p>
                           <h5>Episode: {film.episode_id}</h5>
                           </li>
                           </div>
                   ))
               }
           </div>
       )
   }
}