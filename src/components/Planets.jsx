import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../global'

const Planets = () => {

    const [planet, setPlanet] = useState([])
  
    useEffect(() => {
      const getPlanet = async () => {
        const response = await axios.get(`${BASE_URL}/planets`)
        console.log(response.data.results)
        setPlanet(response.data.results)
      }
    getPlanet()
    }, [])




    if (!planet) {
        return <h2>Loading Please Wait - Planets</h2>
    } 
    
    else {
    return (
        <div className="grid">
            {
                planet.map((value)=> (
                    <div key={value.name}
                        className="starship">
                    <h3>Name: {value.name}</h3>

                    </div>
                ))
            }
        </div>
    )}

}
export default Planets