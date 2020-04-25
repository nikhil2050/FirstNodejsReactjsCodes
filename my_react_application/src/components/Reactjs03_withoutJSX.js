import React from 'react'

const Reactjs03_withoutJSX = () => {
/* 
    With JSX
  */ 
    // return (
    //     <div className="dummyClass">
    //         <h1>From withoutJSX.js - With JSX </h1>
    //     </div>
    // )
  
/* 
    WithOUT JSX
  */ 
    return React.createElement('div', {id:'dummyId', className:'dummyClass'}, 
            React.createElement('h1', null,'From withoutJSX.js - WithOUT JSX'))
}

export default Reactjs03_withoutJSX