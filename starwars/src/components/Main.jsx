import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import StarshipsList from './StarshipsList';
import PeopleList from './PeopleList';
import PlanetList from './PlanetList';

export default function Main(props){
  console.log(props)
  return(
  <main>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/starships" element={<StarshipsList starships={props.starships}/>}/>
      <Route path="/planets" element={<PlanetList planets={props.planets}/>}/>
      <Route path="/people" element={<PeopleList people={props.people}/>}/>
    </Routes>
  </main>
  )
}