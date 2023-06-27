import '../App.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function Vehicles(){

    const [vehicles, setVehicles] = useState(null)

    useEffect(()=>{
        const getVehicles = async()=>{
            const vehiclesAPI = await axios.get(`https://swapi.dev/api/vehicles`)
            console.log(vehiclesAPI.data.results)
            setVehicles(vehiclesAPI.data.results)
        }

        getVehicles()

    }, [])

    function cap(string) {
        return string[0].toUpperCase() + string.substring(1)
    }

    if (!vehicles) return <h1 className='py-5'>Loading..</h1>

    return(
        <div >
            <h1 className='py-5'>Vehicles</h1>
            <div className='vehicles-container'>
                {vehicles.map((vehicle,index)=>(
                    <div key={index} className='p-5 bg-dark text-light rounded my-3'>
                        <h1>{vehicle.name}</h1>
                        <p>Model: {vehicle.model}</p>
                        <p>Cost: {vehicle.cost_in_credits} credits</p>
                        <p>Class: {cap(vehicle.vehicle_class)}</p>
                        <p>Max Passengers: {vehicle.passengers}</p>
                        <p>Max Speed: {vehicle.max_atmosphering_speed}</p>
                        <p>Length: {vehicle.length}</p>
                        <p>Cargo Capacity: {vehicle.cargo_capacity}</p>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default Vehicles