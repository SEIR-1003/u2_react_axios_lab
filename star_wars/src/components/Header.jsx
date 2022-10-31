import Nav from './Nav'

export default function Header () {
    return (
        <div className='header'>
            <h1>Welcome to StarWars</h1>

            <div className='header-nav'>
                <Nav />
            </div>
        </div>
    )
}