import { useNavigate } from 'react-router-dom'

const CharacterList = (props) => {
   
    let navigate = useNavigate()

    const showCharacter = (index) => {
        navigate(`${index}`)
    }



    if(!props.characters) {
        return <h2> Loading... Please wait.</h2>
    } else {
   
   
   
    return (
    <div className="grid2">
        {
       props.characters.map((people, index) => (
        <div key={people.name}
                className='shipnames'>
        <h2 className="peopleNames" onClick={() => showCharacter(index)}>{people.name}</h2>
      
    
        </div>
       ))
}
       </div>
    )
}
}

export default CharacterList