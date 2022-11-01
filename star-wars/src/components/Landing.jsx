import React from "react"
import StarshipsList from "./StarshipsList"
import Planets from "./Planets"
import Characters from "./Characters"

 const Landing = () => {

return( 
    <div className="landing">  

        <StarshipsList />
        <Planets />
        <Characters />

    </div>
    )   
}  

export default Landing


