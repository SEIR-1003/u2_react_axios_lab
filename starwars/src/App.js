import axios from 'axios';
import {useState,useEffect} from 'react';
import {BASE_URL} from './global.js';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
  const [starships, setStarships] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [people, setPeople] = useState([]);
  useEffect(
    ()=>{
      const getStarships = async ()=>{
        const response = await axios.get(`${BASE_URL}starships`);
        console.log(response);
        setStarships(response.data.results);
      }
      const getPlanets = async ()=>{
        const response = await axios.get(`${BASE_URL}planet`);
        console.log(response);
        setPlanets(response.data.results);
      }
      const getPeople = async ()=>{
        const response = await axios.get(`${BASE_URL}people`);
        console.log(response);
        setPeople(response.data.results);
      }
      getStarships();
      getPlanets();
      getPeople();

    }, []
  )
  return (
    <div className="App">
      <Header/>
      <Main starships={starships} people={people} planets={planets}/>
    </div>
  );
}

export default App;
