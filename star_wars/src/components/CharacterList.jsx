const CharacterList = (props) => {
    return (
    <div className="grid2">
        {
       props.characters.map((people) => (
        <div key={people.name}
                className='characterNames'>
        <h3>{people.name}</h3>
    
        </div>
       ))
}
       </div>
    )
}

export default CharacterList