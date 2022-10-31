const PlanetList = (props) => {
    return (
    <div className="grid3">
        {
       props.planets.map((planet) => (
        <div key={planet.name}
                className='shipnames'>
        <h3>{planet.name}</h3>

        </div>
       ))
}
       </div>
    )
}

export default PlanetList