const PlanetList = (props) => {
    
    if(!props.planets) {
        return <h2> Loading... Please wait.</h2>
    } else {
    
    
    return (
    <div className="grid3">
        {
       props.planets.map((planet) => (
        <div key={planet.name}
                className='shipnames'>
        <h2 className="planetName">{planet.name}</h2>
        <h3>Terrain: {planet.terrain}</h3>

        </div>
       ))
}
       </div>
    )
}
}

export default PlanetList