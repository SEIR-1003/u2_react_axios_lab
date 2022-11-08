
import StarshipsList from './StarshipsList'
import { useNavigate } from 'react-router-dom'


const StarshipPage = (props) => {

  let navigate = useNavigate()

  const showShipPage = (shipPage) => {
    navigate(`${shipPage.url}`)

  }

  useEffect(() => {
    const getShipPage= async () => {
      const response = await axios.get(`${BASE_URL}`)
      console.log(response.data.results) 
      setShipPage(response.data.results)
  
    }

  return (
    <div className="ship-grid">

      {
      props.shipPage.map((shipPage) => (
        <div className="ship-card" onClick={() => showShipPage(shipPage)} key={shipPage.url}>

          <h3>Ship Page</h3>
            
        </div>
      ))}
    </div>
    
  )
}


export default StarshipPage