

export default function People (props) {

    return (
        <div className="grid">
                    {
                    props.people.map((person) => (
                        <div 
                            key={person.name}
                            className="card">

                                <h3>{person.name}</h3>
                                <p>Height: {person.height} cm</p>
                                <p>Weight: {person.mass} kgs</p>
                                <p>Birth Year: {person.birth_year}</p>
                                <p>Hair Color: {person.hair_color}</p>
                                <p>Eye Color: {person.eye_color}</p>

                        </div>
                    ))
                }
        </div>
    )
}