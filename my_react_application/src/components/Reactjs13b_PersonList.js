import React from 'react'
import Person from './Reactjs13_Person' 

/* 
 * EXAMPLE : LIST RENDERING 
 */

function PersonList()  {
    const persons = [
        {id:1, name:"Bruce", age:30, skill:"Tech"}, 
        {id:2, name:"Clark", age:25, skill:"Alien"}, 
        {id:3, name:"Diana", age:28, skill:"Fairy"}, 
    ]

/*  Alternative #3:  */
/*     const personsArray = persons.map(person => (<p>I am {person.name}, age :: {person.age}, skill :: {person.skill}</p>) ) */

/*  Alternative #4: Standard coding */
    const personsArray = persons.map(person => <Person key={person.id} person={person} /> )


    return (
/*      Alternative #3, #4:  */
         <div>
            {personsArray}
        </div>

/*         Alternative #1 */
/*      <div>
            <p>{names[0]}</p>
            <p>{names[1]}</p>
            <p>{names[2]}</p>
        </div> */    

/*      Alternative #2: Using map */
/*          <div>
            {persons.map(person => (
                    <p>I am {person.name}, age :: {person.age}, skill :: {person.skill}</p>)
                )
            }
        </div> */
    )
}

export default PersonList