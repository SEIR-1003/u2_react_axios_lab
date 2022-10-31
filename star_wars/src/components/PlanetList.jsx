const PlanetList = (props) => {
    return (
    <div className="grid3">
        {
       props.planets.map((planet) => (
        <div key={planet.name}
                className='shipnames'>
        <h2 className="planetName">{planet.name}</h2>
        <h3>{planet.terrain}</h3>

        </div>
       ))
}
       </div>
    )
}

export default PlanetList