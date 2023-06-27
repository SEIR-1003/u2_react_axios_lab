import '../App.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function Species(){

    const [species, setSpecies] = useState(null)

    useEffect(()=>{
        const getSpecies = async()=>{
            const speciesAPI = await axios.get(`https://swapi.dev/api/species`)
            console.log(speciesAPI.data.results)
            setSpecies(speciesAPI.data.results)
        }

        getSpecies()

    }, [])

    function cap(string) {
        return string[0].toUpperCase() + string.substring(1)
    }

    if (!species) return <h1 className='py-5'>Loading..</h1>

    return(
        <>
            <h1 className='py-5'>Species</h1>
            {species.map((specie,index)=>(
                <div key={index} className='p-3 bg-dark text-light rounded my-3'>
                    <h1>{specie.name}</h1>
                    <p>Average Height: {specie.average_height}cm</p>
                    <p>Average Lifespan: {specie.average_lifespan} years</p>
                    <p>Designation: {specie.designation}</p>
                    <p>Language: {specie.language}</p>
                    <p>Eye Colors: {specie.eye_colors}</p>
                    <p>Hair Colors: {specie.hair_colors}</p>
                    <p>Skin Colors: {specie.skin_colors}</p>
                    
                </div>
            ))}
        </>
        
    )
}

export default Species