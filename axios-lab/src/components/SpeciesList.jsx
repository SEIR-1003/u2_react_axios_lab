export default function SpeciesList (props) {
     //console.log(props)
    if (!props.species) {
       return <h2>Loading please wait.</h2>
    } else {
       return (
           <div className="grid">
               {
                   props.species.map((specie) => (
                       <div  className="species-container">
                           <li key={specie.id} className="species">
                           <h1>{specie.name}</h1>
                           <h2>Classification: {specie.classification}</h2>
                           <h2>Designation: {specie.designation}</h2>
                           <h2>Avg Height: {specie.average_height}</h2>
                           <p>Skin Colors: {specie.skin_colors}</p>
                           </li>
                           </div>
                   ))
               }
           </div>
       )
   }
}