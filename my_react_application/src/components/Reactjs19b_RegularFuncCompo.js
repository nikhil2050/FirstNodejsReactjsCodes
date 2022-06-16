import React from 'react'
import { render } from 'react-dom'

function RegularFuncCompo({name}) {
    
    console.log("Rendering RegularFunc Component*****")
    
    return(
        <div>
            {name}
        </div>
    )
}

export default RegularFuncCompo