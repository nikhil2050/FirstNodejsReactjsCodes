import React from 'react'

const Props_FuncComponent_Hi = (props) => {
    console.log(props)
    return (
        <div>
            <h1> Hi {props.desig} {props.name} </h1>
            {props.children}
        </div>
    )
}

export default Props_FuncComponent_Hi