import { useNavigate } from "react-router-dom"

export default function Characters(props) {

    let navigate = useNavigate()

    const showCharacter = (index) => {
        navigate(`${index}`)
    }

    return(
        <div className="grid">
            {
                props.characters.map((character, index) => (
                    <div key={character.name} className="card" onClick={() => showCharacter(index)}>
                        <h2><span>Character Name</span><br />{ character.name }</h2>
                    </div>
                ))
            }
        </div>
    )
}