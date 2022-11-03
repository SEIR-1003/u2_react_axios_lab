import { useNavigate } from 'react-router-dom'


const ShipList = (props) => {

    let navigate = useNavigate()

    const showShip = (ship) => {
        navigate(`${ship.name}`)
    }

    return(
        <div className="ship-grid">
            {
                props.ships.map((ship) => (
                    <div className="ship-card" onClick ={() => showShip(ship)} key={ship.name}>
                    <h3>{ship.name}</h3>
                    <button>Ship Info</button>
                    </div>
                ))
            }
        </div>
    )

}

export default ShipList