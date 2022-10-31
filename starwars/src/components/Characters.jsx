const Characters =(props)=>{
    

    if(!props.characters){
        return <h2>Loading Please Wait</h2>
    }else{

    }
    return(
        <div className="grid3">

        {
            props.characters.map((characters)=>(
                
                 <div key={characters.name} className='people'>

                     <h2>{characters.name}</h2>
                     <h4>Born: {characters.birth_year}</h4>
                     <h4>height: {characters.height} cm</h4>
                    <h4>weight: {characters.mass} kgs</h4>
                 </div>
            ))


        }
        </div>

    )

}
export default Characters