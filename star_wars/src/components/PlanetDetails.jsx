import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PlanetDetails = (props) => {

    let { index } = useParams()

    const [planetDetail, setPlanetDetail] = useState('')

    useEffect(() => {
        let selectedPlanet = props.planets[index]
        setPlanetDetail(selectedPlanet)
    }, [props.planets, index])
    return planetDetail ? (
        <div className='shipContainer'>
            <h3 className='planCon1'>Name: {planetDetail.name}</h3>
            <h3 className='planCon1'>Pop: {planetDetail.population}</h3>
            <h3 className='planCon1'>Terrain: {planetDetail.terrain}</h3>
            <h3 className='planCon1'>Terrain: {planetDetail.rotation_period}</h3>
            <h3 className='planCon1'>Terrain: {planetDetail.orbital_period}</h3>
            
        </div>
    ) : (<h1>Loading...</h1>)
}

export default PlanetDetails