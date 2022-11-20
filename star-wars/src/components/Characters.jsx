import { useState, useEffect } from "react";
import axios from "axios";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get("https://swapi.dev/api/people");
      console.log(response.data.results);
      setCharacters(response.data.results);
    };

    getCharacters();
  }, []);

  if (!characters) {
    return <h2> Loading Please Wait</h2>;
  } else {
    return (
      <div className="grid">
        {characters.map((people) => (
          <div key={people.id} className="card">
            <h3> {people.name} </h3>
          </div>
        ))}
      </div>
    );
  }
};

export default Characters;