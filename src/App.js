import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import { BASE_URL } from './global'
import Starship from './components/Starship'

function App() {
    const [starship, setStarship] = useState([])
  
  useEffect(() => {
    const getStarship = async () => {
      const response = await axios.get(`${BASE_URL}/starships`)
      console.log(response.data.results)
      setStarship(response.data.results)
    }
  getStarship()
  }, [])
  
    return (
      <div>
        <Starship 
                  starship={starship}
                                      />
      </div>
    )
}
export default App
