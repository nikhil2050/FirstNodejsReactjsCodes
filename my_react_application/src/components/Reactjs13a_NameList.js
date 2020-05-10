import React from 'react'

/* 
 * EXAMPLE : LIST RENDERING 
 */

function NameList()  {
    const names = ["Bruce", "Clark", "Diana"]

    const namesArray = names.map(name => (<p>{name}</p>))
    return (
/*         Alternative #1 */
/*      <div>
            <p>{names[0]}</p>
            <p>{names[1]}</p>
            <p>{names[2]}</p>
        </div> */    

/*      Alternative #2: Using map */
/*         <div>
            {names.map(name => (<p>{name}</p>))}
        </div> */

/*      Alternative #3:  */
        <div>
            {namesArray}
        </div>
    )
}

export default NameList