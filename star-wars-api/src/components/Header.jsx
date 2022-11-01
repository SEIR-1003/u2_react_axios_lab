import Nav from './Nav'

export default function Header () {
    return (
        <div className="header">
            <h1>Star Wars API</h1>

            <div className="header-nav">
                <Nav />
            </div>
        </div>
    )
}