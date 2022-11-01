import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import People from './People';
import Planets from './Planets';
import ShipDetails from './ShipDetails';
import StarShipList from './Star-ships';


export default function Main () {
    return (
        <div className='main'> 
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Star-ships' element={<StarShipList />} />
            <Route exact path='/Star-ships/:name' element={<ShipDetails />}/>
            <Route exact path='/Planets' element={<Planets />} />
            <Route exact path='/People' element={<People />} />
        </Routes>
        </div>
    )
}