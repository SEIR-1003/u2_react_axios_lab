import { useState, useEffect } from "react"
import axios from "axios"

export default function CharactersList (props) {

    return (
        <div className="characters-list">
            <h2>Characters</h2>
            <div className="list">
            {props.characters.map((char) => (
                <div key={char.name} className='card'>
                    <h2>{char.name}</h2>
                    <p>Birth Year: {char.birth_year}</p>
                </div>
            ))}
            </div>
        </div>
    )
}