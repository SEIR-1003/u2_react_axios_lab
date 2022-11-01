// import { BASE_URL } from '../Globals'
// import axios from 'axios'
// import {useState, useEffect} from 'react'

// const Crew = (props) => {


//         const [ships, setShips] = useState([])
    
//         useEffect(() => {
//           const getShips = async () => {
//             const response = await axios.get(`${BASE_URL}/starships`)
//             console.log(response.data.results)
//             setShips(response.data.results)
//           }
    
//          getShips()
    
    
//         },[])


//     if(!ships) {
//         return <h2> Loading Please Wait</h2>
//     } else {
//     return (
//         <div className ="grid">
//             {
//                 ships.map((ship) =>(
//                     <div key={ship.crew} className = "card">
//                         <h3>{ship.crew}</h3>
//                         </div>
//                 ))
//             }

//         </div>
//     )
// }
// }

// export default Crew