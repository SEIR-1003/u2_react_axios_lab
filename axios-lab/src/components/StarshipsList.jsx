
export default function StarshipsList (props) {
       
             if (!props.ships) {
                return <h2>Loading please wait.</h2>
             } else {
                return (
                    <div className="grid">
                        {
                            props.ships.map((ship) => (
                                <div  className="ships-container">
                                    <li key={ship.id} className="ships">
                                    <h1>Name: {ship.name}</h1>
                                    <h3>Model: {ship.model}</h3>
                                    <h3>Manufacturer: {ship.manufacturer}</h3>
                                    <h4>Cost in Credits: {ship.cost_in_credits}</h4>
                                    </li>
                                    </div>
                            ))
                        }
                    </div>
                )
            }
}