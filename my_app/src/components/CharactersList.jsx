

const CharactersList = (props) =>{
    console.log(props)

    if(!props.peoples) {
        return <h2> ...Loading Please Wait</h2>
    } else {

    return(
        <div className="characters">

{
  props.peoples.map((peoples) => (
    <div key={peoples.id} className="character">
      <h3>{peoples.name}</h3>
    </div>
  ))
}      
              


        </div>
    
)
}
}



export default CharactersList