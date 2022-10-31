const StarshipList = (props) => {
  console.log(props.ships)

  if(!props.ships){
    return <h2>Loading Please Wait</h2>
  }else{

  return(
    <div>
      {
      props.ships.map((ship)=>(
        <div key={ship.id}>
          <h3>{ship.name}</h3>
        </div>
      ))}
    </div>
  )
}}

export default StarshipList

