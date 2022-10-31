const StarshipsList = (props) => {
    
    if(!props.starShips) {
        return <h2> Loading... Please wait.</h2>
    } else {
    
    return (
    <div className="grid">
        {
       props.starShips.map((ship) => (
        <div key={ship.name}
                className='shipnames'>
        <h2 className="shipsTitle">{ship.name}</h2>
        <h4>Crew: {ship.crew}</h4>
        <h4>Passengers: {ship.passengers}</h4>

        </div>
       ))
}
       </div>
    )
}
}

export default StarshipsList