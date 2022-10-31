import React from 'react';

function Characters(props) {

    return (
        <div className = "grid">
    {
    props.characters.map((person) => (
        
        <div key={person.model} className="card">
            <h1> {person.name}</h1>
            <h4>Birth Year: {person.birth_year}</h4>
            <h4>Height: {person.height}cm</h4>
        </div>
    ))
    }
    </div>
    );
}

export default Characters;