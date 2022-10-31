import { Route, Routes } from 'react-router-dom'
import Starship from './Starship'
import Planets from './Planets'
import People from './People'

export default function Main () {

return (
            <div className = "main">
                <Routes>
                    
                    <Route exact path="Starship" element={<Starship/>}/>

                    <Route exact path="Planets" element={<Planets/>}/>

                    <Route exact path="People" element={<People/>}/>


                </Routes>
            </div>)
    }