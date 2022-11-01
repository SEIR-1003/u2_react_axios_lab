import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../globals";

export default function ShipDetails(props) {

    let { index } = useParams() 

    const [ships, setShips] = useState([])
    const [shipIndex, setShipIndex] = useState ('')

//this pulls the array from the api 
    useEffect(() => {
        const getShips = async () => {
            const response = await axios.get(`${BASE_URL}`)
            setShips(response.data.results)
            console.log(response.data.results)
        }
        getShips()
    }, [])
// this SHOULD set the ships.name to name variable
    useEffect(() => {
        let selectedShip = ships.find(
            (ships) => ships.index === parseInt(index)
            
        )
          setShipIndex(selectedShip)
          console.log(selectedShip)
    }, [props.shipIndex, index])

    return ships ? (
        <div className="detail">
          <div className="detail-header">
            <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <h1>{ships.name}</h1>
            </div> 
            <p>{ships.manufacturer}</p>
          </div>
        </div>
      ) : null;
    }
    


