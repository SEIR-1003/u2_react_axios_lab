import{ BASE_URL } from '../globals'
import axios from 'axios'
import { useState, useEffect } from 'react'


const StarshipClass = (props) => {
    const [shipClass, setshipClass] = useState([])
 
  
    useEffect(()=>{
      const getShipClass = async () => {
        const response = await axios.get(`${BASE_URL}/starships`)
        console.log(response.data.results)
        setClass(response.data.results)
      }
      getClass()
    }, [])
    
    if(!shipClass) {
        return <h2> Loading Please Wait </h2>
    } else {
     return (
        <div className="display">
            {
                shipClass.map((shipClass)=>(
                    <div key={shipClass.name}
                            className="card">
                        
                        <h3> {shipClass.name}</h3>
                        
                    </div>
                ))
            }

        </div>
    )
}
}
export default StarshipClass