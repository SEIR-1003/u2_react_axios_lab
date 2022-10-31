import React from 'react';

function PlanetList(props) {
    return (
        <div className = "grid">
    {
        props.planets.map((planet) => (
        <div key={planet.name} className="card">
            <h1>{planet.name}</h1>
            <h4>Gravity: {planet.gravity}</h4>
            <h4>Terrain: {planet.terrain}</h4>
            <h4>Population: {(planet.population).toLocaleString('en-us')}</h4>
        </div>
    ))
    }
    </div>
    );
}

export default PlanetList;