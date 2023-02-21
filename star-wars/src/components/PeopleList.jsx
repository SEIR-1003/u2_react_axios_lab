const People = (props) => {
  return (
    <div className="grid">
      {props.people.map((person) => (
        <div key={person.created} className="card">
          <p className="main-data">
            <span>name:</span> {person.name}
          </p>
          <p className="sub-data">
            <span>height:</span> {person.height}
          </p>
          <p className="sub-data">
            <span>mass:</span> {person.mass}
          </p>
          <p className="sub-data">
            <span>gender:</span> {person.gender}
          </p>
        </div>
      ))}
    </div>
  );
};

export default People;
