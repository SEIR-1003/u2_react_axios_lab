import ShipList from './components/Starships'
import './App.css'
import Nav from "./components/Nav"
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home'
 

const App = () => {


  return (
      <div>
        <header>
      <Nav />
      </header>
      <main>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/Starships" element={<ShipList />}/>
      </Routes>
      </main>

    </div>
  );
}

export default App;
