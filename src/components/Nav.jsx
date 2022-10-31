import {Link} from "react-router-dom"
export default function Nav (){
    return(
        <div>
        <Link to="/StarshipsList"> Starship</Link>
        <Link to="/Planets"> Planets</Link>
        <Link to="/Characters"> Character</Link>
    </div>
    )
}