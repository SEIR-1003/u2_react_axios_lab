import Main from './components/Main'
import Header from './components/Header'
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'

function App() {

  const [starShips, setStarShips] = useState ([])
  const [planets, setPlanets] = useState ([])
  const [people, setPeople] = useState ([])





  useEffect (() => {

    const getStarShips = async () => {
      const response = await axios.get(`${BASE_URL}/starships`)
      console.log(response.data.results)
      setStarShips(response.data.results)
    }

    const getPlanets = async () => {
      const response = await axios.get(`${BASE_URL}/planets`)
      console.log(response.data.results)
      setPlanets(response.data.results)
    }

    const getPeople = async () => {
      const response = await axios.get(`${BASE_URL}/people`)
      console.log(response.data.results)
      setPeople(response.data.results)
    }



    getStarShips()
    getPlanets()
    getPeople()

  }, [])





  return (

    <div className="App">

      <header className="App-header">
        <Header />
      </header>

      <main className="App-main">
        <Main 
          starShips={starShips}
          planets={planets}
          people={people}/>
      </main>

    </div>

  );
}

export default App;
