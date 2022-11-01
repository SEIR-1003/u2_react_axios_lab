import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CharacterDetails = (props) => {

    let { index } = useParams()

    const [characterDetail, setCharacterDetail] = useState('')

    useEffect(() => {
        let selectedCharacter = props.characters[index]
        setCharacterDetail(selectedCharacter)
    }, [props.characters, index])
    return characterDetail ? (
        <div className='shipContainer'>
            <h3 className='testingh3'>Name: {characterDetail.name} </h3>
            <h3 className='testingh3'>Height: {characterDetail.height} </h3>
            <h3 className='testingh3'>Mass: {characterDetail.mass} </h3>
            <h3 className='testingh3'>Hair: {characterDetail.hair_color} </h3>
            <h3 className='testingh3'>Birth Year: {characterDetail.birth_year} </h3>
            <h3 className='testingh3'>Gender: {characterDetail.gender} </h3>
            
        </div>
    ) : (<h1>Loading...</h1>)
}

export default CharacterDetails