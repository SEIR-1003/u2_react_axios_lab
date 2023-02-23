import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const CharacterPage = (props) => {
  const [character, setCharacter] = useState("");
  let { id } = useParams();

  useEffect(() => {
    let selectedCharacter = props.characters[id];
    setCharacter(selectedCharacter);
  }, []);

  return character ? (
    <div className="details-grid">
      <div className="details-card">
        <p className="main-data">
          <span>name:</span> {character.name}
        </p>
        <p className="sub-data">
          <span>height:</span> {character.height}
        </p>
        <p className="sub-data">
          <span>mass:</span> {character.mass}
        </p>
        <p className="sub-data">
          <span>gender:</span> {character.gender}
        </p>
        <div>
          <button>
            <Link to="/characters">Back to Characters</Link>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <h1>Still loading...</h1>
  );
};

export default CharacterPage;
