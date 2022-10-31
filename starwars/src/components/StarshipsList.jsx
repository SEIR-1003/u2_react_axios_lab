export default function StarshipsList(props){
  return(
    <section>
    <h2>List of Starships</h2>

    {
      (props.starships.length) ? <div className="flex"> 
      {
        props.starships.map((starship,index)=>(
          <div key={index}>
            <h3>{starship.name}</h3>
            <p><strong>Model:</strong> {starship.model}</p>
            <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
            {
            (starship.cost_in_credits==="unknown") ? <p><strong>Cost:</strong> No pricing data</p>: <p><strong>Cost:</strong> {starship.cost_in_credits} credits</p>
            }
            
            <p><strong>Crew:</strong> {starship.crew} people</p>
            {
            (starship.max_atmosphering_speed==="n/a") ? true: <p><strong>Speed:</strong> {starship.max_atmosphering_speed}</p>
            }
            
          </div>
        ))
      }

    </div> : <div className="loading">
          <h4>Loading Starships</h4>
          <div className="spinner"></div>
          </div>
    }
    
    </section>
  )
}