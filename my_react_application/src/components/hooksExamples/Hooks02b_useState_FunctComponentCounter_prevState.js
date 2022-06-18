import React, {useState} from 'react'

// Step #1: Create FUNCTIONAL component
function UseState_FunctComponentCounter_PrevState() {

    const initCount = 0

    // Step #2: Create state variable
     const [count, setCount] = useState(initCount)

    // Step #3: Method to update the state variable
    // Required only if "Functional Component" is used
    const incrementBy3 = () => {
        // WRONG WAY TO setCount
        // for(let i=0; i<3; i++) {
        //     setCount(count + 1)
        // }

        // RIGHT WAY TO setCount : with prevCount
        setCount(prevCount => prevCount + 3)                    // <<<===
    }

    return (
        <div>
            <button onClick={incrementBy3}> +3 </button>
            <button onClick={() => setCount(initCount)}> Reset</button>
            Count : {count}
        </div>
    )
}

export default UseState_FunctComponentCounter_PrevState