import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Films from './components/Films'
import People from './components/People'
import Planets from './components/Planets'
import Species from './components/Species'
import Vehicles from './components/Vehicles'
import StarshipsList from './components/Starships'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>  
          <Route path='/starships' element={<StarshipsList/>}></Route>
          <Route path='/films' element={<Films/>}></Route>
          <Route path='/people' element={<People/>}></Route>
          <Route path='/planets' element={<Planets/>}></Route>
          <Route path='/species' element={<Species/>}></Route>
          <Route path='/vehicles' element={<Vehicles/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
