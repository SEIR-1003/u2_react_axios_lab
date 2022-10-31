import { Route, Routes } from 'react-router-dom'
import StarshipsList from './StarshipsList'
import Planets from './Planets';
import Films from './Films'
import Home from './Home'
import Navbar from './NavBar';

export default function Main () {
  
  return (
      <div className="main">
          
          <Navbar />

          <Routes>
              <Route exact path="Home" element={<Home/>}/>
              <Route exact path="StarshipsList" element={<StarshipsList/>}/>
              <Route exact path="Planets" element={<Planets/>}/>
              <Route exact path="Films" element={<Films/>}/>
          </Routes>

      </div>
  )
}

