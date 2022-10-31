const CharacterList = (props) => {
   
    if(!props.characters) {
        return <h2> Loading... Please wait.</h2>
    } else {
   
   
   
    return (
    <div className="grid2">
        {
       props.characters.map((people) => (
        <div key={people.name}
                className='shipnames'>
        <h2 className="peopleNames">{people.name}</h2>
        <h3>Gender: {people.gender}</h3>
        <h3>Birth Year:{people.birth_year}</h3>
    
        </div>
       ))
}
       </div>
    )
}
}

export default CharacterList