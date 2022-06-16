import React from 'react'
/* import { render } from 'react-dom'
 */
function MemoCompo({name}) {
    
    console.log('Rendering Memo Component*****')
    
    return(
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoCompo)        // <<<=== React.memo() = "Higher order components"