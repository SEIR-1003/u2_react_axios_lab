export default function VehiclesList (props) {
     console.log(props)
    if (!props.vehicles) {
       return <h2>Loading please wait.</h2>
    } else {
       return (
           <div className="grid">
               {
                   props.vehicles.map((vehicle) => (
                       <div  className="vehicles-container">
                           <li key={vehicle.id} className="vehicles">
                           <h1>{vehicle.name}</h1>
                           <h2>Model: {vehicle.model}</h2>
                           <h2>Manufacturer: {vehicle.manufacturer}</h2>
                           <h2>Cost in Credits: {vehicle.cost_in_credits}</h2>
                           </li>
                           </div>
                   ))
               }
           </div>
       )
   }
}