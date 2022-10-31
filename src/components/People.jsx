import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../global'

const People = () => {

    const [people, setPeople] = useState([])
  
    useEffect(() => {
      const getPeople = async () => {
        const response = await axios.get(`${BASE_URL}/people`)
        console.log(response.data.results)
        setPeople(response.data.results)
      }
    getPeople()
    }, [])




    if (!people) {
        return <h2>Loading Please Wait - People</h2>
    } 
    
    else {
    return (
        <div className="grid">
            {
                people.map((value)=> (
                    <div key={value.name}
                        className="people">
                    <h3>Person: {value.name}</h3>

                    </div>
                ))
            }
        </div>
    )}

}
export default People