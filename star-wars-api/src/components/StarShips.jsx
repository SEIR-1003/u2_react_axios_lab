export default function StarShips (props) {

    return (
        <div className="grid">
                    {
                    props.starShips.map((starShip) => (
                        <div 
                            key={starShip.name}
                            className="card">

                                <h3>{starShip.name}</h3>
                                <p>Model: {starShip.model}</p>
                                <p>Manufacturer: {starShip.manufacturer}</p>
                                <p>Cost: {starShip.cost_in_credits} credits</p>
                                <p>Passengers: {starShip.passengers} humanoids</p>
                                <p>Crew: {starShip.crew} humanoids</p>

                        </div>
                    ))
                }
        </div>
    )
}