import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ShipDetails = (props) => {

    let { index } = useParams()

    const [shipDetail, setShipDetail] = useState('')

    useEffect(() => {
        let selectedShip = props.starShips[index]
        setShipDetail(selectedShip)
    }, [props.starShips, index])
    return shipDetail ? (
        <div className='shipContainer'>
            <h3 className='testingh3'>Name: {shipDetail.name}</h3>
            <h3 className='testingh3'>Crew: {shipDetail.crew}</h3>
            <h3 className='testingh3'>Passangers: {shipDetail.passengers}</h3>
            <h3 className='testingh3'>MFG: {shipDetail.manufacturer}</h3>
            <h3 className='testingh3'>Cost: {shipDetail.cost_in_credits}</h3>
        </div>
    ) : (<h1>Loading...</h1>)
}

export default ShipDetails