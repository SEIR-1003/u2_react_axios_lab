import { Route, Routes } from 'react-router-dom'
import StarshipsList from './StarshipsList'
import PlanetsList from './PlanetsList'
import CharactersList from './CharactersList'
import Home from './Home'

export default function Main (props) {
    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="starships" element={<StarshipsList starships={props.starships}/>}/>
                <Route exact path="planets" element={<PlanetsList planets={props.planets}/>}/>
                <Route exact path="characters" element={<CharactersList characters={props.characters}/>}/>
            </Routes>
        </div>
    )
}