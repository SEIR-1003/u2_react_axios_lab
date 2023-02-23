import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function CharacterPage(props){
    const [character, setCharacter] = useState('')

    let {index} =  useParams()

    useEffect(() => {
        let selectedCharacter = props.characters[index]
        setCharacter(selectedCharacter)
    }, [props.characters, index])

    return character ? (
        <div className="details-container">
            <header>
                <Link className="back-button" to="/characters"><span class="material-symbols-outlined">arrow_back</span> Return to Character List</Link>
            </header>
            <main>
                <h1>{character.name}</h1>
                <h3><span>Height</span><br />{ character.height } cm</h3>
                <h3><span>Mass</span><br />{ character.mass }</h3>
                <h3><span>Hair Color</span><br />{ character.hair_color }</h3>
                <h3><span>Skin Color</span><br />{ character.skin_color }</h3>
                <h3><span>Eye Color</span><br />{ character.eye_color }</h3>
                <h3><span>Birth Year</span><br />{ character.birth_year }</h3>
                <h3><span>Gender</span><br />{ character.gender }</h3>
            </main>
        </div>
    ) : <h2>Character not found</h2>;
}