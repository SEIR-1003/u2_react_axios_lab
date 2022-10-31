import axios from "axios"
import { useState, useEffect } from "react"
import { BASE_URL_PEOPLE } from "../globals"

export default function People() {
const [peoples, setPeople] = useState([])

useEffect(() => {
    const getPeople = async () => {
        const response = await axios.get(`${BASE_URL_PEOPLE}`)
        console.log(response.data.results)
        setPeople(response.data.results)
    }
    getPeople()
}, [])
    return (
        <div className="People-main">
            <div className="component-header">
             <h1> People </h1>
             </div>

             <div className="grid">
                {
                    peoples.map((people) => (
                        <ul className="list">
                            <h1>{people.name} </h1>
                            <h2>height: {people.height}</h2>
                            <h2>mass: {people.mass}</h2>

                        </ul>
                    ))

                }
             </div>
        </div>
    )
}