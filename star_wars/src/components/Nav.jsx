import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className='nav'>
            <Link to='/'>
                <h2 className='home1'>Home</h2>
            </Link>


            <Link to='/StarshipsList'>
                <h2 className='star1'>StarshipsList</h2>
            </Link>


            

            <Link to='/Planets'>
                <h2 className='plan1'>Planets</h2>
            </Link>

            <Link to='/Characters'>
                <h2 className='char1'>Characters</h2>
            </Link>
        </div>
    )
}