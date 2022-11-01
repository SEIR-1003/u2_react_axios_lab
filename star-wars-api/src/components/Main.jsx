import { Route, Routes } from 'react-router-dom'
import StarShips from './StarShips'
import Planets from './Planets'
import Home from './Home'
import People from './People'


export default function Main (props) {


    return (
        <div className="main">
            
            <Routes>

                <Route exact path="/" element={<Home />}/>
                <Route exact path="starships" element={<StarShips starShips={props.starShips}/>}/>
                <Route exact path="planets" element={<Planets planets={props.planets}/>}/>
                <Route exact path="people" element={<People people={props.people}/>}/>

            </Routes>
        </div>
    )
}