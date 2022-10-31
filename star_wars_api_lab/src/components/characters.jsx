
const CharacterList = (props) => {
  console.log(props.people)

  if(!props.people){
    return <h2>Loading Please Wait</h2>
  }else{

  return(
    <div>
      {
      props.people.map((people)=>(
        <div key={people.id}>
          <h3>{people.name}</h3>
        </div>
      ))}
    </div>
  )
}}

export default CharacterList