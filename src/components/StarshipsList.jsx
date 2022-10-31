import { useState, useEffect} from 'react'
import axios from 'axios'

const StarshipsList = () => {

    const [starships, setStarships] = useState([])
  
    useEffect(() => {
      const getShips = async () => {
        const response = await axios.get('https://swapi.dev/api/starships')
        console.log(response.data.results)
        setStarships(response.data.results)
      }
  
      getShips()
    }, [])

    if(!starships) {
        return <h2> Loading Please Wait</h2>
    } else {

    return (

        <div className="grid">
            {
                starships.map((starship) => (
                    <div key={starship.name}
                        className='card'>
                    
                        <h3> {starship.name}</h3>
                        <h3> Manufacturer: {starship.manufacturer}</h3>
                        <h3> Passengers: {starship.passengers}</h3>
                        <h3> Length: {starship.length}</h3>

                    </div>
                ))
            }
        </div>
    )
    } 
}

export default StarshipsList