export default function PeopleList(props){
  return(
    <section>
    <h2>List of Characters</h2>
    
      {
        (props.people.length)?
        <div className="flex"> {
        props.people.map((person,index)=>(
          <div key={index}>
            <h3>{person.name}</h3>
            <p><strong>Gender:</strong> {person.gender}</p>
            <p><strong>Height:</strong> {person.height} cm</p>
            <p><strong>Mass:</strong> {person.mass}</p>
            {
            (person.hair_color==="n/a" || person.hair_color==="none") ? true: <p><strong>Hair color:</strong> {person.hair_color}</p>
            }
            
            <p><strong>Eye color:</strong> {person.eye_color}</p>
          </div>
        ))}</div> : 
        <div className="loading">
          <h4>Loading Characters</h4>
          <div className="spinner"></div>
          </div>
      }

 
    </section>
  )
}