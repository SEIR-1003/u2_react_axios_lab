import '../App.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function Planets(){

    const [planets, setPlanets] = useState(null)

    useEffect(()=>{
        const getPlanets = async()=>{
            const planetsAPI = await axios.get(`https://swapi.dev/api/planets`)
            console.log(planetsAPI.data.results)
            setPlanets(planetsAPI.data.results)
        }

        getPlanets()

    }, [])

    function cap(string) {
        return string[0].toUpperCase() + string.substring(1)
    }

    function bool(number){
        return number === '1' ? 'Yes' : 'No'
    }

    if (!planets) return <h1>Loading..</h1>

    return(
        <>
            <h1>Planets</h1>
            {planets.map((planet,index)=>(
                <div key={index} className='p-3 bg-dark text-light rounded my-3'>
                    <h1>{planet.name}</h1>
                    <p>Population: {planet.population}</p>
                    <p>Terrain: {planet.terrain}</p>
                    <p>Has Water: {bool(planet.surface_water)}</p>

                </div>
            ))}
        </>
        
    )
}

export default Planets