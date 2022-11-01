import { BASE_URL } from '../Globals'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const ShipList = (props) => {

    let navigate = useNavigate()

    const showShip = (ship) => {
        navigate(`${ship.id}`)
    }

    return(
        <div className="ship-grid">
            {
                {BASE_URL}.map((ship) => (
                    <div className="ship-card" onClick ={() => showShip(ship)} key={ship.id}>
                    <h3>{ship.name}</h3>
                    </div>
                ))
            }
        </div>
    )

}

export default ShipList