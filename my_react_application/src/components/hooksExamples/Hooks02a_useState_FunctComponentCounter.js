import React, {useState} from 'react'

// Step #1: Create FUNCTIONAL component
function UseState_FunctComponentCounter() {

    // Step #2: Create state variable
    const [count2, setCount2] = useState(0)

    return (
        <div>
            {/* Step #3: Method to update the state variable */}
            <button onClick={() => setCount2(count2 + 1)}> Count {count2}</button>
        </div>
    )

}

export default UseState_FunctComponentCounter
