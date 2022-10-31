import { Route,Routes } from "react-router-dom";
import StarshipsList from "./StarshipsList";
import Home from "./Home";
import PlanetsList from "./PlanetsList";
import FilmsList from "./FilmsList"
import PeopleList from "./PeopleList"
import SpeciesList from "./SpeciesList"
import VehiclesList from './VehiclesList'

export default function Main (props) {
    //console.log(props)
    return (
        <div className="App-main">
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/starships" element={<StarshipsList ships={props.ships}/> }></Route>
                <Route exact path="/planets" element={<PlanetsList planets={props.planets}/> }></Route>
                <Route exact path="/films" element={<FilmsList films={props.films}/> }></Route>
                <Route exact path="/people" element={<PeopleList people={props.people}/> }></Route>
                <Route exact path="/species" element={<SpeciesList species={props.species}/> }></Route>
                <Route exact path="/vehicles" element={<VehiclesList vehicles={props.vehicles}/> }></Route>
            </Routes>
        </div>
    )
}