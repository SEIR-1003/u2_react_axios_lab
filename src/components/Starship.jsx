import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../global'


const Starship = () => {

    const [starship, setStarship] = useState([])
  
  useEffect(() => {
    const getStarship = async () => {
      const response = await axios.get(`${BASE_URL}/starships`)
      console.log(response.data.results)
      setStarship(response.data.results)
    }
  getStarship()
  }, [])
  




    if (!starship) {
        return <h2>Loading Please Wait - Starship</h2>
    } 
    
    else {
    return (
        <div className="grid">
            {
                starship.map((value)=> (
                    <div key={value.created}
                        className="starship">
                    <h3>Name: {value.name}</h3>

                    </div>
                ))
            }
        </div>
    )}

}
export default Starship