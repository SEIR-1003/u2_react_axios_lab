import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'

function App() {

    return (
      <div>
        <div className="Navigation">
          <Nav/>
        </div>
      
        <div className="Navigation">
          <Main/>
        </div>

      </div>
    )
}
export default App
