import { useNavigate } from "react-router-dom";

const CharactersList = (props) => {
  let navigate = useNavigate();
  const showCharacter = (index) => {
    navigate(`${index}`);
  };
  return (
    <div className="grid">
      {props.characters.map((character, index) => (
        <div
          key={character.created}
          className="card"
          onClick={() => showCharacter(index)}
        >
          <p className="main-data">
            <span>name:</span> {character.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CharactersList;
