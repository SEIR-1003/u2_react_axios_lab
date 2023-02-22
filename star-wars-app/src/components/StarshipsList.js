export default function StarshipsList(props) {
    console.log(props.starships);
    return(
        <div className="grid">
            {
                props.starships.map((starship) => (
                    <div key={starship.created} className="card">
                        <h2><span>Name</span><br />{ starship.name }</h2>
                        <h3><span>Model</span><br />{ starship.model }</h3>
                        <h4><span>Manufacturer</span><br />{ starship.manufacturer }</h4>
                        <h4><span>Cost In Credits</span><br />${ starship.cost_in_credits }</h4>
                        <h5><span>Crew</span><br />{ starship.crew }</h5>
                        <h5><span>Passengers</span><br />{ starship.passengers }</h5>
                    </div>
                ))
            }
        </div>
    )
}