import React, { Component } from 'react'

class Props_ClassComponent_Hi extends Component {
    render() {
        
        /*
        * Alternative #1: Using Props: 
        */
        return (
            <div>
                <h1> Hii {this.props.desig} {this.props.name} </h1>
                {this.props.children}
            </div>
        )

        /*
        * Alternative #2: Destructuring Props: 
        */
        // const {desig, name, children} = this.props   // IMP
        // return (
        //     <div>
        //         <h1> Hii {desig} {name} </h1>
        //         {children}
        //     </div>
        // )
    }
}

export default Props_ClassComponent_Hi