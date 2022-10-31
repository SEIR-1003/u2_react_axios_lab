const CharacterList = (props) => {
    return (
    <div className="grid2">
        {
       props.characters.map((people) => (
        <div key={people.name}
                className='shipnames'>
        <h2 className="peopleNames">{people.name}</h2>
        <h3>{people.gender}</h3>
        <h3>{people.birth_year}</h3>
    
        </div>
       ))
}
       </div>
    )
}

export default CharacterList