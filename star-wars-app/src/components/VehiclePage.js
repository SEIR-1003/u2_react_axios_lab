import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function VehiclePage(props){
    const [vehicle, setVehicle] = useState('')

    let {index} =  useParams()

    useEffect(() => {
        let selectedVehicle = props.vehicles[index]
        setVehicle(selectedVehicle)
    }, [props.vehicles, index])

    return vehicle ? (
        <div className="details-container">
            <header>
            <Link className="back-button" to="/vehicles"><span class="material-symbols-outlined">arrow_back</span> Return to Vehicles List</Link>
            </header>
            <main>
                <h1><span>Vehicle Name</span><br />{vehicle.name}</h1>
                <h3><span>Model</span><br />{vehicle.model}</h3>
                <h3><span>Manufacturer</span><br />{vehicle.manufacturer}</h3>
                <h3><span>Cost in Credits</span><br />{vehicle.cost_in_credits}</h3>
                <h3><span>Length</span><br />{vehicle.length}</h3>
                <h3><span>Crew</span><br />{vehicle.crew}</h3>
                <h3><span>Passengers</span><br />{vehicle.passengers}</h3>
                <h3><span>Cargo Capacity</span><br />{vehicle.cargo_capacity}</h3>
                <h3><span>Consumables</span><br />{vehicle.consumables}</h3>
                <h3><span>Vehicle Class</span><br />{vehicle.vehicle_class}</h3>
            </main>
        </div>
    ) : <h2>Vehicle not found</h2>;
}