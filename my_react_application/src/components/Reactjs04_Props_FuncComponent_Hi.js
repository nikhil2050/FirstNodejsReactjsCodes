import React from 'react'

/*
 * Alternative #1: Using Props: 
 */
const Props_FuncComponent_Hi = (props) => {
    console.log(props)
    return (
        <div>
            <h1> Hi {props.desig} {props.name} </h1>
            {props.children}
        </div>
    )
}
 
/*
 * Alternative #2: Destructuring Props: 
 */
/*const Props_FuncComponent_Hi = ({name, desig, children}) => {
    return (
        <div>
            <h1> Hi {desig} {name} </h1>
            {children}
        </div>
    )
}*/

/*
 * Alternative #3: Destructuring Props: 
 */
/*const Props_FuncComponent_Hi = (props) => {
    const {name, desig, children} = props
    return (
        <div>
            <h1> Hi {desig} {name} </h1>
            {children}
        </div>
    )
}*/


export default Props_FuncComponent_Hi