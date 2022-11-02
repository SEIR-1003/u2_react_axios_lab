import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function StarshipDetails ({starships}) {
  
  let { name } = useParams()

  const [starship, setStarship] = useState('')

  useEffect(() => {
    let selectedStarship = starships.find((starship) => starship.name === name)
    setStarship(selectedStarship)
    console.log(selectedStarship)
  }, [starships, name])

  console.log(starship)

  return starship ? (
    <div className="list">
      <div className='card'>
        <div className='cardTitle'>{starship.name}</div>
        <div>Model:</div><div>{starship.model}</div>
        <div>Manufacturer:</div><div>{starship.manufacturer}</div>
        <div>Crew:</div><div>{starship.crew}</div>
        <div>HyperDrive Rating:</div><div>{starship.hyperdrive_rating}</div>
      </div>
    </div>
  ): null
}