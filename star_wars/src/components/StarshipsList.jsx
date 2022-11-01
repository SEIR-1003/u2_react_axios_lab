import { useNavigate } from 'react-router-dom'

const StarshipsList = (props) => {
    
    let navigate = useNavigate()

    const showShip = (index) => {
        navigate(`${index}`)
    }


    if(!props.starShips) {
        return <h2> Loading... Please wait.</h2>
    } else {
    
    return (
    <div className="grid">
        {
       props.starShips.map((ship, index) => (
        
        <div key={index}
                className='shipnames'>
        <h2 className="shipsTitle" onClick={() => showShip(index)}>{ship.name}</h2>
        
        </div>
       ))
}
       </div>
    )
}
}

export default StarshipsList