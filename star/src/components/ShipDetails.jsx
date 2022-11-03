import {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom"
import ShipList from "./Starships"

const ShipDetails = (props) => {

    const[name,setShipDetails] = useState([])


    let navigate = useNavigate ()

    const showDetails = (details) => {
        navigate(`${ship.crew}`)
    }

    return (
        <div>
            {
                props.ship.name.map((crew) =>(
                    <h2>{ship.crew}</h2>
                ))    
            }
        </div>
    )
}
export default ShipDetails