const Planets  =(props)=>{
    console.log(props.planets)

    if(!props.planets){
        return <h2>Loading Please Wait</h2>
    }else{

    }
    return(
        <div className="grid2">

        {
            props.planets.map((planets)=>(
                
                 <div key={planets.name} className='large orbit'>

                     <h2>{planets.name}</h2>
                     <h4>Population: {planets.population} inhabitants</h4>
                     <h4>Diameter: {planets.diameter}</h4>
                     <h4>Climate: {planets.climate}</h4>
                     <h4>Terrain: {planets.terrain}</h4>
                     <h4>Gravity: {planets.gravity}</h4>
                    

                 </div>
            ))


        }
        </div>

    )

}
export default Planets
