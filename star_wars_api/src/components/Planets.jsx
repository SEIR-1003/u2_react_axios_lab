import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Planets = (props) =>{
let { name } = useParams()

const [planet, setPlanet] = useState(null)

useEffect(() => {
    let selectedPlanet = props.planets?.find((planet) =>planet.name === name)
    setPlanet(selectedPlanet)
    console.log(planet)
},[props.planets, name])

return (
    <div className='shipDetails'>
        <p>{planet?.name}</p>
    
        
    </div>
)

}
export default Planets