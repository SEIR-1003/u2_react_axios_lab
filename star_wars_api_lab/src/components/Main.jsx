import { Route, Routes } from 'react-router-dom'
import CharacterList from './characters'
import StarshipList from './starship'
import PlanetList from './planets'


export default function Main (props) {

return(
        <div>

        <Routes>

        <Route exact path="/StarshipList" element={<StarshipList ships={props.ships}/>}/>
        <Route exact path="/PeopleList" element={<CharacterList people={props.people}/>}/>
        <Route exact path="/PlanetList" element={<PlanetList planet={props.planet}/>}/>

        </Routes>

    </div>
)
}

