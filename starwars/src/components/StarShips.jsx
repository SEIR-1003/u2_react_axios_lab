const StarShips =(props)=>{
    

    if(!props.starShips){
        return <h2>Loading Please Wait</h2>
    }else{

    }
    return(
        <div className="grid">

        {
            props.starShips.map((starShips)=>(
                
                 <div key={starShips.name} className='fleet'>

                     <h2>{starShips.name}</h2>
                     <h4>model: {starShips.model}</h4>
                     <h4>{starShips.cost_in_credits} credits</h4>
                     <h4>Crew: {starShips.crew} workers</h4>
                     <h4>Passengers: {starShips.passengers} units</h4>

                 </div>
            ))


        }
        </div>

    )

}
export default StarShips
