import React from 'react';

function StarshipsList(props) {
    return (
    <div className = "grid">
    {
    props.starships.map((starship) => (
        <div key={starship.model} className="card">
            <h1>{starship.name}</h1>
            <h4>Model: {starship.model}</h4>
            <h4>Cost: {starship.cost_in_credits} ¢</h4>
            <h4>Hyperdrive Rating: {starship.hyperdrive_rating}</h4>
        </div>
    ))
    }
    </div>
    )
}

export default StarshipsList;
