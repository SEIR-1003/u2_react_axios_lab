

export default function StarshipsList (props) {
    return (
        <div className="starships-list">
            <h2>Starships</h2>
            <div className="list">
            {props.starships.map((ship) => (
                <div key={ship.name} className='card'>
                    <h2>{ship.name}</h2>
                    <p>Manufacturer: {ship.manufacturer}</p>
                    <p>Length: {ship.length}</p>
                    <p>Crew: {ship.crew}</p>
                </div>
            ))}
            </div>
        </div>
    )
}