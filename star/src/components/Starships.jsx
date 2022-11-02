
import { useNavigate } from 'react-router-dom'
import shipData from "../data/ShipData.json"

const ShipList = (props) => {

    let navigate = useNavigate()

    const showShip = (ship) => {
        navigate(`${ship.results.id}`)
    }

    return(
        <div className="ship-grid">
            {
                shipData.results.map((ship) => (
                    <div className="ship-card" onClick ={() => showShip(ship)} key={ship.results.id}>
                    <h3>{ship.results.name}</h3>
                    </div>
                ))
            }
        </div>
    )

}

export default ShipList