import React from 'react'

const Event_FuncCompo_Click = () => {
    {/* NOTE: Write keyword 'function' */}
    function clickHandler(){
        console.log("FuncCompo Click Event")
    }
    return(<div>
        {/* NOTE: In handler, don't write paranthesis '()' i.e. function call */}
        <button onClick={clickHandler}>FuncCompo Click Event</button>
    </div>)
}

export default Event_FuncCompo_Click