
const PlanetList = (props) => {
  console.log(props.planet)

  if(!props.planet){
    return <h2>Loading Please Wait</h2>
  }else{

  return(
    <div>
      {
      props.planet.map((planet)=>(
        <div key={planet.id}>
          <h3>{planet.name}</h3>
        </div>
      ))}
    </div>
  )
}}

export default PlanetList