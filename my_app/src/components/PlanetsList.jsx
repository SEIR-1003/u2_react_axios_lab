const PlanetsList = (props) =>{
    console.log(props)

    if(!props.planets) {
        return <h2> ...Loading Please Wait</h2>
    } else {

    return(
        <div className="planets">

{
  props.planets.map((planets) => (
    <div key={planets.id} className="planet">
      <h3>{planets.name}</h3>
    </div>
  ))
}      
              


        </div>
    
)
}
}



export default PlanetsList