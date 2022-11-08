import { Link } from 'react-router-dom'

const StarshipsList = (props) =>{
    console.log(props)

    if(!props.starships) {
        return <h2> ...Loading Please Wait</h2>
    } else {

    return(
        <div className="starship">

{
  props.starships.map((starships) => (
    <div key={starships.id} className="ship">
      <h3>{starships.name}
      <Link to="/StarshipPage">Starship Page</Link></h3>
    </div>
  ))
}      
              


        </div>
    
)
}
}



export default StarshipsList