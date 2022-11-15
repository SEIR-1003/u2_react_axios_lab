import { useNavigate } from 'react-router-dom'

const StarshipList = (props) => {
 

let navigate = useNavigate()    

const showShip = (ship) =>{
    navigate(`${ship.name}`)
}
    console.log(props)

    return props.starShips ? (
        <div  className='detail'>
            <ul>
            <div className='detail-header'>
            {props.starShips?.map((ship, name)  =>(
                <li>
                    <span>name{ship.name}</span>
                    <span>model{}</span>
                    <span>manufacturer{}</span>
                    <button onClick={()=>showShip(ship)}>Details</button>
                </li>

            ))}

            </div>
            </ul>
             </div>
    ) : <h1>Loading...</h1>
    }
export default StarshipList