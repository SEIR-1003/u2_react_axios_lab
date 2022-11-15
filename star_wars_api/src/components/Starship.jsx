import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Starship = (props) =>{
let { name } = useParams()

const [starship, setStarship] = useState(null)

useEffect(() => {
    let selectedShip = props.starShips?.find((ship) =>ship.name === name)
    setStarship(selectedShip)
    console.log(starship)
},[props.starShips, name])

return (
    <div className='shipDetails'>
        <p>{starship?.name}</p>
    </div>
)

}
export default Starship
