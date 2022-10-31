import { useState, useEffect} from 'react'
import axios from 'axios'

const Planets = () => {

    const [planets, setPlanets] = useState([])


    useEffect (() => {
        const getPlanets = async () => {
            const response = await axios.get('https://swapi.dev/api/planets')
            console.log(response.data.results)
            setPlanets(response.data.results)
        }
    
        getPlanets()
        }, [])

    if(!planets) {
        return <h2> Loading Please Wait</h2>
    } else {

    return (

        <div className="grid">
            {
                planets.map((planet) => (
                    <div key={planet.created}
                        className='card'>
                    
                    <h3> {planet.name} </h3>
                        

                    </div>
                ))
            }
        </div>
    )
    } 
}

export default Planets