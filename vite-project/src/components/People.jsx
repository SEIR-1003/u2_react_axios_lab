import '../App.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function People(){

    const [people, setPeople] = useState(null)

    useEffect(()=>{
        const getPeople = async()=>{
            const peopleAPI = await axios.get(`https://swapi.dev/api/people`)
            console.log(peopleAPI.data.results)
            setPeople(peopleAPI.data.results)
        }

        getPeople()

    }, [])

    function cap(string) {
        return string[0].toUpperCase() + string.substring(1)
    }

    if (!people) return <h1 className='py-5'>Loading..</h1>

    return(
        <>
            <h1 className='py-5'>People</h1>
            {people.map((person,index)=>(
                <div key={index} className='p-3 bg-dark text-light rounded my-3'>
                    <h1>{person.name}</h1>
                    <p>Gender: {cap(person.gender)}</p>
                    <p>Eye Color: {cap(person.eye_color)}</p>
                    <p>Height: {person.height}cm</p>
                    <p>Mass: {person.mass}kg</p>
                </div>
            ))}
        </>
        
    )
}

export default People