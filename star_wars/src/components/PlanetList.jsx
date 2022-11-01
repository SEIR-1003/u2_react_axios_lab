import { useNavigate } from 'react-router-dom'

const PlanetList = (props) => {
    
    let navigate = useNavigate()

    const showPlanet = (index) => {
        navigate(`${index}`)
    }

    if(!props.planets) {
        return <h2> Loading... Please wait.</h2>
    } else {
    
    
    return (
    <div className="grid3">
        {
       props.planets.map((planet, index) => (
        <div key={planet.name}
                className='shipnames'>
        <h2 className="planetName" onClick={() => showPlanet(index)}>{planet.name}</h2>
        

        </div>
       ))
}
       </div>
    )
}
}

export default PlanetList