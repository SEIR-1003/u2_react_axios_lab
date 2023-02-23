import { useNavigate } from "react-router-dom"

export default function StarshipsList(props) {

    let navigate = useNavigate()

    const showStarship = (index) => {
        navigate(`${index}`)
    }

    return(
        <div className="grid">
            {
                props.starships.map((starship, index) => (
                    <div key={starship.name} className="card" onClick={() => showStarship(index)}>
                        <h2><span>Starship Name</span><br />{ starship.name }</h2>
                    </div>
                ))
            }
        </div>
    )
}