import { useState, useEffect} from "react"
import { useParams, Link } from 'react-router-dom'

const CharacterDetails = (props) => {
    const [character, setCharacter] = useState('') // Should be null to start and later becomes an object with the selected Character.
    
    let { id } = useParams()
   
    useEffect(() => {
    let selectedCharacter = props.characters.find(
      (character) => character.name === id
    )
    setCharacter(selectedCharacter)
  }, [props.characters, id])

  // using ternary as a guard operator
  // break smoothly
  return character ? (
    <div className="detail">
      <div className="detail-header">
        <div
          style={{
            minWidth: "30em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{character.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>BIRTH YEAR: {character.birth_year}</h3>
          <h3>MASS: {character.mass}</h3>
        </div>
      </div>
      <Link to="/characters"><button>Characters</button></Link>
    </div>
  ) : (
    <h1>Character detail not found!</h1>
  );
};

export default CharacterDetails;
