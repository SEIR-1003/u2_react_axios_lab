export default function Characters(props) {
    console.log(props.character);
    return(
        <div className="grid">
            {
                props.characters.map((character) => (
                    <div key={character.name} className="card">
                        <h2><span>Name</span><br />{ character.name }</h2>
                        <h3><span>Height</span><br />{ character.height } cm</h3>
                        <h3><span>Mass</span><br />{ character.mass }</h3>
                        <h3><span>Hair Color</span><br />{ character.hair_color }</h3>
                        <h3><span>Skin Color</span><br />{ character.skin_color }</h3>
                        <h3><span>Eye Color</span><br />{ character.eye_color }</h3>
                        <h3><span>Birth Year</span><br />{ character.birth_year }</h3>
                        <h3><span>Gender</span><br />{ character.gender }</h3>
                    </div>
                ))
            }
        </div>
    )
}