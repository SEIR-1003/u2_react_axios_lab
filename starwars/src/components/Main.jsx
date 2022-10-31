import { Route, Routes } from 'react-router-dom'
import StarshipsList from './StarshipsList'
import Planets from './Planets'
import Films from './Films'
import Navbar from './Navbar'

export default function Main() {
    return (
        <div ClassName="main">
            <Navbar />

            <Routes>
                <Route exact path="/StarshipsList" element={<StarshipsList />} />
                <Route exact path="/Planets" element={<Planets />} />
                <Route exact path="/Films" element={<Films />} />
            </Routes>
        </div>
    )
}