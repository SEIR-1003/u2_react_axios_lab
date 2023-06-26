import '../App.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function Films() {
  const [films, setFilms] = useState(null)

  useEffect(() => {
    const getFilms = async () => {
      const filmsAPI = await axios.get(`https://swapi.dev/api/films`)
      console.log(filmsAPI.data.results)
      setFilms(filmsAPI.data.results)
    }

    getFilms()
  }, [])

  if (!films) return <h1 className='py-5'>Loading...</h1>

  
  const sortedFilms = [...films].sort((a, b) => a.episode_id - b.episode_id)

  return (
    <>
      <h1 className='py-5'>Films</h1>
      {sortedFilms.map((film, index) => (
        <div key={index} className='films-div p-3 bg-dark text-light rounded my-3'>
          <h1>{film.title}</h1>
          <p>Episode {film.episode_id}</p>
          <p>Director: {film.director}</p>
          <p>Producer: {film.producer}</p>
          <p>{film.opening_crawl}</p>
        </div>
      ))}
    </>
  )
}

export default Films
