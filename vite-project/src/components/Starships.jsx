import '../App.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function StarshipsList() {
    const [starships, setStarships] = useState(null)
    const [ship, setShip] = useState(null)

    useEffect(() => {
        const getStarships = async () => {
            const starshipsAPI = await axios.get('https://swapi.dev/api/starships')
            console.log(starshipsAPI.data.results)
            setStarships(starshipsAPI.data.results)
        }

        getStarships()
    }, [])

    if (!starships) return <h1 className='py-5 my-5'>Loading...</h1>

    if (!ship) return (
        <div className='row-left py-5 my-5'>
            {starships.map((starship, index) => (
                <div
                key={index}
                className='starship-div hover'
                onClick={() => setShip(starship)}
                >
                    <h1>{starship.name}</h1>
                    <p>{starship.manufacturer}</p>
                </div>
            ))}
        </div>
    )

    return <Starship ship={ship} setShip={setShip} />
}

function cap(string) {
    return string[0].toUpperCase() + string.substring(1)
}

function Starship({ ship, setShip }) {
    const [pilots, setPilots] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const getPilots = async (pilots) => {
        setIsLoading(true)
        const pilotList = []
        for (let person of pilots) {
            const personAPI = await axios.get(person)
            pilotList.push(personAPI.data)
        }
        console.log(pilotList)
        setPilots(pilotList)
        setIsLoading(false)
    }

    useEffect(() => {
        if (ship && ship.pilots && ship.pilots.length > 0) {
            getPilots(ship.pilots)
        }
    }, [ship])

    const handleBackClick = () => {
        setShip(null)
        setPilots(null)
    }

    return (
        <div className='starship-div col-center my-5'>
            <div style={{ width: `100%`, display: `flex`, flexDirection: `row`, justifyContent: `flex-start` }}>
            <Button onClick={handleBackClick}>Back</Button>
            </div>
            <h1 style={{ fontSize: `5rem` }}>{ship.name}</h1>
            <h6>Class: {cap(ship.starship_class)}</h6>
            <p>{ship.manufacturer}</p>
            <p>Cost: {ship.cost_in_credits} credits</p>
            <p>Megalight Hours: {ship.MGLT}</p>
            <p>Cargo Capacity: {ship.cargo_capacity}</p>
            <p>Crew Size: {ship.crew}</p>
            <p>Passengers: {ship.passengers}</p>
            <p>Hyperdrive Rating: {ship.hyperdrive_rating}</p>
            {ship.pilots && ship.pilots.length > 0 && (
            <>
                <h2 className='py-3'>Pilots</h2>
                {isLoading ? (
                <p>Loading...</p>
                ) : (
                pilots.map((pilot, index) => <p key={index}>{pilot.name}</p>)
                )}
            </>
            )}
        </div>
    )
}

export default StarshipsList
