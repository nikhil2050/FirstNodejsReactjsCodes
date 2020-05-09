import React from 'react'

/* Simple Functional Component */
function ChildCompo(props)  {

    return (
        <div>
            {/* Alternative #1 */}
                {/*<button onClick={props.greetHandler}>Child Button - Greet Parent()</button> */}

            {/* Alternative #2 */}
                <button onClick={() => props.greetHandler('childParam1')}>Child Button - Greet Parent()</button> 


                </div>
    )
}

export default ChildCompo