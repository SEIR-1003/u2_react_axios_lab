import { useNavigate } from "react-router-dom"

export default function VehiclesList(props) {

    let navigate = useNavigate()

    const showVehicle = (index) => {
        navigate(`${index}`)
    }

    return(
        <div className="grid">
            {
                props.vehicles.map((vehicle, index) => (
                    <div key={vehicle.model} className="card" onClick={() => showVehicle(index)}>
                        <h2><span>Vehicle Name</span><br />{ vehicle.model }</h2>
                    </div>
                ))
            }
        </div>
    )
}