export default function PeopleList (props) {
     //console.log(props)
    if (!props.people) {
       return <h2>Loading please wait.</h2>
    } else {
       return (
           <div className="grid">
               {
                   props.people.map((person) => (
                       <div  className="people-container">
                           <li key={person.id} className="people">
                           <h1>{person.name}</h1>
                           <h2>Height: {person.height}cm</h2>
                           <h2>Mass: {person.mass}kg</h2>
                            <h2>Hair Color: {person.hair_color}</h2>
                            <h2>Skin Color: {person.skin_color}</h2>
                           </li>
                           </div>
                   ))
               }
           </div>
       )
   }
}