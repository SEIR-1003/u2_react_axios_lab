import {Link} from "react-router-dom"

export default function StarshipsList(props){
    return(
        // (!props.api)?
        // <h2> nuh uh ah</h2>:
        <div className='grid'>
            {  
                props.apiSs.map((ss)=>(
                    <div key={ss.model} className="card"> 
                        <h2>{ss.name}</h2>
                        <div> Manufacturer: {ss.manufacturer}</div>
                        <p>Model : {ss.model} Class: {ss.starship_class}</p>
                        <p>Credits: {ss.cost_in_credits}</p>
                       
                        <div className="stats"> Stats
                            <li>Length: {ss.length }</li>
                            <li>Top speed: {ss.max_atmosphering_speed }</li>
                            <li>Crew: {ss.crew }</li>
                            <li>Passengers: {ss.passengers }</li>
                            <li>Cargo capacity: {ss.cargo_capacity }</li>
                            <li>Consumables: {ss.consumables }</li>
                            <li>Hyperdrive Rating: {ss.hyperdrive_rating }</li>
                            <li>MGLT: {ss.MGLT }</li>
                             <hr/>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}