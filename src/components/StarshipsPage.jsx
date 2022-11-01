import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import StarshipsList from './StarshipsList'
import axios from 'axios'

const StarshipsPage = (props) => {

    let { name } = useParams()

    console.log(name)

    const [starship, setStarship] = useState('')

    useEffect(() => {
        let selectedShip = props.starships.find(
            (element) => element.name === name
        )

        setStarship(selectedShip)
    }, [props.starships, name])

    return starship ? (
        <div className='ships-detail'>
            <h3> Manufacturer: {starship.manufacturer}</h3>
            <h3> Passengers: {starship.passengers}</h3>
            <h3> Length: {starship.length}</h3>
        </div>
    ):(<h1 className='four'>404 not found</h1>);
}

export default StarshipsPage