const CharactersList = (props) => {
  return (
    <div className="grid">
      {props.characters.map((character) => (
        <div key={character.created} className="card">
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
        </div>
      ))}
    </div>
  );
};

export default CharactersList;
