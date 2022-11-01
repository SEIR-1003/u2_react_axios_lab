import { Route, Routes } from 'react-router-dom'
import StarshipsList from './StarshipsList'
import Planets from './Planets';
import Films from './Films'
import Home from './Home'
import Navbar from './NavBar';
import StarshipsPage from './StarshipsPage';


export default function Main (props) {
  
  return (
      <div className="main">
          
          <Navbar />

          <Routes>
              <Route exact path="Home" element={<Home/>}/>
              <Route exact path="StarshipsList" element={<StarshipsList starships={props.starships}/>}/>
              <Route exact path="Planets" element={<Planets/>}/>
              <Route exact path="Films" element={<Films/>}/>
              <Route path="starshipslist/:name" element={<StarshipsPage starships={props.starships}/>}/>
          </Routes>

      </div>
  )
}

