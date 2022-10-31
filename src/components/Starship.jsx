const Starship = (props) => {

    if (!props.starship) {
        return <h2>Loading Please Wait</h2>
    } 
    
    else {
    return (
        <div className="grid">
            {
                props.starship.map((value)=> (
                    <div key={value.created}
                        className="starship">
                    <h3>Name: {value.name}</h3>

                    </div>
                ))
            }
        </div>
    )}

}
export default Starship