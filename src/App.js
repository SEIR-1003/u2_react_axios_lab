import axios from 'axios';
import { useState, useEffect } from 'react';
import Main from './components/Main';
import './App.css';



function App() {

  const [starships, setStarships] = useState([])
  
    useEffect(() => {
      const getShips = async () => {
        const response = await axios.get('https://swapi.dev/api/starships')
        console.log(response.data.results)
        setStarships(response.data.results)
      }
  
      getShips()
    }, [])

  return (
    <div className="App">
     
      <Main starships={starships}/>

    </div>
  );
}

export default App;
