import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import People from './People';
import Planets from './Planets';
import PeopleDetails from './PeopleDetails'
import ShipDetails from './ShipDetails';
import StarShipList from './Star-ships';
import PlanetDetails from './PlanetDetails';



export default function Main () {
    return (
        <div className='main'> 
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Star-ships' element={<StarShipList />} />
            <Route exact path='/Star-ships/:name' element={<ShipDetails />}/>
            <Route exact path='/Planets' element={<Planets />} />
            <Route exact path='/planets/:name' element={<PlanetDetails />}/>
            <Route exact path='/People' element={<People />} />
            <Route exact path='/people/:name' element={<PeopleDetails />} />
        </Routes>
        </div>
    )
}