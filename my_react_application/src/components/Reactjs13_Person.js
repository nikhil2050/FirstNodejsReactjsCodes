import React from 'react'

/* EXAMPLE : LIST RENDERING */
function Person({person}) {
    return (
        <div>
            <p>I am {person.name}, age :: {person.age}, skill :: {person.skill}</p>
        </div>    
    )
}

export default Person